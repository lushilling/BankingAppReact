import React from 'react';
import '../App.css';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import axios from 'axios';


export default class Homepage extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: ""
        }
    }

    nextPage = () => {
        this.props.history.push('/account')
    }

    postRequest = (e) => {
        e.preventDefault();

        let newUser = {
            firstName: e.target[0].value,
            lastName: e.target[1].value
        }

        if (newUser.firstName === "" || newUser.lastName === "") {
            this.setState({ error: "Please ensure you have filled out all fields" })
        } else {
            this.setState({ error: "" })
        }


        axios.post("http://localhost:8080/account/addAccount", newUser)
            .then(response => {
                this.setState({
                    data: response.data
                });
            });
        this.props.history.push('/account');
    }

    render() {
        return (
            <div>
                <p>Banking Application</p><br />
                <p>Enter your first and last name below to create an account</p>

                <Form inline onSubmit={this.postRequest} >
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="firstName" className="mr-sm-2">First Name: </Label>
                        <Input type="text" name="firstName" id="firstName" placeholder="Enter First Name" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="lastName" className="mr-sm-2">Last Name: </Label>
                        <Input type="text" name="lastName" id="lastName" placeholder="Enter Last Name" />
                    </FormGroup>
                    <Button>Create Account</Button>
                </ Form>
                <p style={{ color: 'red' }}>{this.state.error}</p>
                {/* print account number */}
            </div>
        );
    }
}