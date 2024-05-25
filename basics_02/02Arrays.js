const marvel_heros= ['thor', 'Ironman', 'spiderman' ]

const dc_heros=['superman', 'flash', 'batman']

// marvel_heros.push(dc_heros) //Second array treated as single element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //flash

const allHeros =marvel_heros.concat(dc_heros) // combine twwo array 
//console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

//console.log(all_new_heros);

const another_array= [1,2,3,[4,5,6], 7, [6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity) // spread out each lement return as single element
// console.log(real_another_array)

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh")) //convert to array
// console.log(Array.from({name: "hitesh"})) // intresting

let score1 =100
let score2= 200
let score3 = 300

console.log(Array.of(score1,score2,score3));