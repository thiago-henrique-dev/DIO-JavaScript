
const numbers = [1, 2, 3]
const doubleNumbers = numbers.map(item => item * 2)
console.log(doubleNumbers, numbers)


const prices = [20, 10, 30, 25, 15, 40, 80, 5]
const salePrices = prices.map(price => price / 2)
console.log(salePrices)


const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive ', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Egonomico para Notebook', price: 23 },
    { name: 'Reptidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map(product => {
    if (product.price >= 30) {
        return { name: product.name, price: product.price / 2 }
    }
    return product
})
console.log(saleProducts)
console.log(products)

// FILTERS 
const randomNumbers = [36, 99, 37, 63]
const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)
console.log(numbersGreaterThan37)

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
]

const premiumUser = users.filter(user => user.premium)

console.log(premiumUser)

//Reduce

const numbers1 = [1, 2, 3]
const sunResult = numbers1.reduce((accumulator, item) => accumulator + item, 0)

console.log(sunResult)

const phaseScores = [
    { name: 'Thiago Henrique', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Ana Paula Rocha', score: 261 },
    { name: 'Thiago Henrique', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 359 },
    { name: 'Ana Paula Braga', score: 133 }
]

const thiagoScore = phaseScores.reduce((accumulator, phaseScore) => {
    if (phaseScore.name === 'Thiago Henrique') {
        accumulator += phaseScore.score
    }
    return accumulator
}, 0)

console.log(thiagoScore)

const pets = [
    { name: 'Borys', age: 4, gender: 'Male', type: 'Dog' },
    { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
    { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
    { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
    { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
    { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' }
]

const getDogs = ({ type }) => type === 'Dog'
const converteToHuman = ({ name, age }) => ({
    name,
    converteAge: age * 7
})

console.log(
    pets
        .filter(getDogs)
        .map(converteToHuman)
)

const numbers2 = [1, 2, 3]
const sum = numbers2.reduce((accumulator, number) => accumulator + number, 0)

console.log(sum)

const ingredientes = ['vinho', 'tomate', 'cebola', 'cogumelo']

const cookedIngredients = ingredientes.reduce((acc, item, index, array) => {
    const correctWordGender = /a$/.test(item) ? 'cozida' : 'cozido'
    const isLastItem = index === array.lenght - 1
    const ingredientMessage = acc + `${item} ${correctWordGender}`

    return isLastItem ? ingredientMessage : acc  + `${item} ${correctWordGender},`
}, '')

console.log(cookedIngredients)

//somando todos os itens de um array

let numeros = [1, 2, 3, 4, 5]
let total = numeros.reduce(function(valorAcumulado, valorAtual){
    return valorAcumulado + valorAtual
},0)

console.log (total)

const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas pagas",
    "R$ 300",
    "R$ 400",
    "Meus dados"
]

const preçosFiltros = precos.filter(preco => preco.includes("R$"))

const precosNumeros = preçosFiltros.map(preco => Number(preco.replace("R$", ""))
)

const total1 = precosNumeros.reduce((acc, item) => acc + item)

console.log(total1)
console.log(preçosFiltros)
console.log(precosNumeros)



 







