console.log("probando")

const students = ["Juvixa", "Ivan", "Curro", "Nacho", "Javier"]

// .TODOS ESTOS METODOS RETORNAN UN ARRAY. super importante para React.

// crear un nuevo array, con los nombre en un Str así: 
// ["Student: Juvixa", "Student: Ivan", "Student: Curro" ...]

// .map() => crea un nuevo array con los elementos modificados

const newStudents = students.map((eachStudent) => {
  return `Student: ${eachStudent}`
})

console.log(newStudents)

// ["1. JUVIXA", "2. IVAN", "3. CURRO", ...]

const numStudents = students.map((eachStudent, index) => {
  return `${index+1}. ${eachStudent.toUpperCase()}`
})

console.log(numStudents)

// nuevo array con los elementos filtrados. Solo los que empiecen por "J"

const filteredStudents = students.filter((eachStudent) => {
  // una condicion. Si es true, añadelo, si es falso, no lo añadas.
  return eachStudent[0] === "J"
})
console.log(filteredStudents)



// OPERADORES TERNARIOS

let str1 = "bob";
let str2 = "patricio";

if (str1 === str2) {
  console.log("es el mismo nombre")
} else {
  console.log("no es el mismo nombre")
}

str1 === str2 ? console.log("es el mismo nombre") : console.log("no es el mismo nombre")

// operadores ternarios automamente retornan la ejecucion.

console.log( str1 === str2 ? "es el mismo nombre" : "no es el mismo nombre" )


// const maxOfTwoNumbers = (num1, num2) => {
//   if (num1 > num2) {
//     return `el mayor es: ${num1}`
//   } else {
//     return `el mayor es: ${num2}`
//   }
// }

const maxOfTwoNumbers = (num1, num2) => {
  return num1 > num2 ? `el mayor es: ${num1}` : `el mayor es: ${num2}`
}

// const maxOfTwoNumbers = (num1, num2) => num1 > num2 ? `el mayor es: ${num1}` : `el mayor es: ${num2}`

console.log( maxOfTwoNumbers(2, 10) )
console.log( maxOfTwoNumbers(20, 10) )


// OPERADORES DE CORTO CIRCUITO


const pokemon = {
  name: "Bulbasaur",
  isBestPokemon: false,
  height: 4.5
}

console.log( `Pokemon: ${pokemon.name}` )

if (pokemon.isBestPokemon === true) {
  console.log(`${pokemon.name} es el mejor pokemon 🎃`)
}

// &&
pokemon.isBestPokemon === true && console.log(`${pokemon.name} es el mejor pokemon 🎃`)


// ||

let heightToDisplay = pokemon.height || "no tenemos info de este pokemon";
// let PORT = process.env.PORT || 3000

console.log(heightToDisplay)

console.log(pokemon.height || "no tenemos info de este pokemon")

if (pokemon.height !== undefined) {
  console.log(pokemon.height)
} else {
  console.log("no tenemos info de este pokemon")
}