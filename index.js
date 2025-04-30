import express from "express";

const app = express();
const port = 3000;

const blogs = [];

app.use(express.static("public"));
app.use(express.urlencoded( { extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/blogs", (req, res) => {
    res.render("blogs.ejs", { blogs });
});

app.get("/create-new", (req, res) => {
    res.render("create-new.ejs");
});

app.post("/submit", (req, res) => {
    const { title, author, content } = req.body;

    blogs.push({
        title,
        author,
        content
    });

    // let title = req.body["title"];
    // let author = req.body["author"];
    // let content = req.body["content"];
    console.log("Form submitted!");
    console.log(blogs);
    console.log(`Title: ${req.body["title"].length}; Author: ${req.body["author"]}; Content: ${req.body["content"]}`);


    res.redirect("/blogs");
}); 

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

