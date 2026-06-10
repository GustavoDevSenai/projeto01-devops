const express = require("express")

const app = express()

app.use(express.json())

const produtos = []

app.get("/inicio",(req,res)=>{
    res.send("Hello, Word!")
})

app.post("/produtos",(req,res)=>{
    const {nome , preco} = req.body
    const produto = {
        nome,
        preco
    }
    produtos.push(produto)
    res.status(201).json({mensagem:"Produto cadastrado com sucessso!"})
})

app.get("/produtos",(req,res)=>{
    res.json(produtos)
})

app.listen(3001,()=>{
    console.log("Servidor rodando...")
})

