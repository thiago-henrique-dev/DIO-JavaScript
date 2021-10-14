var usuario = {
    nome: "Thiago",
    idade: 21,
    cidade: "Peruibe"
    
}

console.log(usuario);
console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.cidade);

usuario.ano = 2019;
console.log(usuario)
console.log(usuario.ano)

// delete usuario.cidade;

console.log(usuario)

usuario.hobbies = ["Musica","Programar","Viajar"]
console.log(usuario)

usuario.competencias = {
    Linguagens: ["JavaScript", "Python", "Go"],
    InstrumentosMusicais: ["Guitarra","Violão","Atabaque"]
}

console.log(usuario)



var usuario2 = {
    digaOi(name) {
        return `Olá ${name}`
    }
}
console.log(usuario2.digaOi('Thiago'))
console.log(usuario2.digaOi("Henrique"))

var cor = "azul"
var usuario3 = {
    nome: "Thiago",
    cor
}
console.log(usuario3)

var usuario4 = {
    nome: "Thiago",
    idade: 21
}

var extraInfo = {
    pais: "Brasil",
    estado: "São Paulo"
}

/

Object.assign(usuario4, extraInfo);
console.log(usuario4)

var novoUsuario2 = {
    ...usuario4,
    ...extraInfo,
    ...{
        sexo: "M",
        profissão: "Programador"
    }
}
//var novoUsuario = Object.assign({},usuario4, extraInfo);
//console.log(novoUsuario)
console.log(novoUsuario2)

var nomeVariavel = 'Estado';
var nome = "LastName"

var usuario5 = {
    [nome]: "Thiago",
    [nomeVariavel]: "São Paulo"
}
console.log(usuario5)

// getter e setters

var usuarios = [{
    nome: "Thiago",
    idade: 21
},{
    nome: "João",
    idade: 19
},{
    nome: "Maria",
    idade: 21
}
]

var usuario = {
    posição: 0,
    get atual(){
        return usuarios[this.posição];
    },
    set atual(posição) {
        this.posição = posição;
    },
    proximo() {
        ++this.posição;
    },
    anterior() {
        --this.posição;
    }

}

    console.log(usuario.atual);
    usuario.proximo();

    console.log(usuario.atual);
    usuario.proximo();

    console.log(usuario.atual);
    usuario.proximo();

    usuario.atual = 0
    console.log(usuario.atual);
    usuario.atual = 2
    console.log(usuario.atual);





