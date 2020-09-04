import React from 'react';
import '@testing-library/jest-dom';
import PrimerApp from '../../components/PrimerApp';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimerApp/>', () => {
   // test('debe mostrar el mensaje "Hola soy Ja', () => {
   //    const saludo = "hola soy Ja";
   //    const {getByText} = render(<PrimerApp saludo={saludo} />);
   //    expect(getByText(saludo)).toBeInTheDocument();
   // })
   test('debe mostrar <PrimerApp/> correctamente', () => {
      const saludo = "hola soy Ja";
      const wrapper = shallow(<PrimerApp saludo={saludo} />);
      expect(wrapper).toMatchSnapshot();
   })
   test('debe mostrar el subtitulo enviado por props', () => {
      const saludo = "hola soy Ja";
      const subtitulo = "soy un subtitulo";
      const wrapper = shallow(<PrimerApp saludo={saludo} subtitulo={subtitulo} />);
      const textoParrafo = wrapper.find('p').text();
      expect(textoParrafo).toBe(subtitulo);
   })
   
   
   
})