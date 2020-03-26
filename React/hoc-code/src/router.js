import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Car from './pages/Car';
import My from './pages/My';
import Category from './pages/Category';

export default () => {
    return (
        <Router>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/car' component={Car} />
                <Route path='/my' component={My} />
                <Route path='/category' component={Category} />
            </Switch>
        </Router>
    )

}