import React, { Component } from 'react';
import fire from './config/fire'
import Home from './Home.js';
import Login from './Login.js';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    }) 
  }

  render() {
    return (
      <div className="App">
        { this.state.user ? ( <Login /> ) : ( <Home /> ) }
      </div>
    );
  }
}

export default App;