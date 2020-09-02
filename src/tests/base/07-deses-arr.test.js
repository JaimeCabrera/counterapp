import '@testing-library/jest-dom'
import { retornaArreglo } from '../../bases/07-deses-arr'
describe('Pruebas en el archivo 07-deses-arr.js', () => {
   test('retornaArreglo debe retonar un string y numero ', () => {
      const [letras, numero] = retornaArreglo()
      expect(letras).toBe('ABC');
      expect(typeof letras).toBe('string');
      expect(numero).toBe(123);
      expect(typeof numero).toBe('number');
   });
});