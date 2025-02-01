import { db } from "./db";
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import type { User } from '../types';
import path from "path";

const dbPath = path.resolve(__dirname, 'db.sqlite');

async function setupDB() {
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

  await db.exec(
    `CREATE TABLE IF NOT EXISTS users (
        userID INTEGER PRIMARY KEY AUTOINCREMENT,
        cardID INTEGER,
        first_name TEXT,
        last_name TEXT,
        phone_nr TEXT,
        balance INTEGER
    `);
  return db;
}

export async function addUser(user: User) {
  console.log(user);
  const db = await setupDB();
  try {
    await db.run('INSERT INTO users (username, balance) VALUES (?, ?)', [username, balance]);
    return { success: true, message: `User ${username} added.` };
  } catch (error) {
    return { success: false, message: 'User already exists.' };
  }
}

export async function get() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM users', (err, rows) => {
      if (err) {
        return reject({ status: 500, body: { error: 'Database error' } });
      }
      resolve({
        status: 200,
        body: { users: rows }
      });
    });
  });
}

export async function post({ request }) {
  const { name, email } = await request.json();

  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.run(query, [name, email], function (err) {
      if (err) {
        return reject({ status: 500, body: { error: 'Insert failed' } });
      }
      resolve({
        status: 201,
        body: { id: this.lastID, name, email }
      });
    });
  });
}
