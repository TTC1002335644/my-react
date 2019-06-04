import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";


import { createStore } from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const tiger = 10000

//这是action
const increase = {
    type:'涨工资'
}
const decrease = {
    type:'扣工资'
}

const reducer = (state = tiger, action) => {
    switch (action.type){
        case '涨工资':
            return state += 100;
        case '扣工资':
            return state -= 100;
        default:
            return ++state;
    }
}

const store = createStore(reducer);

console.log(store.getState())
