import { createConnection } from 'typeorm';

createConnection().then(connection => {
    console.log("Banco de dados conectado");
}).catch(error => console.log("Erro ao conectar o banco de dados:\n", error));