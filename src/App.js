import React, { Component } from "react";
import { Row, Col } from "antd";

import Login from "./components/Login";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Row className="app" type="flex" justify="center" align="middle">
          <Col>
            <Login />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
