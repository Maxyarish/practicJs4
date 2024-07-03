/*
console.log('task 1');
const numbers = [5, 10, 15, 20, 25, 30, 35];
console.log(numbers);
const lastNumber=numbers.pop();
numbers.unshift(lastNumber);
console.log(numbers);

console.log('task 2');
const numbers = [5, 10, 15, 20, 25, 30, 35];
console.log(numbers);
const firstNumber=numbers.shift();
numbers.push(firstNumber);
console.log(numbers);


console.log('task 3');
const numbers = [5, 10, 15, 20, 25, 30, 35];
console.log(numbers);
numbers.splice(2,3,55);
console.log(numbers);


console.log('task 4');
const numbers = [5, 10, 15, 20, 25, 30, 35];
const num=10;
if (
    numbers.indexOf(num)===numbers.lastIndexOf(num) &&
    numbers.includes(num)
){
    console.log('yes - one time'); 
}
else{
    console.log('no');
}


console.log('task 5');
const numbers = [5, 10, 15, 20, 25, 30, 35];
numbers.forEach((value)=>{
    console.log(value);
});


console.log('task 6');
const numbers = [5, 10, 15, 20, 25, 30, 35];
numbers.forEach((value)=>{
    console.log(value*3);
});

console.log('task 7');
const numbers = [5, 10, 15, 20, 25, 30, 35];
const newNumbers=numbers.map((elem)=> elem*10)
console.log(newNumbers);


console.log('task 8');
const numbers = [5, 10, 15, 20, 25, 30, 35];
const newNumbers=numbers.map((elem)=> elem+5);
console.log(newNumbers);


console.log('task 9');
const numbers = [5, 10, 15, 20, 25, 30, 35];
const newNumbers=numbers.filter((elem)=> elem > 20);
console.log(newNumbers);


console.log('task 10');
const numbers = [5, 10, 15, 20, 25, 30, 35, 36, 42, 48];
const newNumbers = numbers.filter((elem) => elem % 6 === 0);
console.log(newNumbers);
*/
console.log('task 11');
const numbers = [5, 10, 15, 20, 25, 30, 35, 36, 42, 48];
while (true) {
    const userInput=prompt('enter number');
const userNumber=Number(userInput);
if (numbers.includes(userNumber)){
    console.log('Ваше число є в масиві');
    break
}
else{
    console.log('спробуйте ще раз');
}
}

