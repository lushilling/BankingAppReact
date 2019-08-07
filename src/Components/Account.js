import React from 'react';
import '../App.css';
import {
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap';

export default class Account extends React.Component {

    constructor() {
        super();
        this.state = {
            accountNumber: ""
        }
    }

    getRequest = (e) => {
    
    .axios.get("http://localhost:8080/account/getAccount")

    }

    render() {
        return (
            <div>
                <p>Welcome {this.state.firstName}, your account has been successfully created.</p><br />
                <p>Enter your account number here to see if you have won a prize!</p>
                <Form inline onSubmit={this.postRequest}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="text" name="firstName" id="firstName" placeholder="Account Number" />
                    </FormGroup>
                    <Button>Reveal prize</Button>
                </Form>
            </div>
        )
    }

}