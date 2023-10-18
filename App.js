const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = 8000;

app.get('/',(req,res)=>
{
    res.send("Ola Mundo!");
});

app.listen(port,()=>{
    console.log(`Escutando a porta ${port}`);
});