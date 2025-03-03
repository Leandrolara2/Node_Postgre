import { sql } from './db.js';

async function dropTable() {
    try {
        await sql`DROP TABLE IF EXISTS videos`;
        console.log("✅ Tabela 'videos' apagada com sucesso!");
    } catch (error) {
        console.error("❌ Erro ao apagar a tabela:", error);
    }
}

// Executa a função
dropTable();
