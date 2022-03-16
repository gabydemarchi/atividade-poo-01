class Pessoa {
    constructor(nome, data_nascimento, altura, anonascimento) {
    this.nome = nome
    this.data_nascimento = data_nascimento
    this.altura = altura
    this.ano = anonascimento  
  }

  mostrarAtributos(){
    console.log(this.nome)
    console.log(this.datanascimento)
    console.log(this.altura)
    console.log(this.ano)           
  }
  
calcularIdade(){
return 2022 - this.ano
  
    }
  idade(){
    return this.calcularIdade()
    
  }
}

let pessoa = new Pessoa("gaby", "06/01", "1,62" "2006")
pessoa.mostrarAtributos()
console.log(pessoa.idade)

