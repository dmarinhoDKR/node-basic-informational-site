# Basic Informational Site

A basic informational website served by a Node.js HTTP server.

This project was completed as part of The Odin Project NodeJS course. It demonstrates file handling, HTTP routing, status codes, and serving HTML without a web framework.

## Routes

| Route | Page | Status |
|---|---|---:|
| `/` | Home | `200` |
| `/about` | About | `200` |
| `/contact-me` | Contact Me | `200` |
| Any other route | Custom 404 page | `404` |

## Requirements

- Node.js 18 or later

## Run locally

```bash
git clone https://github.com/dmarinhoDKR/node-basic-informational-site.git
cd node-basic-informational-site
npm start
```

Open the website at:

```text
http://127.0.0.1:8080
```

For development with automatic server restart:

```bash
npm run dev
```

## Built with

- Node.js
- Native Node.js modules: `http`, `fs`, and `path`
- HTML

## Project requirements

This project serves:

- `index.html` at `/`
- `about.html` at `/about`
- `contact-me.html` at `/contact-me`
- `404.html` for unknown routes
