const { Router } = require("express")
const {getLivros, getLivro, postLivro, patchLivro, deleteLivro} = require("../controladores/livros")

const router = Router()

router.get('/', getLivros) 

router.get('/:id', getLivro) 

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)

module.exports = router
//exporta essa rota