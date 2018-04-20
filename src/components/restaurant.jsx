import React, {Component} from 'react';
import MenuItem from './menuItem.jsx';
export default class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            restaurant: {},
            locations: [],
            menu: []
        }
    }
    componentDidMount() {
        let url = `http://127.0.0.1:5000/restaurantById/` + this.state.id;
        this.getRestaurant(url);
        url = `http://127.0.0.1:5000/locationByRestaurantId/` + this.state.id;
        this.getLocations(url);
        url = `http://127.0.0.1:5000/menuByRestaurantId/` + this.state.id;
        this.getMenu(url);
    }
    getRestaurant(url) {
        fetch(url).then(results => {
            console.log("Restaurant: Got the resto!");
            return results.json();
        }).then(data => {
            console.log("Restaurant: Set the Restos!");
            this.setState({restaurant: data});
            console.log(this.state.restaurant);
        })
    }
    getLocations(url) {
        console.log("Restaurant: IN GET the Locations!");
        fetch(url).then(results => {
            console.log("Restaurant: Got the Locations!");
            return results.json();
        }).then(data => {
            console.log("Restaurant: Set the Locations!");
            this.setState({locations: data.items});
            console.log(this.state.locations);

        })
    }
    getMenu(url) {
        console.log("Restaurant: IN GET the Menu!");
        fetch(url).then(results => {
            console.log("Restaurant: Got the Menu!");
            return results.json();
        }).then(data => {
            console.log("Restaurant: Set the Menu!");
            this.setState({menu: data.items});
            console.log(this.state.menu);
        })
    }

    render() {
        let url = (this.state.restaurant.pic_url !== ''
            ? `url(${this.state.restaurant.pic_url})`
            : '');
        var styles = {
            backgroundImage: `linear-gradient( to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), ` + url,
            backgroundSize: 'cover',
            overflow: 'hidden'
        }
        return (
            <div className="restaurantSection">
                <div className="content">
                    <div className="restaurantHeader" style={styles}>
                        <h1 className="restaurantHeaderTitle">{this.state.restaurant.name}</h1>
                    </div>
                    <div className="restaurantContent">
                        <div className="restaurantContentItem">
                            <h1>{this.state.restaurant.type}</h1>
                        </div>
                        <div className="restaurantContentItem">
                            <h1>|</h1>
                        </div>
                        <div className="restaurantContentItem">
                            <h1>{this.state.restaurant.overallRating} Stars</h1>
                        </div>
                    </div>
                    <hr/>
                    <div className="restaurantLocation">
                        <h1 className="restaurantLocationHeader">Location</h1>
                        <div className="restaurantLocationList">
                            {this
                                .state
                                .locations
                                .map((location) => {
                                    return (
                                        <div className="restaurantLocationItem" key={location.locationId}>
                                            <h1>Address | {location.street_address}</h1>
                                            <h1>Open: {location.open}</h1>
                                            <h1>Close: {location.close}</h1>
                                            <h1>Contact | {location.phone_number}</h1>
                                            <h1>Manager | {location.manager_name}</h1>
                                        </div>
                                    )
                                })
}
                        </div>
                    </div>
                    <hr/>
                    <div className="restaurantMenu">
                        <h1 className="restaurantMenuHeader">Menu</h1>
                        <MenuItem items = {this.state.menu} restaurantId={this.state.restaurant.restaurantId}/>
                    </div>
                </div>
            </div>
        )
    }
}