// Arrow functions 

// Jeito antigo de se declarar uma função

/* const printName = function () {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName()); */

// Com Arrow functions

/* const printName = () => {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName()); */

//Quando não há nada no corpo da função além do que será retornado

/* const printName = () => 'Lucas';
console.log(printName());
 */
// No arrow functions só podemos omitir o uso dos parenteses, caso haja funões com apenas um argumento, por exemplo:

/* const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10)); */

// Em funções com dois argumentos precisamos colocar os parenteses, vejamos nesse exemplo:

/* const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2)); */