import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
export default class MenuItem extends Component {
    constructor() {
        super();
        this.onAfterInsertRow = this
            .onAfterInsertRow
            .bind(this)
        this.onAfterDeleteRow = this
            .onAfterDeleteRow
            .bind(this)

        this.state = {
            options: {
                afterInsertRow: this.onAfterInsertRow,
                afterDeleteRow: this.onAfterDeleteRow // A hook for after insert rows
            },
            selectRowProp: {
                mode: 'checkbox'
            }
        }

    }
    onAfterInsertRow(row) {
        var new_item = {
            restaurantId: this.props.restaurantId,
            name: row.name,
            category: row.category,
            type: row.type,
            description: row.description,
            price: row.price
        }
        console.log(new_item);
        fetch('http://127.0.0.1:5000/post_menuitem', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(new_item)
            })
            .then(function (res) {
                console.log(res)
            })
            .catch(function (res) {
                console.log(res)
            })
    }
    onAfterDeleteRow(rowKeys) {
        rowKeys.map((id)=>{
            this.deleteItem(id);
        })
    }

    deleteItem(id){
        let url = `http://127.0.0.1:5000/deleteMenuItem/` + id;
        fetch(url).then(results => {
            console.log("Restaurant: Deleted menu item" + id);
        })
    }
    

    render() {
        console.log(this.props.items)
        if (!this.props.items) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }
        return (
            <div className="menuTable">
                <BootstrapTable
                    data={this.props.items}
                    striped
                    hover
                    bordered={false}
                    condensed
                    height='400'
                    scrollTop={'Top'}
                    className='menuTableColumns'
                    insertRow={true}
                    options={this.state.options}
                    deleteRow={true}
                    selectRow={this.state.selectRowProp}>
                    <TableHeaderColumn isKey dataField='itemId' hidden>Item Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='category'>Category</TableHeaderColumn>
                    <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
                    <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
                    <TableHeaderColumn dataField='price' dataSort>Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}