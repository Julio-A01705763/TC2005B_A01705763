const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Juegos',
    password: '',
});

module.exports = pool.promise();