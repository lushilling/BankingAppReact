import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from './Components/Homepage';
import Account from './Components/Account';
import Prize from './Components/prize'

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div >
        <Router>

          <Route exact path="/" component={Homepage} />

          <Route path="/account" component={Account} render={() => <Account data={this.state.data} />} />

          <Route path="/prize" component={Prize} render={() => <Prize data={this.state.data} />} />

        </Router>
      </div >
    )
  }
}
