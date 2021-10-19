const indexController = {
    index: (req, res) => {
        res.render('index')
    },
    cadastro: (req,res) => {
      return  res.render('cadastro')
    },
    pagamento: (req,res) => {
      return res.render('formaDePagamento')
    },
    carrinho: (req,res) => {
      return res.render('carrinho')
    },
    item:(req,res) => {
      return res.render('item')
    },
    OpcoesEntrega:(req,res) => {
      return res.render("TelaDeVendas/opcoesDeEntrega")
    },
};

module.exports = indexController