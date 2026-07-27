const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (_request, response) => {
    response.render("index", {
        title: "Mini Message Board",
    });
});

module.exports = indexRouter;
