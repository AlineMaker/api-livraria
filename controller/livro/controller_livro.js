/************************************************************************************************************************************************************************
 * OBjetivo: Controller responsável pela manipulação de dados, validação e regra de negócio para o crud de livros.
 * Data: 11/11/2025
 * Autor: Aline Alves de Souza
 * Versão: 1.0 
 ************************************************************************************************************************************************************************/
//6° fazer import do arquivo DAO para manipular dados no BD
const livroDAO = require(`../../model/DAO/livro.js`)




// 5° fazer as funcoes de crud para o controller - inserção, atualização, exclusão e busca de dados
// Retorna uma lista de livros

const listarLivros = async function() {

    //8° chamar e manioular funcao getselectallbooks
   
    // Chama a funcao do DAO para listar os livros 
    let result = await livroDAO.getSelectAllBooks()
        
    // validacao do retorno false
        if(result){
          
            //validacao de array vazio
            if(result.lenght > 0){
                //12° livrojson
                let livroJson 
                return {status: true, status_code: 200, response: result };
            }
            else{                
                return {status: false, status_code: 404, message: 'Não foram encontrados dados de retorno.'}
            }
        }else{
            return {status: false, status_code: 500, message: 'Não foi possível processar a requisição pois houveram falhas no servidor. '}
        }
}


//Retorna um livro filtrando pelo ID
const buscarLivroId = async function (id) {
    
}

//Insere um livro
const inserirLivro = async function (livro) {
    
}

// Atualiza um livro filtrando pelo ID
const atualizarLivro = async function (livro, id) {
    
}

// Exclui um livro filtrando pelo ID
const excluirLivro = async function (id) {
    
}


module.exports = {
    listarLivros
}
