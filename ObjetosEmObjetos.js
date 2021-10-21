const cliente = {
    nome: "Thiago",
    idade: 21,
    cpf: 49055351822,
    email: "thi4525thi@gmail.com"
}  
console.log(cliente) 

cliente.dependentes = {
    nome:"Sara",
    parentesco:"Filha",
    dataNasc: "28/03/2011"

}
console.log(cliente)
cliente.dependentes.nome = "Sara Silva"
console.log(cliente)
