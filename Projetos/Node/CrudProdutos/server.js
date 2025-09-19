import express from 'express'
import { PrismaClient } from './generated/prisma/index.js';

const prisma = new PrismaClient()

const app = express()
app.use(express.json())



app.get("/produtos", async (req, res) => {
    
    const products = await prisma.product.findMany()

    res.status(201).json(products)

})

app.post("/produtos",async  (req, res) => {
    const produto = await prisma.product.create({
        data: {
            name: req.body.name,
            price: req.body.price,
            qtd : req.body.qtd
        }
    })

    res.status(201).json(produto)
})

app.put("/produtos/:id", async (req, res) => {
    const newUser = await prisma.product.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            price: req.body.price,
            qtd : req.body.qtd
        }
    })
    res.status(201).json(newUser)
})

app.delete("/produtos/:id", async (req, res) => {
    await prisma.product.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(201).json("Produto deletado com sucesso")
})




app.listen(3001)