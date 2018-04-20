import React, {Component} from 'react';
import RestaurantCard from './restaurant-card.jsx';

export default class Featured extends Component {
    constructor() {
        super();
        this.state = {
            restaurants: []
        }
        // this.checkResource = this.checkResource.bind(this);
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/restaurants/limit=8').then(results => {
            console.log("Featured: Got the restos!");
            return results.json();
        }).then(data => {
            console.log("Featured: Set the Restos!");
            let restaurants = data.items
            this.setState({restaurants: restaurants});
        })
    }

    render() {
        return (
            <section className="featuredSection">
                <div className="featuredHeader">
                    <h1>Featured Restaurants</h1>
                    <p>There's always something to eat.</p>
                </div>
                <div className="featuredRow">
                    <RestaurantCard restaurant={this.state.restaurants[0]}/>
                    <RestaurantCard restaurant={this.state.restaurants[1]}/>
                    <RestaurantCard restaurant={this.state.restaurants[2]}/>
                    <RestaurantCard restaurant={this.state.restaurants[3]}/>
                    <RestaurantCard restaurant={this.state.restaurants[4]}/>
                    <RestaurantCard restaurant={this.state.restaurants[5]}/>
                    <RestaurantCard restaurant={this.state.restaurants[6]}/>
                    <RestaurantCard restaurant={this.state.restaurants[7]}/>
                </div>
            </section>
        )
    }
}
