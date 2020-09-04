import React from 'react';
import ReactDOM from 'react-dom'
import CounterApp from './components/CounterApp';
// import CounterApp from './components/CounterApp'
import './index.css'

const divRoot = document.querySelector('#root')


ReactDOM.render(<CounterApp value={100}/>, divRoot);
// ReactDOM.render(<PrimerApp saludo="hola soy Ja" />, divRoot);
