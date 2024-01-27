let score =33
console.log(typeof score)
let a = "33abc"
console.log(typeof a);
let valinNum = Number(a)
console.log(typeof valinNum) //will give number as converting 33abc to a number is not possible
console.log(valinNum);//will give Nan(Not a number),a special type in js
let b = null
let c = undefined
console.table([typeof b,typeof c])//object and undefined
let d = Number(b)
let e = Number(c)
console.table([d,typeof d,e,typeof e])
//0 number NaN number


/*
conversions:
"33"=>33
"33abc"=> NaN
true =1;false=0

*/

let isLoggedIn =1
let empty =""
let name="kritika"
let bool1 = Boolean(isLoggedIn)
let bool2 = Boolean(empty)
let bool3 = Boolean(name)
console.table([bool1,bool2,bool3]);//true false true

// 1=true 0 =false
// ""=false
// "ksh"=true

//*********OPERATIONS*IN*JAVASCRIPT**********/
let value =3
let negval =-value
console.log(negval);
console.table([2+2,2-2,2*2,2**2,2/3,2%2])
let str = "hello "
let str1= "Kritika"
console.log(str+str1)
console.log("1"+2);//12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(1+1+"2")//22
console.log(true)//true
console.log(+true)//1
//console.log(true+) ERROR
console.log(+"") //0

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gamecounter = 100
gamecounter++;
++gamecounter
console.log(gamecounter);
