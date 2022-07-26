
import express from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de rotas
app.use(usersRoute);
app.use(statusRoute);


// Inicialização do servidor
app.listen(3333, () => {
    console.log('Aplicação sendo executada na porta 3333!')
})