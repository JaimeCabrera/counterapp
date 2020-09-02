
export const getUser = () => {
   return {
      uid: 'abc123',
      username:'Blanco'
   }
}

// console.log(saludar("Jaime"))
// console.log(saludar2("Jaime"));

// tarea
// 1. trasform to arrow function 
// 2. return an implicit object
// 3. pruebas
export const getUserActive = (nombre) => {
   return {
      uid: 'abc345',
      username: nombre,
   }
}
const usuarioActivo = getUserActive('Jaime');
// console.log(usuarioActivo)

// response
const getUserActive1 = (nombre) => ({ uid: 'abc345', username: nombre })
// console.log(getUserActive1('Carlos'))