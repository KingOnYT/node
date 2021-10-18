const express = require("express");
const app = express();
//connection
const dbURL =
  "mongodb+srv://Kevin:KK711711@nodoblogs.gwy1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const morgan = require("morgan");

const blogs = [
  {
    title: "How Programming Benefits you",
    snippet: "Programming benefits you!",
  },
  {
    title: "How self esteem Benefits you",
    snippet: "good vibes benefits you!",
  },
  {
    title: "How kevin Benefits you",
    snippet: "kevin benefits you!",
  },
];

app.set("view engine", "ejs");
app.use(express.static("public"));
app.listen(3000);
function running() {
  console.log("Node Blogs ");
  console.log("Local host Server ");
  console.log("------------------------");
  console.log("Server Running on Localhost:3000");
}
running();
// Logging info to console
app.use(morgan("dev"));
//home
app.get("/", (req, res) => {
  res.status(200);

  res.render("index", { title: "Home", blogs });
});
//about
app.get("/about", (req, res) => {
  res.status(200);

  res.render("about", { title: "About" });
});
//blogs create
app.get("/blogs/create", (req, res) => {
  res.status(200);

  res.render("create", { title: "Create" });
});
//blogs
app.get("/blogs", (req, res) => {
  res.status(200);

  res.render("blogs", { title: "blogs", blogs });
});
// 404 no founid
app.use((req, res) => {
  res.status(404);
  res.render("404", { title: "404" });
});
