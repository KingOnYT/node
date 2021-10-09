//server
const http = require("http");
const fs = require("fs");
const l = require("lodash");

const server = http.createServer((req, res) => {
  //lodash
  const num = l.random(1, 10);

  const greet = l.once(() => {
    console.log("hello");
  });

  greet();
  console.log(num);

  res.setHeader("Content-Type", "text/html");

  var path = "./views";
  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;

      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;

      break;
    default:
      res.statusCode = 404;

      path += "/404.html";
      break;
  }
  //send
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.end(data);
  });
});

const hn = 3000;
const lh = "localhost";
//host name
server.listen(hn, lh, () => {
  console.log(`Server is on ${lh}:${hn}`);
});
