const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost", //or wherever database is hosted
    user: "<your_username>",
    database: "top_users",
    password: "<your_pwd>",
    port: 5432 //default port 
});
