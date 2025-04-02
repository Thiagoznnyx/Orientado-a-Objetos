const prompt = require('prompt-sync')();

//Modelo atributos e funções para criação de um objeto
class Cliente {
nome;
idade;
cpf;
agencia;
}

// Objeto que possui as informações da classe de forma indivudal
let cliente = new Cliente();

//
cliente.nome =  prompt('Digite o nome o cliente:');
cliente.idade = prompt('Digite a idade:');
cliente.cpf = prompt('Digite o seu CPF');
cliente.agencia =prompt('Digite a agencia');

console.log(cliente);
