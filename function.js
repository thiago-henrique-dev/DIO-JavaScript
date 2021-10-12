function executaOperação(numero1,numero2, operação){
    return operação(numero1,numero2);
}   
function soma(numero1,numero2){
    return numero1 + numero2;

}
function multiplicação(numero1,numero2) {
    return numero1 * numero2;
    
}
console.log(executaOperação(1,1, soma));
console.log(executaOperação(5,3,multiplicação));

//definimos duas funções com os nomes de soma e multiplicacao, 
//ambas recebem como parâmetro 2 valores que serão somados 
//ou multiplicados respectivamente.
//Em paralelo existe a função executaOperacao que recebe 
//3 parâmetros nos quais numero1 e numero2 são valores numéricos e 
//o parâmetro operacao é uma função. 
//A função executaOperacao realiza a chamada da função operação 
//que pode ser soma ou multiplicacao.
//Executando a chamada de executaOperacao(1, 1, soma) 
//vamos obter o valor igual a 2 ,executando a chamada 
//executaOperacao(2, 2, multiplicacao) vamos obter o valor 4.