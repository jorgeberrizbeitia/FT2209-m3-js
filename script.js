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



// ACTIVIDAD

// Copy below code to a codepen and solve each iteration

// this array is used for all 3 iterations
const peopleArray = [
  {
    name: "Laura",
    hasDog: true,
    dogName: "Sparky",
  },
  {
    name: "Sarah",
    hasDog: true,
    dogName: "Layka"
  },
  {
    name: "Bob",
    hasDog: false,
  }
]


console.log("**** ACTIVIDAD DESDE AQUI *****")

// *******************************
// 1. HIGHER ORDER FUNCTIONS Activity
// *******************************

// Finish the function below (onlyDogs) that:
// - Receives an array of dog owner objects (see above array)
// - Filters the array with only the people that have dogs
// - Based on previous filter, returns a new array with only the dog names, all uppercased!
// - Don't forget to return the array!

function onlyDogs(array) {
  
  // 1. filter the array here:
  const filteredPersons = array.filter((eachPerson) => {
    return eachPerson.hasDog === true
  })
	// console.log(filteredPersons)
  // 2. map the array here:
  const onlyDogNames = filteredPersons.map((eachPerson) => {
    return eachPerson.dogName.toUpperCase()
  })

  // 3. return the filtered and mapped array here:
	return onlyDogNames
}

console.log( onlyDogs(peopleArray) )
// output should be:
// [ 'SPARKY', 'LAYKA' ]





// *******************************
// 2. TERNARY Activity 
// *******************************

// Finish the function below (sayHi) that:
// - Receives an array of dog owner objects (see above array)
// - Creates a new array of Strings, all saying "Hello <name>" with the following condition:
// 	- if the person has a dog, say hi to the dog
// 	- if the person doesn't have a dog, say hi to the person
// - don't forget to return the array!

function sayHi(array) {
  
  // 1. map over the array here and use a ternary for the check:
  const hiSentences = array.map((eachPerson) => {
    // `hi perrito`
    // `hi person`
    // console.log(eachPerson.hasDog === true ? `hola ${eachPerson.dogName}` : `hola ${eachPerson.name}`)
    return eachPerson.hasDog === true ? `hola ${eachPerson.dogName}` : `hola ${eachPerson.name}`
  })

  // 2. return the mapped array here:
	return hiSentences
}

console.log( sayHi(peopleArray) )
// output should be:
// [ 'Hello Sparky', 'Hello Layka', 'Hello Bob' ]





// *******************************
// 3. SHORT CIRCUIT Activity
// *******************************

// Finish the function below that:
// - Receives an array of dog owner objects (see above array)
// - Loops over the array and checks who doesn't have a dog
// - For that person only, console.log `<name> let the dogs out`
// - IMPORTANT: Note that this iteration does NOT ask to create a new array, just to console.log a value.

function whoLetTheDogsOut(array) {
  
  // 1. iterate over every element in the array and use short circuit evaluation for the console.log:
  array.forEach((eachPerson) => {
    eachPerson.hasDog === false && console.log(`${eachPerson.name} let the dogs out`)
  })

  // note: this function doesn't need to return anything, just console.log a string
  
}

whoLetTheDogsOut(peopleArray)
// output should be:
// 'Bob let the dogs out'