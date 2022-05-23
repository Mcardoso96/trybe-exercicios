let pilotosDeF1 = document.getElementsByClassName('piloto-f1-atual');

for (i = 0; i < pilotosDeF1.length;i += 1) {
    pilotosDeF1[i].innerText = "Lewis Hamilton";    
 }

 getElementsByClassName // vai selecionar todos elementos que tem uma classe.
 // obs : mesmo se houver apenas uma ocorrência de uma classe, ela ainda vai ser tratada como uma lista 'array'.