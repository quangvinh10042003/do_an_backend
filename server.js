const express = require("express");
const ejs = require("ejs");
const passport = require("passport");
const passportJwt = require("passport-jwt");
const server = express();
const bodyParser = require("body-parser");
const session = require("express-session");
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json()); //. api
// phải khai báo biến conn để kết nối
const conn = require("./connect");

server.set("view engine", "html");
server.engine("html", ejs.renderFile);

server.use(express.static("public"));
server.use(
  session({
    secret: "vinh-session",
    resave: true,
    saveUninitialized: false,
  })
);

require("./routes/admin")(server);
// 2- middleware
// server.use(function (req, res, next) {
//   if (!req.session.login) {
//     res.redirect("/login");
//   } else {
//     res.locals.login = req.session.login;
//     next();
//   }
// });

// chia router
require("./routes/home")(server);
require("./routes/product")(server);
require("./routes/category")(server);

server.listen(3000, function () {
  console.log("Server listening on port  http://localhost:3000");
});
