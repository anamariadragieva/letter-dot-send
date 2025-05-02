# 📬 Letter Dot Send

A simple blog-style web app built with Node.js, Express, and EJS. Users can create, view, edit, and delete blog posts. It also supports uploading images for each post.

---

## 🚀 Features

* Create new blog posts with a title, author, content, and image
* Edit or delete existing posts
* View blog previews and full content on a dedicated page
* Character counter for content
* Responsive layout using Bootstrap

---

## 🛠️ Tech Stack

* Node.js
* Express
* EJS (Embedded JavaScript Templates)
* Bootstrap 5
* Multer (for handling image uploads)

---

## 📂 Project Structure

```
letter-dot-send/
├── public/
│   ├── css/
│   │   └── style.css
│   └── uploads/              # Uploaded images stored here
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── blogs.ejs
│   ├── blog.ejs
│   ├── create-new.ejs
│   └── edit.ejs
├── .gitignore
├── README.md
├── app.js
├── package.json
└── package-lock.json
```

---

## 🖼️ Screenshots

Add screenshots here:

* Home page
* Create new post form
* Blog detail view
* Edit form

(You can capture and upload screenshots using your app and embed them with Markdown syntax like below)

```
![Create New Post](screenshots/create-new.png)
```

---

## 🧪 Installation & Running Locally

1. Clone the repository:

```bash
git clone https://github.com/anamariadragieva/letter-dot-send.git
cd letter-dot-send
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
node app.js
```

4. Open your browser and go to:

```
http://localhost:3000
```

---

## 🌍 Live Demo

Check out the live demo: [https://letter-dot-send.onrender.com](https://letter-dot-send.onrender.com) *(replace with actual link if hosted)*

---

## 🚢 Deployment Tips

To deploy your app using platforms like Render or Railway:

1. Push your code to GitHub
2. Go to Render ([https://render.com](https://render.com)) or Railway ([https://railway.app](https://railway.app))
3. Connect your GitHub repo
4. Set build and start commands:

   * Build command: `npm install`
   * Start command: `node app.js`
5. Ensure your image uploads folder (e.g., `public/uploads`) exists
6. Deploy

For persistent image storage, consider integrating a cloud storage solution (e.g., Cloudinary or AWS S3)

---

## 📬 Contact

Built by [Ana-Maria Dragieva](https://anamariadragieva.github.io/ana-maria-dragieva/). Feedback and contributions welcome!
