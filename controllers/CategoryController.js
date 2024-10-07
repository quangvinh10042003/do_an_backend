var Category = require("../models/category");

var CategoryController = {
  index: (req, res) => {
    Category.getAll((err, data) => {
      if (err) return new Error("Loi truy van " + err.sqlMessage);
      res.render("category/index", {
        categories: data,
        errors: null,
      });
    });
  },

  create: (req, res) => {
    res.render("category/create", {
      errors: null,
    });
  },

  store: (req, res) => {
    res.render("category/create", {
      errors: error.details[0],
    });

    Category.create(req.body, (err) => {
      if (err) return new Error("Loi truy va " + err.sqlMessage);
      res.redirect("/admin/category");
    });
  },

  edit: (req, res) => {
    let id = req.params.id;
    Category.getById(id, (err, data) => {
      if (err) return new Error("Loi truy va " + err.sqlMessage);
      res.render("category/edit", {
        categories: data.length > 0 ? data[0] : [],
        catEdit: data.length > 1 && data[1].length > 0 ? data[1][0] : {},
      });
    });
  },

  update: (req, res) => {
    let id = req.params.id;
    Category.update(req.body, id, (err) => {
      if (err) return new Error("Loi truy va " + err.sqlMessage);
      res.redirect("/admin/category");
    });
  },

  destroy: (req, res) => {
    Category.delete(req.params.id, (err) => {
      if (err) return new Error("Loi truy va " + err.sql);
      res.redirect("/admin/category");
    });
  },
};

module.exports = CategoryController;
