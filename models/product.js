const conn = require("../connect");

var Product = {
  getAll: (cb) => {
    let sql =
      "SELECT p.id, p.name, p.price, p.image_url, c.name AS 'category' FROM products p INNER JOIN categories c ON p.category_id = c.id ORDER BY id DESC";
    return conn.query(sql, cb);
  },
  getItemById: (id, cb) => {
    return conn.query("SELECT * FROM products WHERE id = ?", [id], cb);
  },
  create: (data, cb) => {
    return conn.query("INSERT INTO products SET ?", [data], cb);
  },
  update: (data, id, cb) => {
    return conn.query("UPDATE products SET ? WHERE id = ?", [data, id], cb);
  },
  destroy: (id, cb) => {
    return conn.query("DELETE FROM products WHERE id = ?", [id], cb);
  },
};
module.exports = Product;
