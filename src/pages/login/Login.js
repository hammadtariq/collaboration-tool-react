import React, { Component } from "react";
import { Form, Icon, Input, Button, Card, Row, Col } from "antd";
import AuthService from "../../services/AuthService";
import "./Login.css";
import Cookies from "universal-cookie";
import { TOKEN, USER } from "../../utils/Constant";
const cookies = new Cookies();

const FormItem = Form.Item;

class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        // this.props.history.push("/dashboard");
        AuthService.login(values)
          .then(response => {
            cookies.set(TOKEN, response.headers["authorization"]);
            console.log("response: ", response);
            AuthService.loginToOkta(values)
              .then(response => {
                cookies.set(USER, response.data._embedded.user);
                this.props.history.push("/dashboard");
                // cookies.set(TOKEN, response.headers["authorization"]);
                console.log("response: ", response);
                // cookies.set(TOKEN, response.data.sessionToken);
              })
              .catch(err => {
                console.log("err: ", err.response);
              });
          })
          .catch(err => {
            console.log("err: ", err.response);
          });
      }
    });
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
                  >
                    Log in
                  </Button>
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
