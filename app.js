/************************************************************************************************************************************************************************
 * OBjetivo: Arquivo responsável pela API de livros (GET, POST, PUT e DELETE)
 * data 11/11/2025
 * Autor: Aline Alves de Souza
 * Versão: 1.0 
 ************************************************************************************************************************************************************************/
//9° instalar express e cors e habilitar porta do servidor
const express = require('express')

// cors responsável pelas regras permições da api
const cors    = require('cors')

const app     = express()

//Define a porta a ser utilizada nas requisições da API (Servidor ou uma porta local 8080)
const PORT = process.PORT || 8080

//10° Configuração do cors
// Coloco duas informacoes importantes no header (cabeçalho) da minha API , 1° de onde vão vir minhas requisiçoes, 2 
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*') // no lugar do asteristico colocaria o endereço do meu servidor 'http://200.100.50.10' IP  do srvidor // ou link do servidor
    response.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')

    app.use(cors())
    next()
})

//11° cria uma variavel para receber o import dos arquivos de controle da aplicação
// aqui cria endpoints de livros,  autores, generos, para cada tabela tem que fazer seu controller
const controllerLivro = require('./controller/livro/controller_livro')

//12° EndPoints As rotas da API
// endpoints se comunica com a controller e pega o que a controler devolve e retorna na minha requuisição
app.get('/v1/livraria/livro', cors(), async function(request, response) {
    let livro = await controllerLivro.listarLivros()
    response.status(livro.status_code)
    response.json(livro)
})

app.listen(PORT, function(){
    console.log('API aguardando requisições...')
})