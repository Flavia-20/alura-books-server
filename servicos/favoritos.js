const fs = require("fs")

function getTodosFavoritos(){
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletaFavoritosPorId(id){
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))
   
    const livroFiltrado = livros.filter( livro => livro.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(livroFiltrado) )
}

function insereFavoritos(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const livroInserido = livros.find(livro => livro.id == id)
    const novaListaDeFavoritos =  [... favoritos, livroInserido]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos) )
}


module.exports = {
    getTodosFavoritos,
    deletaFavoritosPorId,
    insereFavoritos
}
