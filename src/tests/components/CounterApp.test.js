import '@testing-library/jest-dom';
import React from 'react';
import CounterApp from '../../components/CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas en el componente <CounterApp/>', () => {
// let para tener acceso a la variable en todo el codigo
   // el const es solo una variable de scope {}
   let wrapper = shallow(<CounterApp />);
   // sirve para reinicar las varaiables despues de tal prueba
   beforeEach(() => {
      wrapper = shallow(<CounterApp />);
   })

   test('debe mostrar el valor por defecto el counter', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('debe devolver el valor de 100 del counter app ', () => {
      const valor = 100;
      const wrapper = shallow(<CounterApp value={valor} />)
      const valorComponente = wrapper.find('h4').text().trim();
      expect(valorComponente).toBe('100');
   });

   test('debe incrimentar con el boton de +1', () => {
      wrapper.find('button').at(0).simulate('click', {})
      const valorComponente = wrapper.find('h4').text().trim();
      expect(valorComponente).toBe('11');
   });

   test('debe incrimentar con el boton de -1', () => {
      wrapper.find('button').at(2).simulate('click', {})
      const valorComponente = wrapper.find('h4').text().trim();
      expect(valorComponente).toBe('9');
   });

   test('debe de colocar el valor por defecto al presionar reset', () => {
      const valor = 105;
      const wrapper = shallow(<CounterApp value={valor} />);
      wrapper.find('button').at(0).simulate('click', {});
      wrapper.find('button').at(0).simulate('click', {});
      wrapper.find('button').at(1).simulate('click', {});

      const resetTest = wrapper.find('h4').text().trim();
      expect(resetTest).toBe('105');
      
   })
   
   
});