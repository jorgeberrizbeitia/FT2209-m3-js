console.log("escribiendo react")

// nos dan acceso a React y ReactDOM

// nos permite trabar con JS, HTML y CSS en conjunto.

const myPageDOM = document.querySelector("#my-page")
const root = ReactDOM.createRoot(myPageDOM) // aqui estará la representacion del DOM virtual

const myName = "Jorge";
// crear elementos del DOM virtual
// const someInfo = React.createElement("h1", {
//   children: `Hola esta es mi pagina, mi nombre es ${myName}`
// })


// const someInfo = React.createElement("div", {
//   children: [
//     React.createElement("h1", {
//       children: `Hola esta es mi pagina, mi nombre es ${myName}`
//     }),
//     React.createElement("p", {
//       children: `Mi pagina es sobre pokemon`
//     }),
//     React.createElement("p", {
//       children: `El mejor pokemon es Bulbasaur`
//     }),
//   ]
// })


// JSX => es una sintaxis de lenguaje implementada en JS
// JSX es una mezcla de JS y XML

// const someInfo = (
//   <div>
//     <h1>Hola esta es mi pagina, mi nombre es {myName}</h1>
//     <p>Mi pagina es sobre pokemon</p>
//     <p>El mejor pokemon es Bulbasaur</p>
//   </div>
// )

// BABEL => es un transpilador que nos permite traducir JSX a los React.createElement, blah blah



// componentes
// una funcion que retorna un JSX
function SomeFunction() {
  return (
    <div>
      <h1>Hola esta es mi pagina, mi nombre es {myName}</h1>
      <p>Mi pagina es sobre pokemon</p>
      <p>El mejor pokemon es Bulbasaur</p>
    </div>
  )
}

function AnotherFunction() {
  return (
    <div>
      <footer>Mi pagina es muy guay, visita mi instagram</footer>
    </div>
  )
}


// root.render(someFunction()) // aqui va lo que vamos a renderizar en el DOM virtual
// renderizar un componente de React
root.render(
  <div> 
    <SomeFunction /> 
    <AnotherFunction />
  </div>
) // aqui va lo que vamos a renderizar en el DOM virtual

