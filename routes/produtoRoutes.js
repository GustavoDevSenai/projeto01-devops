const express = require("express")

const router = express.Router()

const ProdutoController = require("../controller/produtoController")


router.get("/produtos",ProdutoController.listar)
router.post("/produtos",ProdutoController.cadastrar)

module.exports = router