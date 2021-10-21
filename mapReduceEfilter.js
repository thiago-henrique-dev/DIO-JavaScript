/*const numeros = [3,4,7,1,9,7]

function dobro(num) {
    return num * 2 
}

const resultado = numeros.map(dobro)
console.log(resultado)*/

/*const produtos = [
    { nome: "", preco: 23.67, desconto: 0.2},
    { nome: "", preco: 120.89, desconto: 0.3},
    { nome: "", preco: 3567.67, desconto: 0.5},
    { nome: "", preco: 10.80, desconto: 0.1},
    { nome: "", preco: 7.43, desconto: 0.05},
    { nome: "", preco: 12355, desconto: 0.15},
    
]


function getCustos(precoComDesconto) {
    return parseInt(precoComDesconto * 0.3)
}



function getPrecoComDesconto (produto) {
    return produto.preco * (1 - produto.desconto)
    
}
function altoCusto(produto) {
    return produto.preco >= 1000
    
}

const resultado = produtos
    .filter(altoCusto)
    .map(getPrecoComDesconto)
    .map(getCustos)
console.log(resultado)

/*const notas = [7.1, 8.3, 6.3, 7.7, 9.1, 4.3]

function aprovado(nota) {
    return nota >= 7
}

const resultado = notas.filter(aprovado)
console.log(resultado)*/

