//array

const myArr = [ 0, 1, 2, 3, 4, 5]
const Heros = ["shaktiman","spiderman"];
const myarr = new Array(1, 2, 3, 4, 5)
//Js arrays are resizable

console.log(myArr[2]);
//arrays make shallow copies not deep copies
//many array methods in js
//Array method
myArr.push(6)
myArr.pop()
myArr.unshift(9)
myArr.shift()
myArr.shift()
console.log(myArr.includes(8));
console.log(myArr.indexOf(3));
const newArray = myArr.join()
console.log(typeof newArray);
console.log(newArray);
console.log(myArr);


console.log("A ",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);


const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ",myArr);
