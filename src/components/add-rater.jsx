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
    Form
} from 'react-bootstrap';

export default class AddRater extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this
            .handleShow
            .bind(this);
        this.handleClose = this
            .handleClose
            .bind(this);
        this.handleUserIdChange = this
            .handleUserIdChange
            .bind(this);
        this.handleTypeChange = this
            .handleTypeChange
            .bind(this);
        this.handleNameChange = this
            .handleNameChange
            .bind(this);
        this.handleEmailChange = this
            .handleEmailChange
            .bind(this);
        this.handleAdd = this
            .handleAdd
            .bind(this);

        this.state = {
            show: false,
            userId: '',
            email: '',
            name: '',
            type: ''
        };
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleTypeChange(e) {
        this.setState({type: e.target.value});
    }

    handleUserIdChange(e) {
        this.setState({userId: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handleAdd(e) {
        alert("adding!")
        var new_rater = {
            name: this.state.name,
            type: this.state.type,
            email: this.state.email,
            userId: this.state.userId
        }
        console.log(new_rater);
        alert(new_rater.name);
        fetch('http://127.0.0.1:5000/post_rater', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(new_rater)
            })
            .then(function (res) {
                console.log(res)
            })
            .catch(function (res) {
                console.log(res)
            })
    }

    render() {
        return (
            <div>
                <div
                    onClick={this.handleShow}
                    className="headerLink">Register</div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalRName">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Name:
                                </Col>
                                <Col sm={9}>
                                    <FormControl
                                        type="text"
                                        placeholder="Zarif Shahriar"
                                        value={this.state.name}
                                        onChange={this.handleNameChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalType">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Type:
                                </Col>
                                <Col sm={9}>
                                    <FormControl
                                        type="text"
                                        placeholder="Blogger or Online or Food Critic"
                                        value={this.state.type}
                                        onChange={this.handleTypeChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalWebUrl">
                                <Col componentClass={ControlLabel} sm={3}>
                                    User ID:
                                </Col>
                                <Col sm={9}>
                                    <FormControl
                                        type="text"
                                        placeholder="Zarif123"
                                        value={this.state.userId}
                                        onChange={this.handleUserIdChange}/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalImgUrl">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Email:
                                </Col>
                                <Col sm={9}>
                                    <FormControl
                                        type="email"
                                        placeholder="zshah011@uottawa.ca"
                                        value={this.state.email}
                                        onChange={this.handleEmailChange}/>
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