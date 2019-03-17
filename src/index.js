import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import reducerApp from './reducers';
import { Provider } from 'react-redux'

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(reducerApp)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
