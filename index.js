const express = require("express");//importando o módulo express
const app = express(); //criando uma instância de express chamada 'app' e por meio dela, pode-se definir as rotas, middlewares e solicitações http
//criando rotas para acesso das páginas
app.get("/", function(req, res){//rota da página inicial passando como parâmetro a requisição e a resposta ao usuário
    res.send("bem vindo ao guia do programador");//dando uma resposta ao usuário no acesso à página inicial
    //res.send("ola"); Não funciona, só pode haver uma resposta ao usuário
}); 

app.get("/blog/:artigo?", function(req, res){ //passando parâmetro opcional com o comando '?'
    var artigo = req.params.artigo;

    if(artigo){ //caso tenha o artigo na rota
        res.send(`<h2>Artigo: ${artigo}</h2>`);
    }else { //caso não tenhao artigo na rota
        res.send("bem vindo ao meu blog: www.guiadoprogramador.com");
    }
});

app.get("/canal/youtube", function(req, res){
    res.send("bem vindo ao meu canal");
});

app.get("/ola/:nome/:empresa", function(req, res){ //criando parâmetros obrigatórios na rota
    //req são os dados enviados pelo usuário
    //res são os dados de resposta para o usuário
    var nome = req.params.nome //pegando o nome do usuário no parâmetro e adicionando na variável nome
    var empresa = req.params.empresa
    res.send(`<h1>Oi ${nome} do ${empresa}</h1>`); //enviando a informação do nome do usuários
})

//criando servidor
app.listen(4000, function(error){ 
if(error){
    console.log("ocorreu um erro");
}else {
    console.log("servidor iniciado com sucesso");
}
});

