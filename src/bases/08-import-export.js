// import export funciones
// import { heroes } from './data/heroes';
import  heroes  from '../data/heroes';

export const getHeroesById = (id) => {
   return heroes.find((heroe) => heroe.id === id )
}


export const  getHeroeByOwner = (owner) => {
   return heroes.filter((heroe)=> heroe.owner === owner)
}

// console.log(getHeroesById(2))
// console.log(getHeroeByOwner('DC'))
// console.log(heroes)

