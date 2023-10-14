import { DataSource } from "typeorm";

// Configuração do banco de dados
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    // database: "API-CRUD"
})