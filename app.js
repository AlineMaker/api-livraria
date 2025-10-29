let listaDeNomes = ['Aline', 'Marcel', 'Ariana'];

// typeof diz o tipo se eh objeto,  string number
console.log(typeof(listaDeNomes[2]));
console.log(typeof(listaDeNomes));
console.log(listaDeNomes);

//push adiciona um elemento no final da array
listaDeNomes.push('mateus');
console.log(listaDeNomes);

//unshift acrescenta elemento no começo do array
listaDeNomes.unshift('Rebeca');
console.log(listaDeNomes);

//pop remove o ultimo elemento da array
listaDeNomes.pop();
console.log(listaDeNomes);

//shift remove o primeiro elemento da array
listaDeNomes.shift();
console.log(listaDeNomes);

//contar quantidade de elementos numa array
let qtdeItens = listaDeNomes.length;
console.log(qtdeItens);


// Estruturas de Repetição
//while

listaDeNomes.unshift('laisa','Ana', 'Larissa', 'Henrique', 'leonid','Celso', 'Julio', 'Miguel');
let cont = 0;

while(cont <=10){
    console.log("O nome do Cliente é " + listaDeNomes[cont]);
    cont++;
}


//for

for(cont = 0; cont< listaDeNomes.length; cont++){
    console.log(listaDeNomes[cont]);
}

//forEach

console.log("\n Exibindo dados com ForEach \n");
listaDeNomes.forEach(function(item){
    console.log('O nome do cliente é : ' + item);
});


// Retorna o índice do elemento encontrado, caso nao encontre retorna -1
let indice = listaDeNomes.indexOf('Larissa'); 
console.log(indice);

// Realiza um processo de cópia(clone de um array)
let novoArray = listaDeNomes.slice();
console.log(novoArray);

// metodod splice (2,2) indice 2, apague 2 elementos  permite apagar array pelo indice e a quantidadde
novoArray.splice(2,2);
console.log(novoArray);

// json

//{tem que estar entre chaves  e atributo : valor}

let listaDeProdutos = [
    {nome: 'Teclado', descricao: 'Teclado RGB', qtde: 200, valor: 100},
    {nome: 'Mouse', descricao: 'Mouse Preto', qtde: 20, valor: 50}
];
console.log(listaDeProdutos);