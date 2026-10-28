import os
import sqlite3
import hmac
from datetime import date
from functools import wraps
from werkzeug.security import check_password_hash

from flask import (
    Flask, render_template, request, redirect,
    url_for, session, flash, abort
)

app = Flask(__name__)

# Set these environment variables before running the app.
# $env:FLASK_SECRET_KEY = python -c "import secrets; print(secrets.token_hex(32))"
app.secret_key = os.environ.get("FLASK_SECRET_KEY")

ADMIN_USERNAME = os.environ.get("ADMIN_USERNAME", "bhusted")
# Replace the placeholder with your generated hash. This sets it for the current PowerShell session only.

# If having trouble: $env:ADMIN_PASSWORD_HASH = python -c "from getpass import getpass; from werkzeug.security import generate_password_hash; print(generate_password_hash(getpass('Enter admin password: ')))"
# if ($env:ADMIN_PASSWORD_HASH) { "Password hash is configured" } else { "Password hash is missing" }
ADMIN_PASSWORD_HASH = os.environ.get("ADMIN_PASSWORD_HASH", "")

DATABASE = os.path.join(os.path.dirname(__file__), "bookings.db")

STATUSES = ["Pending", "Approved", "Declined", "Completed", "Canceled"]


def get_db():
    connection = sqlite3.connect(DATABASE)
    connection.row_factory = sqlite3.Row
    return connection



def init_db():
    with get_db() as db:
        db.execute("""
            CREATE TABLE IF NOT EXISTS bookings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL DEFAULT '',
                email TEXT NOT NULL DEFAULT '',
                phone TEXT DEFAULT '',
                service TEXT NOT NULL DEFAULT '',
                service_date TEXT NOT NULL DEFAULT '',
                service_time TEXT NOT NULL DEFAULT '',
                details TEXT DEFAULT '',
                status TEXT NOT NULL DEFAULT 'Pending',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)

        # Detect columns that already exist in the database.
        existing_columns = {
            row["name"]
            for row in db.execute("PRAGMA table_info(bookings)").fetchall()
        }

        # Add missing columns without deleting existing bookings.
        required_columns = {
            "name": "TEXT NOT NULL DEFAULT ''",
            "email": "TEXT NOT NULL DEFAULT ''",
            "phone": "TEXT DEFAULT ''",
            "service": "TEXT NOT NULL DEFAULT ''",
            "service_date": "TEXT NOT NULL DEFAULT ''",
            "service_time": "TEXT NOT NULL DEFAULT ''",
            "details": "TEXT DEFAULT ''",
            "status": "TEXT NOT NULL DEFAULT 'Pending'",
            "created_at": "TIMESTAMP",
        }

        for column, definition in required_columns.items():
            if column not in existing_columns:
                db.execute(
                    f"ALTER TABLE bookings ADD COLUMN {column} {definition}"
                )



def admin_required(view):
    @wraps(view)
    def wrapped_view(**kwargs):
        if not session.get("admin_authenticated"):
            return redirect(url_for("admin_login"))
        return view(**kwargs)
    return wrapped_view


@app.route("/")
def index():
    return render_template("index.html", today=date.today().isoformat())


@app.route("/book", methods=["POST"])
def book():
    name = request.form.get("name", "").strip()
    email = request.form.get("email", "").strip()
    phone = request.form.get("phone", "").strip()
    service = request.form.get("service", "").strip()
    service_date = request.form.get("date", "").strip()
    service_time = request.form.get("time", "").strip()
    details = request.form.get("details", "").strip()

    if not all([name, email, service, service_date, service_time]):
        flash("Please fill in all required fields.", "error")
        return redirect(url_for("index"))

    # Do not accept past dates.
    try:
        requested_date = date.fromisoformat(service_date)
    except ValueError:
        flash("Please enter a valid date.", "error")
        return redirect(url_for("index"))

    if requested_date < date.today():
        flash("Please choose today or a future date.", "error")
        return redirect(url_for("index"))

    with get_db() as db:
        
        
        db.execute("""
            INSERT INTO bookings (
                name,
                email,
                phone,
                service,
                service_date,
                service_time,
                details,
                status,
                created_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, 'Pending', CURRENT_TIMESTAMP)
        """, (
            name,
            email,
            phone,
            service,
            service_date,
            service_time,
            details 
))

    return render_template("confirmation.html", name=name)


@app.route("/admin/login", methods=["GET", "POST"])
def admin_login():
    if request.method == "POST":
        username = request.form.get("username", "")
        password = request.form.get("password", "")

        # A password must be configured; never allow a blank admin password.
        if (
            ADMIN_PASSWORD_HASH
            and hmac.compare_digest(username, ADMIN_USERNAME)
            and check_password_hash(ADMIN_PASSWORD_HASH, password)
):
            session.clear()
            session["admin_authenticated"] = True
            return redirect(url_for("admin_dashboard"))

        flash("Invalid username or password.", "error")

    return render_template("admin_login.html")


@app.route("/admin/logout", methods=["POST"])
@admin_required
def admin_logout():
    session.clear()
    return redirect(url_for("admin_login"))


@app.route("/admin")
@admin_required
def admin_dashboard():
    selected_status = request.args.get("status", "All")

    with get_db() as db:
        counts = {
            row["status"]: row["total"]
            for row in db.execute("""
                SELECT status, COUNT(*) AS total
                FROM bookings
                GROUP BY status
            """).fetchall()
        }

        if selected_status in STATUSES:
            bookings = db.execute("""
                SELECT * FROM bookings
                WHERE status = ?
                ORDER BY service_date ASC, service_time ASC
            """, (selected_status,)).fetchall()
        else:
            selected_status = "All"
            bookings = db.execute("""
                SELECT * FROM bookings
                ORDER BY
                    CASE status
                        WHEN 'Pending' THEN 0
                        WHEN 'Approved' THEN 1
                        ELSE 2
                    END,
                    service_date ASC,
                    service_time ASC
            """).fetchall()

    return render_template(
        "admin_dashboard.html",
        bookings=bookings,
        statuses=STATUSES,
        selected_status=selected_status,
        counts=counts
    )



@app.route("/admin/bookings/<int:booking_id>/status", methods=["POST"])
@admin_required
def update_booking_status(booking_id):
    new_status = request.form.get("status", "")

    if new_status not in STATUSES:
        abort(400, "Invalid booking status.")

    with get_db() as db:
        result = db.execute("""
            UPDATE bookings
            SET status = ?
            WHERE id = ?
        """, (new_status, booking_id))

        if result.rowcount == 0:
            abort(404, "Booking not found.")

    flash(f"Booking #{booking_id} updated to {new_status}.", "success")

    return redirect(url_for(
        "admin_dashboard",
        status=request.form.get("return_status", "All")
    ))


@app.route("/admin/bookings/<int:booking_id>/delete", methods=["POST"])
@admin_required
def delete_booking(booking_id):
    return_status = request.form.get("return_status", "All")

    if return_status not in ["All"] + STATUSES:
        return_status = "All"

    with get_db() as db:
        booking = db.execute(
            "SELECT status FROM bookings WHERE id = ?",
            (booking_id,)
        ).fetchone()

        if booking is None:
            flash("Booking not found.", "error")

        elif booking["status"] != "Completed":
            flash("Only completed bookings can be removed.", "error")

        else:
            db.execute(
                "DELETE FROM bookings WHERE id = ?",
                (booking_id,)
            )
            flash("Completed booking removed.", "success")

    return redirect(url_for(
        "admin_dashboard",
        status=return_status
    ))



init_db()

if __name__ == "__main__":
    # Debug mode is for local development only.
    app.run(debug=True)
