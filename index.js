const mysql = require('mysql');

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'mysqlpass',
  database: 'employees_db',
});

