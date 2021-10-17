const express = require("express");
var err = "404";
const app = express();
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

app.listen(3000);
console.log("working");
app.get("/", (req, res) => {
  //   res.send("<h1>Hi</h1>");
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  //   res.send("<h1>about</h1>");
  res.render("about", { title: "About" });
});
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});
// 404 no founid
app.use((req, res) => {
  res.render("404", { title: err });

  //   res.send("<h1>main</h1>");
});
