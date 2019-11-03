import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import './index.css';
import App from './js/App';
import reducer from './js/reducer';
import { requestMiddleware } from './js/middleware';
import { getToken, subToLocalStorage } from './js/services/localStorage'
import { loginSuccess, loginFailure } from './js/action';


const persistedState = getToken() === 'SUCCESS' ? 
    { 
        loginStatus: 'SUCCESS',
        articles: [],
        articlesStatus: 'NOT_ASKED',    
    } : undefined;

const store = createStore(
    reducer,
    persistedState,
    applyMiddleware(requestMiddleware)
)

subToLocalStorage(
    () => store.dispatch(loginSuccess()),
    () => store.dispatch(loginFailure())
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
