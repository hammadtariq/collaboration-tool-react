import React, { Component } from "react";
import { Form, Icon, Input, Button, Card, Row, Col } from "antd";
import AuthService from '../../services/AuthService'
import "./Login.css";

const FormItem = Form.Item;

class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
      this.props.form.validateFields((err, values) => {
          if (!err) {
              console.log("Received values of form: ", values);
              AuthService.login(values)
                  .then((response) => {
                      this.props.history.push('/dashboard')
                  })
                  .catch((err) => {
                      console.log("err: ", err.response);
                  });
          }
      });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Row className="app" type="flex" justify="center" align="middle">
            <Col>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card title="Login" bordered={false} style={{ width: 300 }}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator("username", {
                                    rules: [{ required: true, message: "Please input your username!" }]
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                                        placeholder="Username"
                                    />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator("password", {
                                    rules: [{ required: true, message: "Please input your Password!" }]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
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
