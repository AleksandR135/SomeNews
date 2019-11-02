import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import './index.css';
import App from './js/App';
import reducer from './js/reducer';
import { requestMiddleware } from './js/middleware';

const store = createStore(
    reducer,
    applyMiddleware(requestMiddleware)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
