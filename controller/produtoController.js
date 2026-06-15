const ProdutoModel = require("../model/produtoModel")

async function listar(req,res) {
    
    try {
        const produtos = await ProdutoModel.listar()
        res.json(produtos)
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({erro: erro.mensagem})
    }
}

async function cadastrar(req,res) {
    try {
        
        const {nome,preco} = req.body

        await ProdutoModel.cadastrar(nome,preco)

        res.status(201).json({
            mensagem:"Produto cadastrado!"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            erro: erro.mensagem
        })
    }
}

module.exports = {
    listar,
    cadastrar
}