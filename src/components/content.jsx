import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home.jsx';
import Restaurant from './restaurant.jsx';
import Admin from './admin.jsx';
export default class Content extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/restaurant/:id' component={Restaurant}/>
                    <Route path='/admin' component={Admin}/>
            </Switch>
        )
    }
}
