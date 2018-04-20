import React, {Component} from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button, FormControl, ControlLabel, HelpBlock, InputGroup, FormGroup } from 'react-bootstrap';
import Rating from 'react-rating';
import {withRouter} from 'react-router-dom';

class RestaurantListItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let url = `/restaurant/` + this.props.restaurant.restaurantId;
        this.props.history.push(url);
    }
    render() {
        console.log("LETS GOOOO!: "+this.props.restaurant.pic_url);
        let url = (this.props.restaurant.pic_url !== ''
            ? `url(${this.props.restaurant.pic_url})`
            : '');
        var styles = {
            backgroundImage: url,
            backgroundSize: 'cover',
            overflow: 'hidden'
        }
        return (
                <div className = "restaurantListItem" onClick={this.handleClick}>
                    <div className ="imageSection" style={styles}>
                    </div>
                    <div className = "nameTypeDesc">
                        <h2 className ="restoName">{this.props.restaurant.name}</h2>
                        <hr></hr>
                        <h5 className ="restoType">{this.props.restaurant.type}</h5>
                        <Rating
                        emptySymbol="glyphicon glyphicon-star-empty"
                        fullSymbol="glyphicon glyphicon-star"
                        initialRating={this.props.restaurant.overallRating}
                        readonly/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem massa, auctor a enim id, gravida sodales nibh.</p>
                    </div>
                </div>
        )
    }
}

export default withRouter(RestaurantListItem);
