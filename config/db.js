var Pool = require('pg').Pool;
const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'poc',
    password: 'Ayadi1928#',
    port: 5432
})

module.exports = {db};