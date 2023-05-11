//Задание 1
//Создайте стрелочную функцию, которая бы принимала массив и цифру, возвращала бы элемент массива под этим индексом.
const getElementByIndex = (array, index) => array[index];

const myArray = [1, 2, 3, 4, 5];
const index = 2;
const element = getElementByIndex(myArray, index);
console.log(element);