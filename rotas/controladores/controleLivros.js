const fs  = require("fs");
const { getTodosLivros } = require("../../servicos/livros");

function getLivros(req,res){
try{
 const livros = getTodosLivros;
 res.send(livros);
} catch{

}
}

module.exports={
    getLivros
}