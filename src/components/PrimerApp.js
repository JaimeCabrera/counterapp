import React from 'react';
import PropTypes from 'prop-types';
const PrimerApp = ({saludo, subtitulo}) => {

   return (
      <>
         <h4>{saludo}</h4>
         <p>{subtitulo}</p>
      </>
   );
}

// propiedades de los componentes
PrimerApp.propTypes = {
   // prop obligatoria .isrequired
   saludo: PropTypes.string.isRequired
}
// valores por defecto de las props
PrimerApp.defaultProps = {
   subtitulo: "soy un subtitulo"
}
export default PrimerApp