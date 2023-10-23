const fs = require("fs");
const { getTodosLivros } = require("../../servicos/livros");
const { getLivroPorId } = require("../../servicos/livros");

function getLivros(req, res) {
    try {
        const livros = getTodosLivros;
        res.send(livros);
    } catch {
    }
}


function getLivroId(req, res) {
const id = req.params.id;
const livro = getLivroPorId(id);
}


function postLivro(req,res){
    try{
const livroId = req.body;
    }catch(error){
     res.status(500);
     res.send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivroId
}