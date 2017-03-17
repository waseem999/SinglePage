import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import {AppContainer} from './AppContainer';
import HomeContainer from '../containers/HomeContainer.jsx';
import Portfolio from './Portfolio.jsx';
import Process from './Process.jsx';
import Journal from './Journal.jsx';
import Contact from './Contact.jsx';
import {Provider} from 'react-redux';
import store from '../store';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={AppContainer}>
                <IndexRoute component={HomeContainer}/>
                <Route path ='/portfolio' component={Portfolio}/>
                <Route path ='/process' component={Process}/>
                <Route path ='/journal' component={Journal}/>
                <Route path ='/contact' component={Contact}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

