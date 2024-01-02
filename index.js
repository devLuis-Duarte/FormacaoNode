const express = require("express");//importando o express
const app = express(); //esta função 'express()' irá iniciar o express na variável 'app'

//criando servidor
app.listen(4000, function(error){ 
if(error){
    console.log("ocorreu um erro");
}else {
    console.log("servidor iniciado com sucesso");
}
});

