const express = require("express")

const app = express()

const port = 8000

//req- requisição res-resposta
app.get('/', (req,res) => {
    res.send("Olá mundo ")
})

app.listen(port, () =>{
    console.log(`escutando a porta ${port}`)
})