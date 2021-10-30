const fs = require('fs')
const { v4: uuid } = require('uuid');



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
    pageProduto: (req, res) => {
      res.render('cadastroProduto')
    },
    novoProduto: (req, res) => {
      let content = fs.readFileSync("./json/db.json", "utf8")
      let db = JSON.parse(content)

      let { nome, valor, descricao } = req.body
      db.usuarios.push({nome, valor: Number(valor), descricao})
  
      content = JSON.stringify(db)

      fs.writeFileSync("./json/db.json", content, "utf-8")
      res.redirect("/home")
    },
    
    cadastrar: (req,res) => {

      let content = fs.readFileSync("./json/db.json", "utf8")
      let db = JSON.parse(content)
      

      const { id,nome,sobrenome,email,telefone,cpf,senha,senhaConfirmar,dia,mes,ano,cep,endereco,numero,bairro,referencia,cidade,estado } = req.body ;

    db.usuarios.push( {id: uuid(),nome,sobrenome,email,telefone,cpf,senha,senhaConfirmar,dia,mes,ano,cep,endereco,numero,bairro,referencia,cidade,estado})

    content = JSON.stringify(db)

    fs.writeFileSync("./json/db.json", content, "utf-8")

      return  res.json(db.usuarios)  
    }


};

module.exports = indexController;