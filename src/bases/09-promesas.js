import { getHeroesById } from "./08-import-export";
// promesas
// const promesa = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       // Tarea
//       // 1.
//       const heroe = getHeroesById(12)
//       // console.log(heroe)
//       // resolve(heroe);
//       reject('no se pudo encontrar el heroe');
//    }, 2000);
// });

// promesa.then((heroe) => {
//    console.log("then de la promesa", heroe)
// }).catch(err => console.log(err));
const getHeroesByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      // 1.
      const heroe = getHeroesById(id);
      // console.log(heroe)
      if (heroe) {
        resolve(heroe);
      } else {
         reject("error no existe el heroe");
      }
      //   reject('no se pudo encontrar el heroe');
    }, 1500);
  });
};

// getHeroesByIdAsync(1).then(console.log).catch(console.log);
// .catch(err => console.log(err));
export default getHeroesByIdAsync;