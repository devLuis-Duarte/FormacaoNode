var calculadora = require("./calculadora") //importando o arquivo 'calculadora.js' que contém as funções soma, subtração, divisão e multiplicação

calculadora.nome = "Calculadora"; //alterando o valor da variável calculadora
console.log(calculadora.nome) //acessando a varíavel 'nome' da classe calculadora
console.log(calculadora.soma(5,3)); //acessando a função de soma na classe calculadora por meio da variável calculadora
console.log(calculadora.sub(5,3)); //acessando a função de subtração na classe calculadora por meio da variável calculadora

//criando um servidor http no node
//ctrl + c para o servidor depois de ele ter iniciado

var http = require("http"); //importando o arquivo http do núcleo no node através da variável 'http'

http.createServer(function(requisicao, resposta){ //criando o servidor passando a requisicao e a resposta do usuário como parâmetros
    resposta.end("<h1>bem vindo ao meu site</h1><h4>guiadoprogramador.com.br</h4>"); //dando uma mensagem de resposta ao acesso do usuário no servidor
}).listen(8181); //passando a porta do servidor no parâmetro

//console.log("meu servidor esta rodando");