//Questão 1
let pai = document.querySelector('#pai');
let novoFilho = document.createElement('section');
console.log(novoFilho);
pai.appendChild(novoFilho);
document.querySelector('#pai').children

//Questão 2
let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let filhoOndeVcEsta = document.createElement('section');
console.log(filhoOndeVcEsta);
elementoOndeVoceEsta.appendChild(filhoOndeVcEsta);
document.querySelector('#elementoOndeVoceEsta').children

//Questão 3
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let netoOndeVcEsta = document.createElement('section');
console.log(netoOndeVcEsta);
primeiroFilhoDoFilho.appendChild(netoOndeVcEsta);
console.log(document.querySelector('#primeiroFilhoDoFilho').children)

//Questão 4
netoOndeVcEsta.id = 'netoOndeVcEsta' // criando um id para um elemento criado com appenChild
console.log(document.querySelector('#netoOndeVcEsta').parentElement.parentElement.nextElementSibling)