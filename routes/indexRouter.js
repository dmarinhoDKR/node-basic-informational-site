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

indexRouter.get(
    "/messages/:messageIndex",
    (request, response) => {
        const messageIndex = Number(
            request.params.messageIndex,
        );

        const message = Number.isInteger(messageIndex)
            ? messages[messageIndex]
            : undefined;

        if (!message) {
            response
                .status(404)
                .send("Message not found");
            return;
        }

        response.render("message", {
            title: "Message Details",
            message,
        });
    },
);

module.exports = indexRouter;
