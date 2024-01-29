
const marvel = ["spiderman", "Ironman","thor"]
const dc = ["flash", "superman","batman"]

// marvel.push(dc)
// console.log(marvel);
//[ 'spiderman', 'Ironman', 'thor', [ 'flash', 'superman', 'batman' ] ]

// console.log(marvel[3][1]);
//superman

//but if
// const allheroes = marvel.concat(dc)
// console.log(allheroes);

//Spread operator

const all_new = [...marvel,...dc];
console.log(all_new);

const another = [1, 2, 3 , [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_array = another.flat(Infinity)
console.log(real_array);
/*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]*/

console.log(Array.isArray("Kritika"));//false
console.log(Array.from("Kritika"));
/*[
  'K', 'r', 'i',
  't', 'i', 'k',
  'a'
]*/
console.log(Array.from({name: "kritika"}));//[]

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1 , s2, s3)); //[ 100, 200, 300 ]
