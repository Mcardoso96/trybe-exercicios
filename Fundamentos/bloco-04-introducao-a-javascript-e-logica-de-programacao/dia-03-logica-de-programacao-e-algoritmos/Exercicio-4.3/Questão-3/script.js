let array = ['java', 'javascript', 'python', 'html', 'css'];
let caractereMaior = array[0];
let caractereMenor = array[0];
for (let index = 0; index < array.length; index += 1){
    if (array[index].length > caractereMaior.length){
        caractereMaior = array[index];
    }
}

for (let index = 0; index < array.length; index +=  1){
    if (array[index].length < caractereMenor.length){
        caractereMenor = array[index];
    }
}
console.log(caractereMaior);
console.log(caractereMenor);