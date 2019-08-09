import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { Provider } from 'react-redux';
import { store } from './components/helpers';

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));