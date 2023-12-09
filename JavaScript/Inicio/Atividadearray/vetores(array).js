// crie 2 arrays: nomes e sobrenomes
// crie um terceiro array de nomesCompleto
// ao final, exiba os nomes completos no console com o foreach
// é necessário conter pelo menos 5 nomes
// utilizar arrow functions
// se necessário, utilize outros métodos de array 

const nome = {nome:['Eyk','Maria', 'Joao', 'Jose','Laura'] }
const sobrenome = {sobrenome:['Silva', 'Pereira','Santos','Oliveira']}

const nomesCompletos = nome.map(function(pessoa) {
    return `${pessoa.nome} ${pessoa.sobrenome}`;
});

// Imprimindo na tela os nomes completos
console.log('Nomes completos:', nomesCompletos);