import sqlite from 'better-sqlite3'

const DB = new sqlite('./dranildb.sqlite')

const schema = `
CREATE TABLE IF NOT EXISTS users(
    user_id INTEGER NOT NULL PRIMARY KEY,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS posts(
    id INTEGER NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT AS (lower(replace(title, ' ', '-'))),
    content TEXT NOT NULL,
    summary TEXT AS (substr(content, 1,50)),
    posted_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

`

DB.exec(schema)

export default DB