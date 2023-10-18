const {Router } = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");


const router = Router();

router.get('/',(req,res)=>
{
    res.send("Ola Mundo Alura!");
});

router.post('/',(req,res)=>{
    res.send("Você fez uma requisção de Post");
}
);

router.patch('/',(req,res)=>{
    res.send("Você fez uma requisção de Patch");
}
);

router.delete('/',(req,res)=>{
    res.send("Você fez uma requisição de Delete");
}
);


module.exports = router;