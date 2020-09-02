import React, { useState } from 'react'
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

   const [counter, setCounter] = useState(value);

   const handleAdd = (event) => {
      // console.log(event);
      // tambien se puede retornar una funcion
      // setCounter((counter)=>{counter +1})
      setCounter(counter + 1)
   }

   const handleReset = () => {
      setCounter(value)
   }

   const handleSubstract = () => {
      setCounter(counter -1)
   }

   return (
      <div>
         <h1>Contador</h1>
         <h4>{counter}</h4>
         {/* para pasar argumentos{(argumento)=> funcion(arg)} */}
         <button onClick={handleAdd}>Incrementar +1</button>
         <button onClick={handleReset }>Reset</button>
         <button onClick={handleSubstract}>Reducir -1</button>
      </div>
   )
}

export default CounterApp;

CounterApp.propTypes = {
   value:PropTypes.number.isRequired
}