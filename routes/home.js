module.exports = function (server) {
  // phải khai báo biến conn để kết nối
  server.get("/", function (req, res) {
    res.render("home.html");
  });
};
