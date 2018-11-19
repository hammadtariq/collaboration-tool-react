import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import {TOKEN} from './utils/Constant';

import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

import "./App.css";

const cookies = new Cookies();

const PrivateRoute = ({ component: Component, isLogin, isAdmin, ...rest }) => (
    <Route {...rest} render={(props) => {
        let token = cookies.get(TOKEN);
        if(isLogin && token) return <Component {...props} />;
        else if(isLogin && !token) return <Redirect to='/login' />;
        else if(!isLogin && token) return <Redirect to='/dashboard' />;
        return <Component {...props} />;
    }} />
);

const authentication = (props) => {
    return cookies.get(TOKEN) ? <Redirect to='/dashboard' /> : <Redirect to="/login" />
};

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/dashboard" isLogin={true} component={Dashboard} />
                <PrivateRoute exact path="/login" isLogin={false} component={Login} />
                <Route exact path="/" render={authentication} />
            </Switch>
        </Router>
    );
  }
}

export default App;
