import sqlite from 'better-sqlite3'

const DB = new sqlite('./dranildb.sqlite')

const schema = `
CREATE TABLE IF NOT EXISTS users(
    user_id INTEGER NOT NULL PRIMARY KEY,
    fullname TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS categories(
    category_id INTEGER NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT AS (lower(name))
);
CREATE TABLE IF NOT EXISTS posts(
    blog_id INTEGER NOT NULL PRIMARY KEY,
    category_id INTEGER NOT NULL,
    is_archived INTEGER NOT NULL DEFAULT 0,
    title TEXT NOT NULL,
    slug TEXT AS (lower(replace(title, ' ', '-'))),
    content TEXT NOT NULL,
    summary TEXT AS (substr(content, 1,50)),
    thumbnail_url TEXT,
    posted_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS events(
    event_id INTEGER NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    event_date DATETIME NOT NULL,
    organizer TEXT NOT NULL,
    venue TEXT NOT NULL
);
`

DB.exec(schema)

export default DB