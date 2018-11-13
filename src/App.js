import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

import "./App.css";

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/" render={() => (<Redirect to="/login" />)} />
            </Switch>
        </Router>
    );
  }
}

export default App;
