import React, {Component} from 'react';
import {
    Row,
    Col,
    Image,
    Button,
    FormControl,
    ControlLabel,
    HelpBlock,
    InputGroup,
    FormGroup,
    FieldGroup,
    Form
} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.handleSelectionChange = this
            .handleSelectionChange
            .bind(this);

        this.onAfterDeleteRowResto = this
            .onAfterDeleteRowResto
            .bind(this)

        this.onAfterDeleteRowRater = this
            .onAfterDeleteRowRater
            .bind(this)

        var dummydata = [
            {
                name: '',
                type: '',
                id: ''
            }
        ]
        this.state = {
            dummydata: [],
            columns: Object.keys(dummydata[0]),
            restaurants: [],
            raters: [],
            optionsResto: {
                afterDeleteRow: this.onAfterDeleteRowResto // A hook for after insert rows
            },
            optionsRater: {
                afterDeleteRow: this.onAfterDeleteRowRater // A hook for after insert rows
            },
            selectRowProp: {
                mode: 'checkbox'
            },
            querydescription: ''
        }
    }

    onAfterDeleteRowResto(rowKeys) {
        console.log("DELETE RESO")
        rowKeys.map((id) => {
            this.deleteRestaurant(id);
        })
    }

    onAfterDeleteRowRater(rowKeys) {
        console.log("DELETE RATER")
        rowKeys.map((id) => {
            this.deleteRater(id);
        })
    }

    deleteRater(id) {
        let url = `http://127.0.0.1:5000/deleteRater/` + id;
        fetch(url).then(results => {
            console.log("Admin: Deleted Rater" + id);
        })
    }

    deleteRestaurant(id) {
        let url = `http://127.0.0.1:5000/deleteRestaurant/` + id;
        fetch(url).then(results => {
            console.log("Admin: Deleted Restaurant" + id);
        })
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/restaurants').then(results => {
            console.log("Admin: Got the restos!");
            return results.json();
        }).then(data => {
            console.log("Admin: Set the Restos!");
            this.setState({restaurants: data.items});
        })
        fetch('http://127.0.0.1:5000/raters').then(results => {
            console.log("Admin: Got the raters!");
            return results.json();
        }).then(data => {
            console.log("Admin: Set the raters!");
            this.setState({raters: data.items});
        })
    }

    handleSelectionChange(e) {
        console.log(e.target.value)
        fetch(e.target.value).then(response => {
            return response.json();
        }).then(results => {
            let data = results;
            console.log("results", data)
            this.setState({dummydata: data})
            this.setState({
                columns: Object.keys(data[0])
            })
        })
        var key = e.target.value.charAt(22)

        var pair = {
            e: "For each type of restaurant (e.g. Indian or Irish) and the category of menu item (appetiser, main or desert), list the average prices of menu items for each category.",
            f: "Find the total number of rating for each restaurant, for each rater. That is, the data should be grouped by the restaurant, the specific raters and the numeric ratings they have received.",
            g: "Display the details of the restaurants that have not been rated in January 2015. That is, you should display the name of the restaurant together with the phone number and the type of food.",
            h: "Find the names and opening dates of the restaurants that obtained Staff rating that is lower than any rating given by rater X. Order your results by the dates of the ratings. (Here, X refers to any rater of your choice.)",
            i: "List the details of the Type Y restaurants that obtained the highest Food rating. Display the restaurant name together with the name(s) of the rater(s) who gave these ratings. (Here, Type Y refers to any restaurant type of your choice, e.g. Indian or Burger.)",
            j: "Provide a query to determine whether Type Y restaurants are “more popular” than other restaurants. (Here, Type Y refers to any restaurant type of your choice, e.g. Indian or Burger.) Yes, this query is open to your own interpretation!",
            k: "Find the names, join‐date and reputations of the raters that give the highest overall rating, in terms of the Food and the Mood of restaurants. Display this information together with the names of the restaurant and the dates the ratings were done.",
            l: "Find the names and reputations of the raters that give the highest overall rating, in terms of the Food or the Mood of restaurants. Display this information together with the names of the restaurant and the dates the ratings were done.",
            m: "Find the names and reputations of the raters that rated a specific restaurant (say Restaurant Z) the most frequently. Display this information together with their comments and the names and prices of the menu items they discuss. (Here Restaurant Z refers to a restaurant of your own choice, e.g. Ma Cuisine).",
            n: "Find the names and emails of all raters who gave ratings that are lower than that of a rater with a name called John, in terms of the combined rating of Price, Food, Mood and Staff. (Note that there may be more than one rater with this name).",
            o: "Find the names, types and emails of the raters that provide the most diverse ratings. Display this information together with the restaurants names and the ratings. For example, Jane Doe may have rated the Food at the Imperial Palace restaurant as a 1 on 1 January 2015, as a 5 on 15 January 2015, and a 3 on 4 February 2015. Clearly, she changes her mind quite often."
        }

        console.log(pair[key])
        
        this.setState({querydescription: pair[key]})

    }

    render() {
        return (
            <section className="adminSection">
                <div className="adminHeader">
                    <h1>Admin</h1>
                    <p>Query our databases directly.</p>
                </div>
                <div className="adminQuerySection">
                    <h1 className="queryHeader">All our Restaurants.</h1>
                    <BootstrapTable
                        data={this.state.restaurants}
                        striped
                        hover
                        bordered={false}
                        height='500'
                        scrollTop={'Top'}
                        options={this.state.optionsResto}
                        deleteRow={true}
                        selectRow={this.state.selectRowProp}>
                        <TableHeaderColumn isKey dataField='restaurantId' dataSort>Id</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataSort>Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
                        <TableHeaderColumn dataField='overallRating'>Overall Rating</TableHeaderColumn>
                        <TableHeaderColumn dataField='url'>Url</TableHeaderColumn>
                        <TableHeaderColumn dataField='pic_url'>Pic Url</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                <div className="adminQuerySection">
                    <h1 className="queryHeader">All our Raters.</h1>
                    <BootstrapTable
                        data={this.state.raters}
                        striped
                        hover
                        bordered={false}
                        height='500'
                        scrollTop={'Top'}
                        options={this.state.optionsRater}
                        deleteRow={true}
                        selectRow={this.state.selectRowProp}>
                        <TableHeaderColumn isKey dataField='userId' dataSort>UserID</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataSort>Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
                        <TableHeaderColumn dataField='reputation'>Reputation</TableHeaderColumn>
                        <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
                        <TableHeaderColumn dataField='join_date'>Join Date</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                <div className="adminQuerySection">
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel className="queryHeader">Select a Query</ControlLabel>
                        <FormControl
                            componentClass="select"
                            onChange={this.handleSelectionChange}
                            value={this.state.value}
                            placeholder="select">
                            <option value="http://127.0.0.1:5000/e">e</option>
                            <option value="http://127.0.0.1:5000/f">f</option>
                            <option value="http://127.0.0.1:5000/g">g</option>
                            <option value="http://127.0.0.1:5000/h">h</option>
                            <option value="http://127.0.0.1:5000/i">i</option>
                            <option value="http://127.0.0.1:5000/j">j</option>
                            <option value="http://127.0.0.1:5000/k">k</option>
                            <option value="http://127.0.0.1:5000/l">l</option>
                            <option value="http://127.0.0.1:5000/m">m</option>
                            <option value="http://127.0.0.1:5000/n">n</option>
                            <option value="http://127.0.0.1:5000/o">o</option>
                        </FormControl>
                    </FormGroup>
                    <div>
                        <p>{this.state.querydescription}</p>
                    </div>
                </div>
                <div className="adminRetrievedDataSection">
                    <BootstrapTable
                        data={this.state.dummydata}
                        keyField='id'
                        striped
                        hover
                        bordered={false}
                        condensed
                        height='400'
                        scrollTop={'Top'}>
                        {this
                            .state
                            .columns
                            .map(column => <TableHeaderColumn dataField={column}>{column}</TableHeaderColumn>)}
                    </BootstrapTable>
                </div>
            </section>
        )
    }
}