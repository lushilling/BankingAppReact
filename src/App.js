import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import Homepage from './Components/Homepage';
import Account from './Components/Account';
import Prize from './Components/prize'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      account: {}
    };
  }

  onLoad = () => {
    axios.get("http://localhost:8080/account/allAccounts")
      .then(response => {
        this.setState({
          data: response.data
        })
      })
  }

  addAccount = (newAccount) => {
    axios.post("http://localhost:8080/account/addAccount", newAccount)
      .then(response => {
        this.setState({
          account: response.data,
        })
      });
  }

  componentDidMount() {
    this.onLoad();
  }

  render() {
    return (
      <div >
        <Router>

          <Route exact path="/"  render={() => <Homepage data={this.state.data} addAccount={this.addAccount} />} />

          <Route path="/account" render={() => <Account data={this.state.data} onLoad={this.state.onLoad} firstName={this.state.account.firstName} accountNumber={this.state.account.accountNumber} />} />

          <Route path="/prize"  render={() => <Prize data={this.state.data} onLoad={this.state.onLoad} prize={this.state.account.prize} />} />

        </ Router>
      </div >
    )
  }
}
