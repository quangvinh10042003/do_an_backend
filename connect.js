const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shop_db",
});

conn.connect(function (err) {
  if (err) return new Error("Khong the ket noi toi CSDL");
});

module.exports = conn;
