import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import s from './components/Common/general.scss';

import Main from './components/Common/main.component.jsx'
import Home from './components/Project/Project.jsx'
import About from './components/Common/about.component.jsx'
import Poesis from './components/Project/Poesis/PoesisView.jsx'
import DYS from './components/Project/DYS/DYSView.jsx'
import CodeFriends from './components/Project/CodeFriends/CodefriendsView.jsx'


render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/poesis" component={Poesis}/>
            <Route path="/dys" component={DYS}/>
            <Route path="/codefriends" component={CodeFriends}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);