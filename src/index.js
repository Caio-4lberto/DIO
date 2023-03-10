import express from 'express';
import { routes } from './routes.js';

const server = express();
server.use(express.json());
server.use(routes);

server.listen(5000, () => {
    console.log('Server on the port 5000')
})