import React, { Component } from 'react';
import RestaurantListItem from './restaurant-listitem.jsx';

export default class Results extends Component {
        constructor(props){
            super(props);

        }
        render() {
            if (!this.props.data || this.props.data[0] == undefined) {
                return (
                    <div>
                    </div>
                )
            }
            else{
                return (
                    <section className="resultsSection">
                        <div className="resultsHeader">
                            <h1>Results</h1>
                        </div>
                        <div className="resultsRow">
                            {
                                this.props.data.map(function(restaurant, index){
                                console.log("YESS SIRRRRR",restaurant,index)
                                return <RestaurantListItem restaurant={restaurant}/>
                                })
                            }
                        </div>
                        </section>
                        )
                }
            }
        }


