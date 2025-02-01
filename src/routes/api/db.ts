import sqlite3 from "sqlite3";
import path from "path";
import type { User } from "../types";

const dbPath = path.resolve(__dirname, 'db.sqlite');

export const db: sqlite3.Database = new sqlite3.Database(dbPath, (err: Error | null) => {
  
  if (err) {
    console.error('Error opening database', err);
  } else {
    db.run(
      `CREATE TABLE IF NOT EXISTS users (
        userID INTEGER PRIMARY KEY AUTOINCREMENT,
        cardID INTEGER,
        first_name TEXT,
        last_name TEXT,
        phone_nr TEXT,
        balance INTEGER
       )`,
      (err: Error | null) => {
        if (err) {
          console.error('Error creating table', err);
        } else {
          console.log('Table ensured.');
        }
      }
    );
  }
});
