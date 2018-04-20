import React, {Component} from 'react';

export default class CategoryCard extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            restaurants: []
        }
    }
    handleClick() {
        this.getData(this.props.category.name)
    }

    getData(type){
        fetch('http://127.0.0.1:5000/restaurantByType/'+type).then(results => {
            console.log("Categories: Got the restos!");
            return results.json();
        }).then(data => {
            console.log("Categories: Set the Restos!");
            let restaurants = data.items
            console.log(restaurants);
            this.setState({restaurants: restaurants});
            this.props.callbackFromParent(restaurants);
        })
    }
    render() {
        let url = (this.props.category.picture !== ''
            ? `url(${this.props.category.picture})`
            : '');
        var styles = {
            backgroundImage: `linear-gradient( to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), ` + url,
            backgroundSize: 'cover',
            overflow: 'hidden',
        }
        return (
            <div className="categoryCard" onClick={this.handleClick} style={styles}>
                <div className="categoryCard-info">
                    <h1>{this.props.category.name}</h1>
                </div>
            </div>
        )
    }
}