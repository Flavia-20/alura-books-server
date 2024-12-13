const fs = require("fs")

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivrosPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
   
    const livroFiltrado = livros.filter( livro => livro.id == id)[0]
    return livroFiltrado
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaDeLivros = [... livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }
/*Quando realizamos o Spreading de livrosAtuais[indiceModificado], examinamos todos 
os campos que este item possui e criamos um objeto para cada um deles. Já o Spreading 
de modificacoes compara os campos modificados com os objetos de livrosAtuais. 
    Caso exista um objeto compatível com o campo modificado, ele será substituído 
pelo conteúdo de modificacoes,mantendo os outros campos inalterados. Caso não haja 
este objeto, um novo campo será criado.*/

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais) )
}


module.exports = {
    getTodosLivros,
    getLivrosPorId,
    insereLivro,
    modificaLivro
}