import '@testing-library/jest-dom';
import getImagen from '../../bases/11-async-await';

describe('pruebas en el archivo 11-async-await.js', () => {
   test('getImagen obetner el url de una imagen',async () => {
      const url = await getImagen()
      expect(url.includes('https://')).toBe(true);
   });
});
