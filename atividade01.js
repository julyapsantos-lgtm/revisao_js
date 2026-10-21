//EXERCÍCIO 1
/*const mesadas = [5, 10, 15]
.map((mesada) => mesada * 2)
console.log(mesadas)*/

//EXERCÍCIO 2
/*const pontos = [3, 7, 10]
.map((ponto) => ponto + 5)
console.log(pontos)*/

//EXERCÍCIO 3
/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
.filter((numero) => numero % 2 === 0)
console.log(numeros)*/

//EXERCÍCIO 4
/*const precos = [15, 30, 8, 22, 12]
.filter((preco) => preco <= 20)
console.log(precos)*/

//EXERCÍCIO 5
/*const colegas = ["Julya", "Enzo", "Lara", "Letícia", "Mariana"];

const colega = colegas.forEach((colega) => console.log(colega + "!"));*/

//EXERCÍCIO 6
/*const figurinhas = ['Leão', 'Tigre', 'Urso']
const figurinha = figurinhas.forEach((figurinha) => console.log("Tenho a figurinha " + figurinha))*/

//EXERCÍCIO 9
/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
.filter((numero) => numero %2 !== 0)
.map((numero) => numero * numero)
console.log(numeros)*/

//EXERCÍCIO 10
/*const lista = [1, 2, 3, 4, 5, 6]
.filter((list) => list % 2 === 0)
.map((list) => list * 2)
console.log(lista)*/

//EXERCÍCIO 11
/*const mochila1 = ['lápis', 'caderno']
const mochila2 = ['borracha', 'régua']
const mochilas = [...mochila1, ...mochila2 ]*/

//EXERCÍCIO 12
const heroi = {nome: 'Raio Azul', poder: 'velocidade', nível: 7}

const { nome, poder } = heroi

console.log(`${nome} tem o poder de ${poder}`)