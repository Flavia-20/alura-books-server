const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novosDados = {id: '3', nome:'Livro mais que demais'}

// [...dadosAtuais] cria uma lista nova que passa os dados que ja tem e os novos dados para que a anteiga não seja só reescrita e os dados antigos sejam perdidos
fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novosDados]))

console.log(JSON.parse(fs.readFileSync("livros.json")))
//livros.json o caminho para o arquivo que deve ser lido

