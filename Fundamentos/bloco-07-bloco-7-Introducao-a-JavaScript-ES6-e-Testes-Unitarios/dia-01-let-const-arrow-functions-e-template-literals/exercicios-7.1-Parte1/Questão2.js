// Questão 2    

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortElements = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens;
}
const sortedElements = sortElements();
console.log(`Os números ${sortedElements} se encontram ordenados de forma crescente!`)

//Bônus   

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`) */
