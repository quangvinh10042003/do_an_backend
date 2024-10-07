var Category = require("../models/category");
var Product = require("../models/product");

var ProductController = {
  index: (req, res) => {
    Product.getAll((err, data) => {
      if (err) return new Error("Loi truy van " + err.sqlMessage);
      res.render("product/product", {
        pros: data,
      });
    });
  },
  create: (req, res) => {
    Category.getAll((err, data) => {
      if (err) return new Error("Loi truy van " + err.sqlMessage);
      res.render("product/create", {
        errors: null,
        categories: data,
      });
    });
  },
  store: (req, res) => {
    req.body.image = req.file.filename;
    Product.create(req.body, (err) => {
      if (err) return new Error("Loi truy van " + err.sqlMessage);
      res.redirect("product/product");
    });
  },
  edit: (req, res) => {
    Category.getAll(function (err, cate) {
      if (err) return new Error("Loi truy van " + err.sqlMessage);
      Product.getItemById(req.params.id, (error, data) => {
        if (error) return new Error("Loi truy van " + err.sqlMessage);
        res.render("product/edit", {
          errors: null,
          product: data[0],
          categories: cate,
        });
      });
    });
  },
  update: (req, res) => {
    if (req.file) {
      req.body.image = req.file.filename;
    }
    Product.update(req.body, req.params.id, (err) => {
      if (err) return new Error("Loi truy van " + err.sqlMessage);
      res.redirect("product");
    });
  },
  destroy: (req, res) => {
    let id = req.params.id;
    Product.destroy(id, (err) => {
      if (err) return new Error("Loi truy va " + err.sql);
      res.redirect("/admin/product");
    });
  },
};
module.exports = ProductController;
