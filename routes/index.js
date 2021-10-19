const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

router.get('/home', indexController.index)
router.get('/pagamento', indexController.pagamento)
router.get('/cadastro', indexController.cadastro)
router.get('/carrinho', indexController.carrinho)
router.get('/item', indexController.item)
router.get('/opcoes-entrega', indexController.OpcoesEntrega)

module.exports = router