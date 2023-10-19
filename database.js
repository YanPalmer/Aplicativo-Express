import { DataSource } from "typeorm";
import { Geolocation } from "./entities/geolocation.js";

// Configuração do banco de dados
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "geolocation-status",
    entities: [Geolocation],
    // Synchronize é temporário!!!
    synchronize: true
})

// export const startDatabase = async () => {
//     try {
//         const teste = await AppDataSource.initialize();
//         console.log("Iniciado com sucesso: ", teste)
//     }
//     catch (err) {
//         console.log(err, "Erro ao conectar ao banco de dados");
//         // Trata o erro
//         console.log("Corrigindo código");
//         // Lança o erro para o próximo catch
//         throw err;
//     }
// }
// startDatabase()