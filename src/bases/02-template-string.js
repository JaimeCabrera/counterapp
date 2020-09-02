// temaplate strings
const nombre = "Jaime";
const apellido = "Cabrera";

// sin template string
// const nombreCompleto = nombre + ' ' + apellido;
// con tempalte string
const nombreCompleto = `${nombre} ${apellido}`;
// console.log(nombreCompleto)

export function getSaludo(nombreCompleto = ' Carlos') {
   return "hola"+ nombreCompleto;
}

// console.log(`Este es un saludo ${getSaludo(nombreCompleto)}`)