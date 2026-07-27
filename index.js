const path = require("node:path");

const express = require("express");

const indexRouter = require("./routes/indexRouter");

const app = express();
const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.listen(port, () => {
    console.log(`Mini Message Board running at http://localhost:${port}`);
});
