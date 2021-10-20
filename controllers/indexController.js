const Usuarios = [{
    id : null,
    nome:"Micael",
    sobrenome:"Santos",
    email:"12345@gmail.com",
    telefone:89234823,
    cpf:"126.234.555-12",
    senha:1020,
    senhaConfirmar:1020,
    dia: 21,
    mes: 6,
    ano: 2004,
    cep:"08459-567",
    endereco:"nsei",
    numero:123,
    bairro:"VilaAriozona",
    referencia: "perto de um lugar",
    cidade:"kemel",
    estado: 'SP',

}]

const  produtos  =  [
  {  /*id : uuid ( ) , */ nome : "Placa de Video" ,  valor : 400 , desconto: 20,  img : '/images/Teste-01.jpg'  },
  {  /*id : uuid ( ) , */ nome : "Placa de Video" ,  valor : 400 , desconto: 20,  img : '/images/Teste-02.jpg'  },
  {  /*id : uuid ( ) , */ nome : "Placa de Video" ,  valor : 400 , desconto: 20,  img : '/images/Teste-03.jpg'  },
  {  /*id : uuid ( ) , */ nome : "Placa de Video" ,  valor : 400 , desconto: 20,  img : '/images/Teste-04.jpg'  },    
]

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
    cadastroDeProduto: (req, res) => {
      res.render('cadastroProduto')
    },
    novoProduto: (req, res) => {
      let { nome, valor } = req.body
      produtos.push({nome, valor: Number(valor)})
      console.log(produtos)
      res.redirect("/home")
    },
    cadastrar: (req,res) => {
      Usuarios.push( 
      id,
      nome,
      sobrenome,
      email,
      telefone,
      cpf,
      senha,
      senhaConfirmar,
      dia,
      mes,
      ano,
      cep,
      endereco,
      numero,
      bairro,
      referencia,
      cidade,
      estado,
      )/*,
      atualizarProduto:(req, res) => {
         const  { nome , valor }
      }*/
    }

};

module.exports = indexController