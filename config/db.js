import { Pool } from 'pg';

const db = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'poc',
    password: '',
    port: 5432
})

export default db;