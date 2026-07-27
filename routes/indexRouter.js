const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

indexRouter.get("/", (_request, response) => {
    response.render("index", {
        title: "Mini Message Board",
        messages,
    });
});

indexRouter.get("/new", (_request, response) => {
    response.render("form", {
        title: "New Message",
    });
});

indexRouter.post("/new", (request, response) => {
    messages.push({
        text: request.body.messageText,
        user: request.body.messageUser,
        added: new Date(),
    });

    response.redirect("/");
});

module.exports = indexRouter;
