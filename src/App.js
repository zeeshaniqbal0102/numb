import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import { Web3Provider } from './utils/Web3Provider'
import { Toaster } from 'react-hot-toast'
import Home from './Component/Home';

class App extends React.Component {
  render() {
    return (
      <Web3Provider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
        <Toaster />
      </Web3Provider>
    );
  }
}


export default App;