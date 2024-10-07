module.exports = function (server) {
  // phải khai báo biến conn để kết nối
  const conn = require("../connect");
  server.get("/login", function (req, res) {
    res.render("login.html");
  });
  // server.get("/", function (req, res) {
  //   res.render("home.html");
  // });
  server.post("/login", function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

    conn.query(sql, function (err, data) {
      if (err) return new Error("Loi truy van " + err.sqlMessage);
      if (data.length == 0) {
        res.render("login.html", {
          error: "Tài khoản hoặc mật khẩu không đúng",
        });
      } else {
        req.session.login = data[0];
        res.redirect("/");
      }
    });
  });
};
