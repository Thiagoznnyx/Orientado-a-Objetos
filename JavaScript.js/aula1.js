const prompt = require('prompt-sync')();

class Cliente {
nome;
idade;
cpf;
agencia;
}

let cliente = new Cliente();

cliente.nome =  prompt('Digite o nome o cliente:');
cliente.idade = prompt('Digite a idade:');
cliente.cpf = prompt('Digite o seu CPF');
cliente.agencia =prompt('Digite a agencia');

console.log(cliente);
