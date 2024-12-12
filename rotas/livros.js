const { Router } = require("express")

const router = Router()

//req- requisição res-resposta
router.get('/', (req,res) => {
    res.send("Olá mundo eeeee")})

router.post('/', (req, res) => {
   res.send('Você fez uma requisição do tipo post') 
})

router.patch('/', (req,res) => {
    res.send("voce fez uma requisição do tipo patch")})

router.delete('/', (req, res) => {
   res.send('Você fez uma requisição do tipo delete') 
})
module.exports = router
//exporta essa rota