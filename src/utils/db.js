import {Pool} from 'pg';

var db;

if (!db){
    db = new Pool({
        host: "localhost",
        user: "postgres",
        password: "admin",
        database: "postgres",
        port: "5432"
    })
}

export default db;