class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

class ContaCorrente{
    agencia;
    saldo;
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
        }
    }

}

const cliente1 = new Cliente();
cliente1.nome = "Thiago";
cliente1.cpf = "49055351822";
const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "48044341722";

const contaCorrenteThiago = new ContaCorrente();
contaCorrenteThiago.saldo = 0;
contaCorrenteThiago.agencia = 1001;

contaCorrenteThiago.depositar(100);
contaCorrenteThiago.depositar(150)
contaCorrenteThiago.sacar(50);

console.log(contaCorrenteThiago)
contaCorrenteThiago.saldo += 200;
contaCorrenteThiago.saldo += 150;
console.log(contaCorrenteThiago)
contaCorrenteThiago.depositar(450)
console.log(contaCorrenteThiago)