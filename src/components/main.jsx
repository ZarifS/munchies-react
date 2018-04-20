import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import HeaderNavigation from './header-navigation.jsx';
import Content from './content.jsx';
export default class Main extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <HeaderNavigation/>
                <div class="spacer">
                    &nbsp;
                </div>
                <Content/>
            </div>
        )
    }
}
