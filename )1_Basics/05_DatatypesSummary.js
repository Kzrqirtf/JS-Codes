/*
JavaScript is dynamically typed language
i.e. data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
Primitive and non primitive datatypes:

Primitive Datatypes:
7 types : call by value 
String
Number
Boolean
null
undefined
Symbol = to make any value unique(typeof -> Symbol)
const if = Symbol() //to define symbol
BigInt
const bigNumber = 3787458783893477938n

Reference Data Types(Non Primitive Datatypes):
Call by reference

Array(typeof -> Object )
const heros = ["shaktiman","nagin"]

Objects(typeof -> Object )
let myObj = {
    name:"Kritika",
    age : 19
}
Functions(typeof -> function )
const muFunction = function(){
    console.log("Hello")
}

*/
//****************************//

//Stack (Primitive)->we get copy(call by value)
//Heap (Non Primitive)->call by reference

/*Primitive data types goes to Stack
and
Non Primitive to Heap */

let myname = "Kritika"
let another = myname

console.log(another);
another = "jbds"
console.log(another);   //jbds
console.log(myname); //kritika as call by value


let user1={
    email: "user@google.com",
    upi :"abs@ybi"

}
let user2=user1

user2.email = "kritika@google.com"
console.log(user1.email); //will change as call by reference
console.log(user2.email);