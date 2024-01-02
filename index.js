const express = require("express");//importando o módulo express
const app = express(); //criando uma instância de express chamada 'app' e por meio dela, pode-se definir as rotas, middlewares e solicitações http
//criando rotas para acesso das páginas
app.get("/", function(req, res){//rota da página inicial passando como parâmetro a requisição e a resposta ao usuário
    res.send("bem vindo ao guia do programador");//dando uma resposta ao usuário no acesso à página inicial
    //res.send("ola"); Não funciona, só pode haver uma resposta ao usuário
}); 

app.get("/blog", function(req, res){
    res.send("bem vindo ao meu blog");
});

app.get("/canal/youtube", function(req, res){
    res.send("bem vindo ao meu canal");
});

//criando servidor
app.listen(4000, function(error){ 
if(error){
    console.log("ocorreu um erro");
}else {
    console.log("servidor iniciado com sucesso");
}
});

