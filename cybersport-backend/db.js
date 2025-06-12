const { Pool } = require("pg");

const pool = new Pool({
	user: "postgres",
	host: "192.168.10.118",
	database: "cybersport",
	password: "12345678",
	port: 5432,
});





module.exports = pool;



