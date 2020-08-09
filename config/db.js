var Pool = require('pg').Pool;
const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'poc',
    password: '',
    port: 5432
})

module.exports = {db};