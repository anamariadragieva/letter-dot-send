import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/blogs", (req, res) => {
    res.render("blogs.ejs");
});

app.get("/create-new", (req, res) => {
    res.render("create-new.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

