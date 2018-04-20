import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Rating from 'react-rating';

class RestaurantCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            pictures: [
                "https://brooksburger.com/images/bg5.jpg", "https://du7ybees82p4m.cloudfront.net/589dea2e769562.76756712.jpg?width=910&heigh" +
                        "t=512",
                "https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNjIwIl0/Mid" +
                        "dle-Eastern-Shakshuka-CMS.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbWDbyPSOnPXp2SdcCTpT1xSJA" +
                        "Dv9iG-gdLk5SRGRJvqH5Z6nmqA",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsSCABrx-_pqhuGHrygA4DEqC" +
                        "KPTzb-gXWsmKK0d6QIW_vDC5",
                "https://i.ndtvimg.com/i/2017-01/chicken-620x350_620x350_81483960113.jpg"
            ]
        }
    }
    handleClick() {
        let url = `/restaurant/` + this.props.restaurant.restaurantId;
        this.props.history.push(url);
    }
    render() {
        if (!this.props.restaurant) {
            return (
                <div className="restaurantCard loading">
                    Loading .......
                </div>
            )
        }
        if (!this.props.restaurant.pic_url) {
            let x = Math.floor(Math.random() * 6);
            this.props.restaurant.pic_url = this.state.pictures[x];
        }
        let url = (this.props.restaurant.pic_url !== ''
            ? `url(${this.props.restaurant.pic_url})`
            : '');
        var styles = {
            backgroundImage: `linear-gradient( to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), ` + url,
            backgroundSize: 'cover',
            overflow: 'hidden'
        }
        return (
            <div className="restaurantCard" onClick={this.handleClick} style={styles}>
                <div className="restaurantCard-info">
                    <h1>{this.props.restaurant.name}</h1>
                    <p>{this.props.restaurant.type}</p>
                    <Rating
                        emptySymbol="glyphicon glyphicon-star-empty"
                        fullSymbol="glyphicon glyphicon-star"
                        initialRating={this.props.restaurant.overallRating}
                        readonly/>
                </div>
            </div>
        )
    }
}

export default withRouter(RestaurantCard);

