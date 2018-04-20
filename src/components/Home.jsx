import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Featured from './featured.jsx';
import SearchBar from './search-bar.jsx';
import Results from './results.jsx';
import Category from './category.jsx';
import AddRestaurantModal from './addrestaurantmodal.jsx';
import {
    Jumbotron,
    Grid,
    Row,
    Col,
    Image,
    Button,
    FormControl,
    ControlLabel,
    HelpBlock,
    InputGroup,
    FormGroup
} from 'react-bootstrap';
require('../sass/main.scss');

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: '',
            categoryresults: '',
            show: false
        }

        this.searchBarCallback = (dataFromChild) => {
            this.setState({results: dataFromChild});
        }
    }

    render() {

        return (
            <div>
                <section className="homeSection">
                    <div id='title'>
                        <h1>Munchies</h1>
                    </div>
                    <div id='search-bar'>
                        <p>What are you craving?</p>
                        <SearchBar callbackFromParent={this.searchBarCallback}/>
                    </div>
                </section>
                <Results data={this.state.results}/>
                <Featured/>
                <Category/>
            </div>
        )
    }
}
