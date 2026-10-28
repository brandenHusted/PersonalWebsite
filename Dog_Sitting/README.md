# Neighborhood Help booking form

A small Flask + SQLite starter for accepting neighborhood dog-sitting, driveway-shoveling, and other local-service requests.

## Requirements
- Python 3.10+
- pip

## Run locally

1. Extract this folder.
2. Open a terminal in the `neighborhood_services_booking` folder.
3. Create and activate a virtual environment (optional but recommended):

   **Windows**
   ```powershell
   py -m venv .venv
   .venv\Scripts\Activate.ps1
   ```

4. Install dependencies:
   ```powershell
   pip install -r requirements.txt
   ```

5. Start the site:
   ```powershell
   python app.py
   ```

6. Open http://127.0.0.1:5000 in your browser.

The first run creates `bookings.db` in this folder. Submitted forms are saved with a `Pending` status.

## Important before publishing online
- This is a starter, not a complete production booking platform.
- Set a long, random `FLASK_SECRET_KEY` environment variable before deploying.
- Use a hosting provider with HTTPS and persistent storage. Do not deploy SQLite to an ephemeral filesystem or a multi-instance setup without planning database persistence.
- Add an authenticated private admin dashboard before accepting real customer requests. This starter intentionally does not expose customer records through a public page.
- Add CSRF protection, rate limiting/spam prevention, and a clear privacy notice before public launch.
- Keep customer information private and collect only what you need.
