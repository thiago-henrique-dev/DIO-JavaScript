function escreva() {
    console.log("Programador a Bordo!")
    
}

escreva()
console.log('Teste')

function escrevaMensagem(mensagem) {
    console.log(mensagem)
    
}
escrevaMensagem("Hello World")
escrevaMensagem("Thiago Henrique")

function soma(a,b) {
    return a + b;
    
}
//var resultadoSoma = soma (10, 5)
//console.log(resultadoSoma)

console.log(soma(10,5))

function somaTudo(numeros) {
    var total = 0;
    for (var num of numeros) {
        total = total + num;
    }
    return total;
}
var arrayNumeros = [3,5,7,10,9,12,6]
var resultado = somaTudo(arrayNumeros);
console.log(resultado)


function escreverEndereço(rua, cidade, pais, ...complementos) {
    console.log(rua);
    console.log(cidade);
    console.log(pais);
    console.log(complementos)
}
escreverEndereço("Rua Programador a Bordo", "Peruibe", "Brasil", "São Paulo", "Apartamento B","Bloco 3","CEP 17500000")

var subtraiDoisNumeros = function subtrai(a,b) {
    return a-b;
}
console.log(subtraiDoisNumeros(10,3))

var subtraiDoisNumeros = function(a,b,c) {
    return a-b-c;
}
console.log(subtraiDoisNumeros(15,3,6))
//função anonima

function somaCallBack(a,b, fnCallBack) {
    return fnCallBack(a+b);
    
}
console.log(somaCallBack(10,3, function(total) {
    return total * 2;
    
}))

function somar(a,b,c) {
    return c(a + b);
    
}
var multiplica = function(total) {
    return total * 2;
    
}
console.log(somar(10,5, multiplica))
console.log(somar(5,2, function (total) {
    return total + 20;
}))
 console.log(soma(23,11, function (total) {
     return total / 2;
 }))

 function escrevaNome(nome, idade) {
     console.log(nome);
     console.log(idade);
     
 }

 console.log("Thaigo", 21)






