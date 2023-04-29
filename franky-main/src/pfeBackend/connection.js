
//const Client = require('pg').Pool ;
const { Client } = require('pg');


const client = new Client({
    user: "postgres",
    password: "admin",
    database: "pfestage",
    host: "localhost",
    port: 5432
});



module.exports = client ;

