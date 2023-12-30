var nome = "Minha calculadora";

function soma(a, b){
    return a + b;
}

function mult(a, b){
    return a * b;
}

function sub(a, b){
    return a - b;
}

function div(a, b){
    return a / b;
}

module.exports = {
    soma,
    mult,
    sub,
    div,
    nome,
} //exportando as funções soma, mult, sub e div por meio do módulo com o uso do comando 'module.exports'