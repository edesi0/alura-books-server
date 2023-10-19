const {Router } = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const {getLivros} = require("../controladores/controleLivros");

const router = Router();

router.get('/',getLivros);

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