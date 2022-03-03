const mysql = require("mysql");

// Set database connection credentials
const config = {
  host: "162.243.235.211",
  user: "user345",
  password: "Password1@",
  database: "db345",
};

// Create a MySQL pool
const pool = mysql.createPool(config);

module.exports = pool;
