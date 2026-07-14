const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const hostname = "127.0.0.1";
const port = 8080;

const routes = {
    "/": "index.html",
    "/about": "about.html",
    "/contact-me": "contact-me.html",
};

const server = http.createServer((request, response) => {
    const requestUrl = new URL(
        request.url,
        `http://${request.headers.host}`,
    );

    const fileName = routes[requestUrl.pathname] ?? "404.html";
    const statusCode = routes[requestUrl.pathname] ? 200 : 404;
    const filePath = path.join(__dirname, fileName);

    fs.readFile(filePath, (error, content) => {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain; charset=utf-8",
            });
            response.end("Internal Server Error");
            return;
        }

        response.writeHead(statusCode, {
            "Content-Type": "text/html; charset=utf-8",
        });
        response.end(content);
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
