const CategoryController = require("../controllers/CategoryController");
module.exports = function (server) {
  // phải khai báo biến conn để kết nối
  const conn = require("../connect");
  server.get("/admin/category", CategoryController.index);

  server.get("/admin/category/create", function (req, res) {
    res.render("category/create");
  });

  server.post("/admin/category/create", CategoryController.store);
};
