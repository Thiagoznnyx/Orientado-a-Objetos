const prompt = require('prompt-sync')();

//Modelo atributos e funções para criação de um objeto
class Cliente {

//# Priva o dado
#nome;
#idade;
cpf;
agencia;

getDescricao(){
    return 'Nome' + this.#nome + ', idade' + this.#idade;
}

// Obtem nome
 getNome(){
    return  this.#nome;
}
 setNome(valor){
    this.#nome = valor;
}

}

// Objeto que possui as informações da classe de forma indivudal
let cliente = new Cliente();


cliente.setNome(prompt('Digite o nome o cliente:'));
cliente.idade = prompt('Digite a idade:');
cliente.cpf = prompt('Digite o seu CPF:');
cliente.agencia =prompt('Digite a agencia:');

console.log(cliente.getDescricao());
console.log(cliente);
console.log(cliente.getNome());