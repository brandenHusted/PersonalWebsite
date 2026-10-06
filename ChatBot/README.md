# Secure chatbot setup

This version moves the 466-question/response database and matching code out of browser JavaScript.

## Folder structure

```text
your-project/
├── server.js
├── brain.js
├── package.json
├── .env.example
└── public/
    ├── index.html
    └── chat.js
```

Put your existing HTML and CSS/assets inside `public/`.

## Install

Open a terminal in this folder:

```bash
npm install
```

## Run locally

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

Do not open `index.html` directly with `file://`, because the chatbot now calls `/api/ask`.

## Production

Set:

```text
ALLOWED_ORIGIN=https://your-real-domain.com
```

and make sure your hosting provider supplies HTTPS.

## Important

Do not put `brain.js` inside `public/`.

Do not put API keys, passwords, database passwords, or other secrets in `public/chat.js`.

The browser receives only the answer to the question it asked. The complete questions/responses and matching algorithm remain on the server.

## What changed from the old chatbot

- Removed all questions/responses from client-side JavaScript.
- Removed client-side matching.
- Added `/api/ask`.
- Added Helmet security headers.
- Added request-size validation.
- Added 30 requests/minute rate limiting.
- Added optional Origin checking.
- Removed anonymous `prompt()` teaching of the live database.
- Replaced `innerHTML` with DOM APIs and `textContent` to prevent XSS.
- Kept your hybrid keyword + Levenshtein matching behavior.
- Kept your Ask + Speak button arrangement.
