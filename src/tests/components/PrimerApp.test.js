import React from 'react'
import { render } from '@testing-library/react';
import PrimerApp from '../../components/PrimerApp';
import '@testing-library/jest-dom';

describe('Pruebas en <PrimerApp/>', () => {
   test('debe mostrar el mensaje "Hola soy Ja', () => {
      const saludo = "hola soy Ja";
      const {getByText} = render(<PrimerApp saludo={saludo} />);
      expect(getByText(saludo)).toBeInTheDocument();
   })
   
})