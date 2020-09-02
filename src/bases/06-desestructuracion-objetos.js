// desestructuracion de objetos
// asignacion desustructurante

const persona = {
  nombre: "tony",
  edad: 45,
  clave: "ironman",
};

//desestructuracion
// const {nombre, edad } = persona;

// se puede restructurar en los parametros de la funcion
// se pueden definir valores por defecto
const useContext = ({ clave, edad, nombre, rango = "Capitan" }) => {
  // console.log(nombre, rango);

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.567,
      lng: -13.6767,
    },
  };
};

// para desestructurar un obejto dentro de un objeto latlng:{}
const { nombreClave, anios, latlng:{lat, lng} } = useContext(persona);
// otra forma 
// const { lat, lng } = latlng;


console.log( nombreClave, anios );
console.log(lat)
