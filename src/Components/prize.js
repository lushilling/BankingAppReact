import React from 'react';
import '../App.css';

export default class Prize extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            accountNumber: "",
            prize: ""
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.prize}</p>
            </div>
        )
    }
}