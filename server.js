const http = require("http");
const express = require("express");
const { response } = require("express");
const path = require("path")
const app = express()

const staticFolder = path.join(__dirname, "views")
const expressStatic = express.static(staticFolder)
app.use(expressStatic)

// MVC - Model VIEL CONTROLLER

app.get('/',(request, response) => {
  response.send('hello world!')
})

app.get('/sobre',(request, response) => {
  response.send('sobre')
})

// 404 error
app.use((request, response) => { // middleware
  response.send("pagina não encontrada!")
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`servidor está rodando na porta ${port}`));
