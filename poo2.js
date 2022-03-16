class Pessoa {
  constructor(nome, posiçao, data_nascimento, altura, ano, nacionalidade, peso) {
    this.nome = nome
    this.posiçao = posiçao
    this.data_nascimento = data_nascimento
    this.altura = altura
    this.ano = ano
    this.nacionalidade = nacionalidade
    this.peso = peso
  }

  mostrarAtributos() {
    console.log(this.nome)
    console.log(this.posiçao)
    console.log(this.datanascimento)
    console.log(this.altura)
    console.log(this.ano)
    console.log(this.nacionalidade)
    console.log(this.peso)
  }

  calcularIdade() {
  return 2022 - this.ano

  }
  idade() {
  return this.calcularIdade()
  }
calcularAposentar(){
  return 35 - this.idade()
}
aposentar(){
  return this.calcularAposentar
   }
}

let jogador = new Jogador("Neymar", "atacante" "05/02", "1,75", "1992", "brasileiro", "68kg")
jogador.mostrarAtributos()
console.log(jogador.idade())
console.log(jogador.calcularAposentar())