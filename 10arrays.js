// O que é array
let latinhas = ["Coca-Cola","Fanta"]
latinhas.push("Itubaina") // Inserir itens

const latinhasNaoFanta = latinhas.filter(latinha => { // Filter = filtrar
    return latinha !== "Fanta"
})

const latinhaCoca = latinhas.find(latinha => { // Find = encontrar
    return latinha === "Coca-Cola"
})

const found = latinhas.includes("Itubaina", 2) // Reduce = encontrar itens retornando verdadeiro ou falso

const novasLatinhas = [...latinhas, "Pepsi"] // ... uma maneira de voce atualizar ou criar um nobo


const latinhasAtualizadas = novasLatinhas.slice(-2) // Elimana um elemento da lista

latinhas.pop() // Alteram meu array original

const fruits = ["Maçã", "Morango"]

const apples = fruits.map(function(fruit) {
    return "Maçã"
})

const fruits1 = ["Laranja","Banana"]

const fruits1Reverse = [...fruits1].reverse() // reverse = elementos ao contrario na lista

console.log(fruits1)
console.log(fruits1Reverse)

const fruits2 = ["Mexirica","Mamão"]
fruits2.forEach(function(fruitt){
    console.log(fruitt)
})