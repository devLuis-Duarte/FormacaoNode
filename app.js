var calculadora = require("./calculadora") //importando o arquivo 'calculadora.js' que contém as funções soma, subtração, divisão e multiplicação

calculadora.nome = "Calculadora"; //alterando o valor da variável calculadora
console.log(calculadora.nome) //acessando a varíavel 'nome' da classe calculadora
console.log(calculadora.soma(5,3)); //acessando a função de soma na classe calculadora por meio da variável calculadora
console.log(calculadora.sub(5,3)); //acessando a função de subtração na classe calculadora por meio da variável calculadora