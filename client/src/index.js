import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
import WordsPage from './components/pages/Words';
import NotFound from './components/pages/NotFound';


const routing = (
    <Router>
        <Switch>
            <Route path="/"  exact component={App}></Route>
            <Route path="/words"  exact component={WordsPage}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));


