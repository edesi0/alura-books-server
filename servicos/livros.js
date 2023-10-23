const fs  = require("fs");

function getTodosLivros() {
return(JSON.parse(fs.readFileSync("livros.json")));
}

function getLivroPorId(id){
const livros=JSON.parse(fs.readFileSync("livros.json"));

const livrofiltrado = livros.filter(livro=> livro.id === id);

return(livrofiltrado);
}

function insertLivro(livroNovo){
    const livros=JSON.parse(fs.readFileSync("livros.json")); 
    const novaLIstaLivro = [...livros,livroNovo];
    fs.writeFileSync("livros.json",JSON.stringify(novaLIstaLivro));  
}

module.exports = {getTodosLivros,getLivroPorId,insertLivro};