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