import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Home from './home.jsx';
import Restaurant from './restaurant.jsx';
import AddRestaurantModal from './addrestaurantmodal.jsx';
import AddRater from './add-rater.jsx';
export default class HeaderNavigation extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="headerSection">
                <div className="headerTitle">
                <Link to='/'>Munchies</Link>
                </div>
                <div className="headerLinks">
                    <div className="headerLinksItem"><AddRestaurantModal/></div>
                    <div className="headerLinksItem"><AddRater/></div>
                    <div className="headerLinksItem"><Link to='/admin'>Admin</Link></div>
                </div>
            </div>
        )
    }
}