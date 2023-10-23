const express = require("express");
const rotaLivro = require("./rotas/livros/livros.js");
const app = express();
app.use(express.json);
const port = 8000;


app.use('/livros',rotaLivro);

app.listen(port,()=>{
    console.log(`Escutando a porta ${port}`);
});