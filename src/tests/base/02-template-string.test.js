import '@testing-library/jest-dom';
import { getSaludo } from "../../bases/02-template-string";

describe('pruebas en el archivo 02-template-string.js', () => {
   
   test('getSaludo: debe retornar Hola + nombre ', () => {
      // 1.
      const nombre = "jaime";
      // 2. 
      const saludo = getSaludo(nombre);
      expect(saludo).toBe('hola' + nombre);
   });
   // getSaludo debe retonrar hola Carlos si no hay argumento en el nombre
   test('getSaludo: debe retornar hola Carlos si no hay argumento', () => {
      const saludo = getSaludo();
      expect(saludo).toBe('hola Carlos');
   });
});
