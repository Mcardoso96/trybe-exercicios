//Questão 1
console.log(document.getElementById('primeiroFilho').nextElementSibling);

//Questão 2
console.log(document.getElementById('elementoOndeVoceEsta').parentNode)

let pai = document.getElementById('elementoOndeVoceEsta').parentNode
pai.style.color = 'red';

//Questão 3
document.getElementById('elementoOndeVoceEsta').innerText = 'adicionando um texto qualquer'

//Questão 4
console.log(document.getElementById('pai').firstElementChild)

//Questão 5
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling)

//Questão 6
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)

//Questão 7
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling)

//Questão 8
console.log(document.getElementById('pai').children[2])