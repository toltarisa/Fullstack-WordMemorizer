import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Route,  BrowserRouter as Router,Switch } from 'react-router-dom';
import WordsPage from './components/pages/Words';
import NotFound from './components/pages/NotFound';
import TestPage  from './components/pages/TestPage';


const routing = (
    <Router>
        <Switch>
            <Route path="/"  exact component={App}></Route>
            <Route path="/words"  exact component={WordsPage}></Route>
            <Route path="/test" exact component={TestPage}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));


