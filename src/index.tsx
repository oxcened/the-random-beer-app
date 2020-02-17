import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import {Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import {configureStore} from './app/store/store';
import AppHistory from './app/models/AppHistory';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={AppHistory}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root'));

