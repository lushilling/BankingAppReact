import React from 'react';
import { Link } from "react-router-dom";


import '../App.css';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';


export default class Homepage extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: ""
        }
    }

    postRequest = (e) => {
        e.preventDefault();

        let newAccount = {
            firstName: e.target[0].value,
            lastName: e.target[1].value
        }

        if (newAccount.firstName === "" || newAccount.lastName === "") {
            this.setState({ error: "Please ensure you have filled out all fields" })
        } else {
            this.setState({ error: "" })
        }

        this.props.addAccount(newAccount);

        document.getElementById("linkToAccount").click();

    };

    render() {
        return (
            <div>
                <p>Banking Application</p><br />
                <p>Enter your first and last name below to create an account</p>

                <Form inline onSubmit={this.postRequest} >
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="firstName" className="mr-sm-2">First Name: </Label>
                        <Input type="text" name="firstName" id="accountFirstName" placeholder="Enter First Name" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="lastName" className="mr-sm-2">Last Name: </Label>
                        <Input type="text" name="lastName" id="accountLastName" placeholder="Enter Last Name" />
                    </FormGroup>
                    <Button>Create Account</Button>
                    <Link to="/account" id="linkToAccount"></Link>
                </ Form>
                <p style={{ color: 'red' }}>{this.state.error}</p>
            </div>
        )
    };
}