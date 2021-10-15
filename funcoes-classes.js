/*const Livro = {
    nome: "React Native",
    editora: "Casa do Código",
    páginas: 185,
    anunciar: function () {
        console.log("A Alura indica o livro" + this.nome + "!")
        
    }
}
Livro.anunciar()

const Livro = function (nome, editora, páginas) {
    gNome = nome,
    gEditora = editora,
    gPaginas = páginas

    this.getNome = function() {
        return gNome
        }
    this.getEditora = function() {
        return gEditora
        }
    this.getPaginas = function() {
        return gPaginas
        
    }
    
}

    const GraphQL = new Livro("GraphQL", "Casa do Código", 143)
    console.log(GraphQL.getNome())
    console.log(GraphQL.getEditora())
    console.log(GraphQL.getPaginas())*/


     class Livro {
         constructor(nome, editora, paginas){
             this.nome = nome
             this.editora = editora
             this.paginas = paginas
         }
            anunciarTitulo(){
                console.log(`Titulo: ${this.nome}`)
            }
            descreverTitulo(){
                console.log(`${this.nome} é um livro da editora ${this.editora} e 
                tem ${this.paginas} paginas`)
            }
     }
                const NodeJS = new Livro ("Primeiros pássos com NodeJS", "Casa do Código", 196)

                NodeJS.anunciarTitulo()
                NodeJS.descreverTitulo()

                console.log(typeof Livro)

                class LivroColeção extends Livro {
                        constructor(nome, nomeColeção) {
                        super(nome)
                        this.nomeColeção = nomeColeção
                        }
                        descreverColeção(){
                            console.log(`O Livro ${this.nome} faz parte da coleção ${this.nomeColeção}`)
                        }
                }
                    const LogicaDeProgramação = new LivroColeção("Lógica de Programação", "Comece a Programar")
                    LogicaDeProgramação.descreverColeção()

                    //não utilizando a sintaxe de classes
                        var pessoa = {
                            nome: 'Gabriela',
                            sobrenome: 'Ribeiro',
                            }

                        //utilizando a sintaxe de classes
                        class Pessoa {
                            constructor(nome, sobrenome){
                                this.nome = nome
                                this.sobrenome = sobrenome
                                }
                            }

                        let gabriela = new Pessoa ('Gabriela', 'Ribeiro')

                        class Professor {
                            constructor(nome, sobrenome, curso){
                                this.nome = nome,
                                this.sobrenome = sobrenome,
                                this.curso = curso
                            }
                            saudação(){
                                console.log("Bom dia " + this.nome +" " + this.sobrenome)
                            }
                        }
                        
                        let joao = new Professor('João', 'Souza', 'Lógica de programação')
                        joao.saudação() //Bom dia João Souza

                        class Curso {
                            constructor(materia, professor, duracao){
                                this.materia = materia,
                                this.professor = professor,
                                this.duracao = duracao
                            }
                            get prof() {
                                return this.professor
                            }
                        }
                        
                        let poo = new Curso('Programação orientada a objetos', 'Rafaella', '1 semestre')
                        console.log(poo.prof) //Rafaella

                        class Boletim {
                            constructor(participacao, prova, trabalho){
                                this.participacao = participacao,
                                this.prova = prova,
                                this.trabalho = trabalho
                            }
                            get media() {
                                return parseInt((this.participacao + this.prova + this.trabalho) / 3)
                            }
                        }
                        
                        let boletimSemestral = new Boletim(8, 6, 7.5)
                        console.log(boletimSemestral.media) //7











