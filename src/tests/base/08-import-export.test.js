
import '@testing-library/jest-dom';
import { getHeroesById, getHeroeByOwner } from '../../bases/08-import-export';
import heroes from '../../data/heroes';

describe('pruebas en funciones de heroes', () => {
   test('getHeroesById: debe de retornar un heroe por id', () => {
      const id = 2;
      const heroe = getHeroesById(id);

      const heroesData = heroes.find((heroe) => heroe.id === id);

      expect(heroe).toEqual(heroesData);
   });
   test('getHeroesById: debe de retornar undefined si el id no exite', () => {
      const id = 22;
      const heroe = getHeroesById(id);
      expect(heroe).toBe(undefined);
   });

   // debe retornar los heroes de DC
   // toEqual al arreglo filtrado
   test('getHeroesByOwner: debe retornar los heroes de DC', () => {
      const owner = 'DC';
      const heroe = getHeroeByOwner(owner);
      const heroeData = heroes.filter((heroe) => heroe.owner === owner);
      expect(heroe).toEqual(heroeData);
   });
   
   // debe retornar los heroes de Marvel
   // toEqual al arreglo filtrado
   test('getHeroesByOwner: debe retornar los heroes de Marvel', () => {
      const owner = 'Marvel';
      const heroe = getHeroeByOwner(owner);
      expect(heroe.length).toBe(2);
   })
   
})