const mysql = require('mysql');

module.exports = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'bobby141294',
	database: 'belajar'
});
