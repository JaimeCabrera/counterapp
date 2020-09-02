import React from 'react';
import ReactDOM from 'react-dom'
import PrimerApp from './components/PrimerApp';
import CounterApp from './components/CounterApp'
import './index.css'

const divRoot = document.querySelector('#root')


// ReactDOM.render(<CounterApp value={4}/>, divRoot);
ReactDOM.render(<PrimerApp saludo="hola soy Ja" />, divRoot);
