import { database } from '../database.js'   
//FOI IMPORTADO COM AS CHAVES PELO DATABASE ESTÁ EXPORTANDO POR DEFAULT

const usersController = {
    createUser (req, res) {
        const { name } = req.body

        //IF PARA NÃO CRIAR USUÁRIOS VÁZIOS
        if(name.length < 1){
            return res.status(403).json({mensagem: 'Não é possivel criar usuários sem um nome.'})
        }

        database.push(name)
        return res.status(201).json({'mensagem': `Usuário ${name} criado`})
    },

    userList (req, res) {
        return res.status(200).json(database)
    },

    userList2 (req, res) {
        const name = req.params.name;
        return res.status(200).json(name)
    },

    saveForm (req, res) {
        return res.json({
            message: `Bem-Vindo, ${req.query.name} `
        })
    },

    saveForm2 (req, res) {
        return res.json({
            message: `Bem-Vindo`
        })
    }
}

export { usersController }



