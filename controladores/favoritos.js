const fs = require("fs")
const { getTodosFavoritos, insereFavoritos, deletaFavoritosPorId } = require("../servicos/favoritos")


//req- requisição res-resposta
function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


function postFavoritos (req, res) {
    try {
        const id = req.params.id
        insereFavoritos(id)
        res.status(201)
        res.send("Livro inserido com sucesso!")

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavoritos(req, res){
    try {
        const id = req.params.id 

        if( id && Number(id)){
        deletaFavoritosPorId(id)
        res.send("Favorito apagado com sucesso")
    }else{
        res.status(422)
        res.send("id não válido")
    }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}
