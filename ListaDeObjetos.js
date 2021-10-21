// const cliente = {
//     nome: "Thiago",
//     idade: 21,
//     cpf: 49055351822,
//     email: "thi4525thi@gmail.com",      
//     dependentes: [{
//         nome:"Sara",
//         parentesco:"Filha",
//         dataNasc: "28/03/2011"

// }]
// }
// cliente.dependentes.push({
//     nome:"Samia Maria",
//     parentesco: "Filha",
//     dataNasc:"04/01/2014"
// })
// cliente.dependentes.push({
//     nome:"Larissa",
//     parentesco: "Filha",
//     dataNasc:"04/01/2014",
    
// })li==

function comparaData (data1, data2) {
    let data1 = new Date(data1)
    let data2 = new Date(data2)
    if (data1 > data2) {
        console.log("A data1 é maior")
    } else {
        console.log("Data 2 é maior")
    }

    

    
}

    compararData ("28/03/2011","04/01/2014")









    /*console.log(cliente)*/

    /*const filhaMaisNova = cliente.dependentes.filter
    (dependete => dependete.dataNasc==="04/01/2014")
    console.log(filhaMaisNova[0].nome)
    console.log(filhaMaisNova)*/