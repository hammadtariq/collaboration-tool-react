import React, { Component } from "react";
import { Form, Icon, Input, Button, Card, Row, Col } from "antd";
import AuthService from "../../services/AuthService";
import "./Login.css";
import Cookies from "universal-cookie";
import { TOKEN, USER } from "../../utils/Constant";
const cookies = new Cookies();

const FormItem = Form.Item;

class NormalLoginForm extends Component {
  state = {
    loading: false,
    error: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        // this.props.history.push("/dashboard");
        AuthService.login(values)
          .then(response => {
            cookies.set(TOKEN, response.headers["authorization"]);
            console.log("response1: ", response);
            AuthService.loginToOkta(values)
              .then(response => {
                console.log("response2: ", response);
                if (response.data) {
                  this.setState({ loading: false });
                  cookies.set(USER, response.data._embedded.user);
                  this.props.history.push("/dashboard");
                } else {
                  throw "Internal Server Error";
                }
              })
              .catch(err => {
                console.log("err2: ", err);
                cookies.remove(TOKEN);
                this.setState({ error: err });
                this.setState({ loading: false });
              });
          })
          .catch(err => {
            console.log("err1: ", err);
            cookies.remove(TOKEN);
            this.setState({ error: err.response });
            this.setState({ loading: false });
          });
      }
    });
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row className="mainBody" type="flex" justify="center" align="middle">
        <Col>
          <div style={{ background: "#ECECEC", padding: "30px" }}>
            <Card
              title="Login"
              bordered={false}
              style={{ width: 300, height: 300 }}
            >
              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  {getFieldDecorator("userName", {
                    rules: [
                      { required: true, message: "Please input your username!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Username"
                    />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("password", {
                    rules: [
                      { required: true, message: "Please input your Password!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="Password"
                    />
                  )}
                </FormItem>
                <FormItem>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={this.state.loading}
                    onClick={this.enterLoading}
                  >
                    Log in
                  </Button>
                  {this.state.error ? <p>{this.state.error}</p> : null}
                </FormItem>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
