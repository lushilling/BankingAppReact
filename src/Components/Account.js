import React from 'react';
import '../App.css';
import {
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap';
import axios from 'axios';

export default class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            firstName: "",
            accountNumber: ""
        }
    }

    getRequest = (e) => {
        e.preventDefault();

        let accountWanted = {
            accountNumber: e.target[0].value
        }
        axios.get("http://localhost:8080/account/allAccounts")
            .then(response => {
                this.setState({
                    data: response.data
                })

                var result = response.data;

                for (let x of result) {
                    if (x.accountNumber === accountWanted.accountNumber) {
                        let accountId = x.id;
                        console.log(accountId);
                        axios.get("http://localhost:8080/account/getAccount/" + accountId)
                            .then(response => {
                                this.setState({
                                    data: response.data
                                })
                                console.log(response.data);
                            })
                    }
                }
            })
        this.props.history.push('/prize');
    }


    render() {
        return (
            <div>
                <p>Welcome {this.props.firstName}, your account ({this.props.accountNumber}) has been successfully created.</p><br />
                <p>Enter your account number here to see if you have won a prize!</p>
                <Form inline onSubmit={this.getRequest}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="text" name="firstName" id="firstName" placeholder="Account Number" />
                    </FormGroup>
                    <Button>Reveal prize</Button>
                </Form>
            </div>
        )
    }

}