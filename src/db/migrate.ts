import 'dotenv/config';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { db, connection } from './db';

await migrate(db, { migrationsFolder: './drizzle' });

connection.end();