let meusParagrafos = document.getElementsByClassName('igual');

for (let i = 0; i < meusParagrafos.length; i += 1){
meusParagrafos[i].innerText = "Me mandaram recuperar essa bagaça aqui."
}
const igual = document.getElementsByClassName('igual')[0];
igual.style.color = 'navy';

const subtitulo = document.getElementsByTagName('h4')[0];
subtitulo.style.color = 'red';