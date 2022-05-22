//Questão 1 
// declaração dos pais
let Pai = document.getElementById('pai');

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// terceiro filho removido
let terceiroFilho = document.getElementById('terceiroFilho')

let filhoRemovido = Pai.removeChild(terceiroFilho);
console.log(document.getElementById('pai').children)
// Quarto filho removido
let quartoEUltimoFilho = document.getElementById('quartoEUltimoFilho')

let outroFilhoRemovido = Pai.removeChild(quartoEUltimoFilho);
console.log(document.getElementById('pai').children)
// Primeiro filho removido
let primeiroFilho = document.getElementById('primeiroFilho')

let primeiroFilhoRemovido = Pai.removeChild(primeiroFilho);
console.log(document.getElementById('pai').children)
// segundoEUltimoFilhoDoFilho removido
let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');

let segundoEUltimoFilhoDoFilhoRemovido = elementoOndeVoceEsta.removeChild(segundoEUltimoFilhoDoFilho);
console.log(document.getElementById('elementoOndeVoceEsta').children)