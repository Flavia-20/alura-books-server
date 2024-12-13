const fs = require("fs")

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivrosPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
   
    const livroFiltrado = livros.filter( livro => livro.id == id)[0]
    return livroFiltrado
}

module.exports = {
    getTodosLivros,
    getLivrosPorId
}