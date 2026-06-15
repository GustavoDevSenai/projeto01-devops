const conexao = require("../config/database")



async function cadastrar(nome,preco) {

    const db = await conexao

    const [produtos] = await db.query
    ('INSERT INTO produtos(nome,preco) VALUES (?,?)',
    [nome,preco])

    return produtos
}

async function listar() {
    
    const db = await conexao

    const [produtos] = await db.query('SELECT * FROM produtos')

    return produtos

    //listar produtos
}

module.exports = {
    cadastrar,
    listar
}