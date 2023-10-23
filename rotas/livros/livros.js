const {Router } = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");



const router = Router();

  

router.post('/',);

router.patch('/',(req,res)=>{
    res.send("Você fez uma requisção de Patch");
}
);

router.delete('/',(req,res)=>{
    res.send("Você fez uma requisição de Delete");
}
);


module.exports = router;