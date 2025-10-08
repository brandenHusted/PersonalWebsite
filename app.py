from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/new_page')
def new_page():
    return render_template('new_page.html')

if __name__ == '__main__':
    app.run(debug=True)
