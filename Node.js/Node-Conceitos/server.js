import express from 'express' // ta importando o express da nova forma
import { PrismaClient } from './generated/prisma/index.js'; // vai chamar o prisma


const prisma = new PrismaClient() // utilizar o prisma pelo nome da variavel

const app = express() // esta falando que o app vai ser o express quando for utilizar
app.use(express.json()) // avisa o express que esta sendo usado json




app.get("/usuario", async (request, response) => {  
    
    const users = await prisma.user.findMany()
    
    response.status(201).json(users) // vai na tela o status 200 com o json com os usuarios
})

app.post("/usuario", async (request, response) => { // vai criar uma rota post que é para criar um usuario
    const usuarios = await prisma.user.create({ // vai criar o usuario e colocar na variavel de usuarios
        data: { // vai passar falar de onde vai vir as informações
            email: request.body.email,
            name: request.body.name,
            age: request.body.age
        }
    })
    response.status(201).json(usuarios) // vai responder no thunder client q o usuario foi criado com sucesso
})

app.put("/usuario/:id", async (request, response) => { // vai usar dos route params para pegar e atualizar os usuarios pelo id
    const usuarios = await prisma.user.update({ // vai fazer o update e colcoar na variavel usuarios
        where: { // vai primeiro saber como quer encontrar o usuario para atualizar
            id: request.params.id // vai pegar o usuario pelo id q chegou pela url
        },
        data: { // vai poder alterar todos essas informações vindas pelo body
            email: request.body.email,
            name: request.body.name,
            age: request.body.age
        }
    }) 
    response.status(201).json(usuarios) // vai responder no thunder client q o usuario foi editado com sucesso
})

app.delete("/usuario/:id", async (request, response) => { // vai deletar o usuario pelo id
    await prisma.user.delete({ // aqui vai deletar direto sem passar por uma variavel
        where: { // vai decidir como vai pegar o usuario
            id: request.params.id // vai deletar de acordo com o id
        }
    })
    response.status(201).json({Message: "Usuario deletao com sucesso"}) // vai responder no thunder client q o usuario foi deletado com sucesso
})

app.listen(3000) // vai mostrar a posta que esta rodando no localhost



// username: Lacb
// senha: charuto030306