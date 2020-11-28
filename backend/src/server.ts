import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const port = 3333;

const app = express();

app.use(cors()); /* app.use(cors({ origin: [url1, url2] })) */

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(errorHandler);

app.listen(port,()=>{
    console.log("Executando o server na porta " +port)
}).on("error",(err)=>{
    console.log("Erro ao executar o server."); 
});