import { neon } from "@neondatabase/serverless";
import 'dotenv/config';

// Criando conexão com o NeonDB
export const sql = neon(process.env.DATABASE_URL);
