import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import s from './general.scss';


import Home from './components/Portfolio/PortfolioContainer.jsx'
import About from './components/Common/about.component.jsx'
import Main from './components/Common/main.component.jsx'

render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);