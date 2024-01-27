const name ="Kritika"
const repoCount = 50
console.log(name +" "+ repoCount + " Value");
console.log(`Hello my name's ${name} and my repo Count is ${repoCount}`);
//Declaration
const Str = new String('Kritika')
/**Str
String {'Kritika'}
0: "K"
1: "r"
2: "i"
3: "t"
4: "i"
5: "k"
6: "a"
length: 7
[[Prototype]]: String
[[PrimitiveValue]]: "Kritika" 
Not an array but an object
*/
console.log(Str[0])
//some string methods 
console.log(Str.__proto__) //{} accessing protoytpe

console.log(Str.length)
console.log(Str.toUpperCase());
console.log(Str.charAt(4));
console.log(Str.indexOf('t'));
console.log(Str.substring(0.4));
console.log(Str.slice(-6,4));
console.log(Str.trim());
const url = "https://kritika.com/kritika%20farswan"
console.log(url.replace('%20','-'));
console.log(url.includes('kriti'));

//string to array
console.log(Str.split(''));
console.log(Str.split('i'));