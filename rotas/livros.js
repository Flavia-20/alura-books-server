const { Router } = require("express")

const router = Router()

//req- requisição res-resposta
router.get('/', (req,res) => {
    res.send("Olá mundo eeeee")})

module.exports = router
//exporta essa rota