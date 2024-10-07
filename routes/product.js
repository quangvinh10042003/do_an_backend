const ProductController = require("../controllers/ProductController");
module.exports = function (server) {
  // phải khai báo biến conn để kết nối
  const conn = require("../connect");
  server.get("/admin/product", ProductController.index);

  server.get("/admin/product/create", function (req, res) {
    res.render("product/create");
  });

  server.post("/admin/product/create", ProductController.store);
};
