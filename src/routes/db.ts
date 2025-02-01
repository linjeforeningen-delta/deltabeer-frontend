import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function setupDB() {
  const db = await open({
    filename: './database.sqlite',
    driver: sqlite3.Database
  });

  await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            balance INTEGER NOT NULL DEFAULT 0
        )
    `);

  return db;
}
export async function addUser(username: any, balance = 0) {
  const db = await setupDB();
  try {
    await db.run('INSERT INTO users (username, balance) VALUES (?, ?)', [username, balance]);
    return { success: true, message: `User ${username} added.` };
  } catch (error) {
    return { success: false, message: 'User already exists.' };
  }
}

export async function getBalance(username: any) {
  const db = await setupDB();
  const user = await db.get('SELECT balance FROM users WHERE username = ?', [username]);
  return user ? user.balance : null;
}

export async function updateBalance(username: any, amount: any) {
  const db = await setupDB();

  // Get current balance
  const user = await db.get('SELECT balance FROM users WHERE username = ?', [username]);
  if (!user) return { success: false, message: 'User not found.' };

  // Calculate new balance
  const newBalance = user.balance + amount;

  // Update balance in DB
  await db.run('UPDATE users SET balance = ? WHERE username = ?', [newBalance, username]);
  return { success: true, newBalance };
}
