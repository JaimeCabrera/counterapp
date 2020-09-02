import '@testing-library/jest-dom';
import getHeroesByIdAsync from '../../bases/09-promesas';
import heroes from '../../data/heroes';

describe('pruebas en el archivo 09-promesas.js', () => {
   // done para tareas async 
   test('getHeroeByIdAsync: debe retonar un heroe async ', (done) => {
      const id = 1;
      getHeroesByIdAsync(id).then(heroe => {
         expect(heroe).toBe(heroes[0]);
         done();
      })
   });
   test('debe devolver un errro si el id del heroe no existe ', (done) => {
      const id = 12;
      getHeroesByIdAsync(id)
         .catch(error => {
            expect(error).toBe('error no existe el heroe');
            done();
         });
   });
});
