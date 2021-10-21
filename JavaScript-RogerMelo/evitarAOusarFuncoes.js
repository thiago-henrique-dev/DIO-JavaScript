// Evite
const sun = (firstNumber, secondNumber,thirdNumber, fourtNumber) =>
firstNumber + secondNumber + thirdNumber + fourtNumber

//Prefira

const sun = (...numbers) =>
 numbers.reduce((accResult, currnumber) => accResult + currnumber, 0)

 console.log(sun)