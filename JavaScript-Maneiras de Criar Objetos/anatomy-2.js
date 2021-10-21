// Anonymous function
(function (a,b,c) {
    return a + b + c
})

// function expression
const x = 1
const sum = function (a,b) {
    return a + b
    
}
const result = sum(10,7)
console.log(result)

const anotherSun = sum
console.log(anotherSun(5,9))

let p = 3
console.log(p)

p = sum
console.log(p(4,4))