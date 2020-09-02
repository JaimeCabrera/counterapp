// desestructuracion arreglos

const personajes = ['ironman', 'spiderman', 'capitan america']

// desestruc...
// [,p2]-> para traer solo el segundo elemento sin considerar el primero
const [,p1] = personajes;


export const retornaArreglo = () => {
   return ['ABC', 123];
}

// const [letras, numeros] = retornaArreglo();

// console.log(letras, numeros)
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);


// Tares
// 1. la primera posicion del arr = nombre
// 2. setNombre

const useState = (nombre) => {
   return [nombre, () => { console.log("hola mundo")  }];
}
const [nombre, setNombre] = useState('Goku');
// console.log(nombre)
// setNombre()
// console.log(useState('arrow'))