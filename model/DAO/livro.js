/************************************************************************************************************************************************************************
 * OBjetivo: Model responsável pela realização do CRUD de livros, esse arquivo fará acesso a base de dados MySQL
 * data 11/11/2025
 * Autor: Aline Alves de Souza
 * Versão: 1.0 
 ************************************************************************************************************************************************************************/
//2° Incluir uma biblioteca do Node.js que faça integração com a base de Dados(Prisma)

//  Import Prisma 
const { PrismaClient } = require('../../generated/prisma')

//Cria um novo objeto para manipular as transações com Banco de Dados
const prisma = new PrismaClient()

//1° Camada de Manipulação e acesso aos dados


// Pelo menos 4 funções - na verdade 6 

//função que pega todos os dados - Retorna uma lista de livros
//função anônima
//async espera o banco de dados dar o retorno



//3° Chama o sql para buscar informações da sua tabela no banco de dados do mysql 
const getSelectAllBooks = async function () {
    let sql = `select * from tbl_livro`

    let result = await prisma.$queryRawUnsafe(sql);

    if(result)
        return result;
    else
    return false;
}
console.log(getSelectAllBooks);
//4° instala prisma
//npm install prisma --save
//npm install @prisma/client --save
//npx prisma init

// Retorna um livro pelo ID
const getSelectBookById = async (id) => {

    let sql = `select * from tbl_livro where id = ${id}`;

    let result = await prisma.$queryRawUnsafe(sql);
   
    if (Array.isArray(result))
        return result;
    else
        return false;
}
console.log(getSelectBookById(1));

//console.log(getSelectBookById(2));

//Insere um novo livro 

const setInsertBook = async function (livro) {
    
}
//Atualiza um livro existente

const setUpdateBook = async function (livro) {
    
}

//Exclui um livro pelo ID
const setDeleteBokk = async function (livro) {
    
}

//7° colocar a funcao publica

module.exports = {
    getSelectAllBooks,
    getSelectBookById

}
