import '@testing-library/jest-dom';
import { getUser, getUserActive } from "../../bases/05-funciones";

describe('pruebas en el archivo 05-funciones.js', () => {
   test('getuser(): debe de retornar un objeto ', () => {
      const userTest = {
         uid: 'abc123',
         username: 'Blanco'
      }
      const user = getUser();
      expect(user).toEqual(userTest);
   })
   // getusuarioActivo deber retornar un objeto
   test('getUserActive(): debe retornar un objeto', () => {
      const nombre = "Jaime";
      const userActiveTest = {
         uid: 'abc345',
         username: nombre,
      }
      const userActive = getUserActive(nombre);
      expect(userActive).toEqual(userActiveTest);
   })
   
})