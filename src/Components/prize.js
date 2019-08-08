import React from 'react';
import '../App.css';

export default class Prize extends React.Component {

    render(){
        return(
            <p>{this.props.prize}</p>
        )
    }
}