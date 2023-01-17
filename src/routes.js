import { Router } from 'express'
import { usersController } from './controllers/usersController.js'

const routes = Router()

routes.get('/users', usersController.userList)

routes.get('/users/:name', usersController.userList2)

routes.get('/', usersController.saveForm)

routes.post('/users', usersController.createUser)

export { routes }

/*__________________  METODOS HTTP _________________________
GET - Ler dados
POST - Criar os dados
PUT/PATCH - Editar os dados
DELETE - Deletar os dados

_____________________ STATUS CODE  __________________________
200 = Sucesso
201 = Dado Criado
404 = Página não encontrada
_____________________________________________________________*/




