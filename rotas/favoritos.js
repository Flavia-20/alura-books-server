const { Router } = require("express")
const {getFavoritos, postFavoritos, deleteFavoritos} = require("../controladores/favoritos")

const router = Router()

router.get('/', getFavoritos) 

router.get('/:id', postFavoritos) 

router.patch('/:id', deleteFavoritos)

module.exports = router
//exporta essa rota