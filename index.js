import express from "express";
import multer from "multer";
import path from "path";

const app = express();
const port = 3000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const months = ["January", "February", "March", "April", 
    "May", "June", "July", "August", "September", 
    "October", "November", "December"];
let blogs = [];

app.use(express.static("public"));
app.use(express.urlencoded( { extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("blogs.ejs", { blogs });
});

app.get("/blogs", (req, res) => {
    res.render("blogs.ejs", { blogs });
});

app.get("/create-new", (req, res) => {
    res.render("create-new.ejs", { blog: null });
});

app.post("/submit", upload.single("thumbnail"), (req, res) => {
    console.log("Form submitted!");

    const id = Date.now();
    console.log(id);
    const { title, author, content } = req.body;

    const today = new Date();
    const postDate = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

    const imageUrl = req.file ? req.file.filename : null;

    blogs.push({
        id,
        title,
        author,
        content,
        date: postDate,
        imageUrl
    });

    console.log(blogs);
    console.log(`Title: ${req.body["title"].length}; Author: ${req.body["author"]}; Content: ${req.body["content"]}`);

    res.redirect("/blogs");
}); 

app.get("/blogs/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const blog = blogs.find(blog => blog.id === id);

    if (!blog) {
        return res.status(404).send("Blog not found");
    }

    res.render("blog.ejs", { blog });
});

app.get("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const blog = blogs.find(blog => blog.id === id);

    if (!blog) return res.status(404).send("Not found");
    res.render("create-new", { blog });
});

app.post("/edit/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const blog = blogs.find(blog => blog.id === id);

    if (blog) {
        blog.title = req.body.title;
        blog.author = req.body.author;
        blog.content = req.body.content;
    }
    res.redirect("/blogs");
});

app.delete("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    blogs = blogs.filter(blog => blog.id !== id);
    res.status(200).json({ message: 'Deleted successfully' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

