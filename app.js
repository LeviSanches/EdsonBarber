const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const session = require("express-session")
const agenda = require("./models/Agenda");
const admin = require("./routes/admin");

// config: PEGAR INFORMAÇÃO DO FORMULÁRIO.
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// config: COLOCAR INFORMAÇÃO NO FURMULÁRIO.
app.engine("handlebars", handlebars({defaultLayout: "principal"}));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(session({
  secret: "mysecretkey",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000
  }
}));

function autenticacao(req, res, next) {
  if (req.session && req.session.autenticado) {
    return next();
  } else {
    return res.redirect("/senha");
  }
}

app.get("/index", (req, res) => {  
    res.render("index")
});

app.get("/final", (req, res) => {
  res.sendFile(__dirname + "/views/final.html")
});

//exibe os horários já agendados
app.get('/horarios-cadastrados/:data/:barbeiro', (req, res) => {
  const data = req.params.data; 
  const barbeiro = req.params.barbeiro;    
  agenda.findAll({ 
    where: { data, barbeiro } 
    }).then(agendamentos => {
      const horariosCadastrados = agendamentos.map(agendamento => agendamento.hora);
      res.send(horariosCadastrados);
    })
    .catch(erro => {
      res.send('Houve um erro: ' + erro);
    });
});

//realiza um agendamento
app.post("/index", (req, res) => {    
  agenda.create({
      nome: req.body.nome,
      telefone: req.body.telefone,
      barbeiro: req.body.opcao,
      servico: req.body.servico,
      data: req.body.data,
      hora: req.body.horario,
  }).then(() => {
      res.redirect("/final");
  }).catch((erro) => {
      res.send("Houve um erro: " + erro)
  })    
});



app.get("/senha", (req, res) => {
  res.render("senha");
});

//rota da agenda
app.post("/login", (req, res) => {
  const senha = req.body.senha;
  
  if (senha === "123") {
    req.session.autenticado = true;
    res.json({ sucess: true });    
  } else {
    res.json({ sucess: false });
  }
});

app.get("/agenda", autenticacao, (req, res) => {
  res.render("agenda");
});

//mostra os agendamentos do dia


app.post("/agenda", autenticacao, (req, res) => {    
  agenda.findAll({
    attributes: ["nome", "hora", "servico", "id", "telefone"],
    where: {
      barbeiro: req.body.opcao,
      data: req.body.data
    }
  }).then(tabela => {
    const dados = tabela.map(item => {
      // Substitui caracteres que não são números por uma string vazia
      item.telefone = item.telefone.replace(/\D/g, '');
      return item.toJSON();
    });
    res.render("agenda", {dados});
  }).catch(erro => {
    console.log("ocorreu um erro:", erro)
  })
});


//exclui um agendamento
app.get("/agenda/:id", autenticacao, (req, res) => {
  agenda.destroy({
    where: {"id": req.params.id}
  }).then(() => {
    return res.redirect("/agenda");
  }).catch(function(erro){
    res.status(500).send("esta postagem não existe", erro)
  })
});


app.listen(8080, () => {console.log("Servidor rodando na porta: 8080")});