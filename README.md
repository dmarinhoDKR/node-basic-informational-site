# Mini Message Board

A small message board built with Express and EJS as part of The Odin Project NodeJS course.

Users can view messages, open an individual message, and submit new messages through an HTML form. Messages are stored in memory and reset whenever the server restarts.

## Features

- Display all messages on the home page
- Show the author, message text, and creation date
- Submit new messages through a form
- Redirect to the message board after submission
- Open an individual message on a details page
- Return `404` for an unknown message index
- Serve static CSS through Express
- Render dynamic HTML with EJS

## Routes

| Method | Route | Description |
|---|---|---|
| `GET` | `/` | Display all messages |
| `GET` | `/new` | Display the new-message form |
| `POST` | `/new` | Add a message and redirect to `/` |
| `GET` | `/messages/:messageIndex` | Display one message |
| `GET` | `/styles.css` | Serve the application stylesheet |

## Requirements

- Node.js 18 or later
- npm

## Run locally

Clone the repository and switch to the project branch:

```bash
git clone https://github.com/dmarinhoDKR/node-basic-informational-site.git
cd node-basic-informational-site
git switch mini-message-board
```

Install the dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

Open:

```text
http://localhost:3000
```

For development with automatic server restarts:

```bash
npm run dev
```

## Project structure

```text
.
├── public/
│   └── styles.css
├── routes/
│   └── indexRouter.js
├── views/
│   ├── form.ejs
│   ├── index.ejs
│   └── message.ejs
├── index.js
├── package.json
└── package-lock.json
```

## Message data

Each in-memory message contains:

```js
{
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
}
```

The application begins with two sample messages. New messages are appended to the array after a successful `POST /new`.

Because the project does not use a database, all messages added while the server is running disappear when the process restarts.

## Built with

- Node.js
- Express
- EJS
- HTML
- CSS

## Assignment

Built for [The Odin Project Mini Message Board assignment](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board).
