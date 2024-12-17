const { Router } = require("express")
const {getFavoritos, postFavoritos, deleteFavoritos} = require("../controladores/favoritos")

const router = Router()

router.get('/', getFavoritos) 

router.post('/:id', postFavoritos) 

router.delete('/:id', deleteFavoritos)

module.exports = router
//exporta essa rota