/*const Livro = {
    nome: "React Native",
    editora: "Casa do Código",
    páginas: 185,
    anunciar: function () {
        console.log("A Alura indica o livro" + this.nome + "!")
        
    }
}
Livro.anunciar()*/

/*const Livro = function (nome, editora, páginas) {
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












