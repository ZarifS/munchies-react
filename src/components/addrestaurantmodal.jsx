import React, {Component} from 'react';
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
    FormGroup,
    Modal,
    Popover,
    Tooltip,
    Overlay,
    OverlayTrigger,
    FieldGroup,
    Form,
} from 'react-bootstrap';

export default class AddRestaurantModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleImgUrlChange = this.handleImgUrlChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);

        this.state = {
          show: false,
          name: '',
          type: '',
          url: '',
          img_url: ''
        };
      }

      handleClose() {
        this.setState({ show: false });
      }

      handleShow() {
        this.setState({ show: true });
      }

      handleNameChange(e){
        this.setState({name: e.target.value});
     }

     handleTypeChange(e){
        this.setState({type: e.target.value});
     }

     handleUrlChange(e){
        this.setState({url: e.target.value});
     }

     handleImgUrlChange(e){
        this.setState({img_url: e.target.value});
     }

      handleAdd(e){
          var new_restaurant = {
              name: this.state.name,
              type: this.state.type,
              url: this.state.url,
              pic_url: this.state.img_url
          }
          console.log(new_restaurant);
          fetch('http://127.0.0.1:5000/post_resto', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(new_restaurant)
        }).then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })
      }


    render(){
        return(
            <div>
                <div onClick={this.handleShow} className="headerLink">Add a Restaurant</div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a Restaurant</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalRName">
                                <Col componentClass={ControlLabel} sm={3}>
                                Name:
                                </Col>
                                <Col sm={9}>
                                <FormControl type="text" placeholder="Shawarma Palace" value={this.state.name} onChange={this.handleNameChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalType">
                                <Col componentClass={ControlLabel} sm={3}>
                                Type:
                                </Col>
                                <Col sm={9}>
                                <FormControl type="text" placeholder="Lebanese" value={this.state.type} onChange={this.handleTypeChange}  />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalWebUrl">
                                <Col componentClass={ControlLabel} sm={3}>
                                Website URL:
                                </Col>
                                <Col sm={9}>
                                <FormControl type="website" placeholder="http://shawarmapalace.ca/" value={this.state.url} onChange={this.handleUrlChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalImgUrl">
                                <Col componentClass={ControlLabel} sm={3}>
                                Image URL:
                                </Col>
                                <Col sm={9}>
                                <FormControl type="text" placeholder="http://shawarmapalace.ca/wp-content/uploads/2017/06/25-1920x1000.jpg" value={this.state.img_url} onChange={this.handleImgUrlChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={3} sm={10}>
                                <Button type="submit" onClick={this.handleAdd}>Add</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}