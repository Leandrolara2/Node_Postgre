import { sql } from './db.js';

async function createTable() {
    try {
        await sql`
            CREATE TABLE videos (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                title VARCHAR(255) NOT NULL,
                description TEXT,
                duration INTEGER NOT NULL CHECK (duration >= 0),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );

        `;
        console.log("✅ Tabela criada com sucesso!");
    } catch (error) {
        console.error("❌ Erro ao criar a tabela:", error);
    }
}

createTable();
