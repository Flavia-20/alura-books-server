const express = require("express")
const rotaLivro = require("./rotas/livros")
const rotaFavoritos = require("./rotas/favoritos")
const cors = require("cors")

const app = express()
//a aplicação agora aceita receber JSON's
app.use(express.json())
app.use(cors({origin: "*"}))

const port = 8000

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavoritos)

app.listen(port, () =>{
    console.log(`escutando a porta ${port}`)
})