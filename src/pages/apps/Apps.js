import React, { Component } from "react";
import { Row, Col, Card, Carousel, Modal, Avatar } from "antd";
import "./Apps.css";
import AppService from "../../services/AppService";
const { Meta } = Card;

class Apps extends Component {
  state = {
      apps: [],
      visible: false
  };

    componentDidMount() {
        let apps = AppService.allApps();
        this.setState({ apps });
        // AppService.allApps()
        //     .then((response) => {
        //        console.log("response: ", response);
        //     })
        //     .catch((err) => {
        //         console.log("err: ", err.response);
        //     });
    }

    showHelpModal(e) {
        console.log("e: ", e);
        e.stopPropagation();
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        let { apps } = this.state;

        return (
            <div>
                <div style={{ background: "#ECECEC", padding: "10px" }}>
                    <Carousel autoplay>
                        <div>
                            <img src={require("../../assets/OktaHelpCenter.png")} />
                        </div>
                        <div>
                            <img src={require("../../assets/Okta-SSO-Settings.png")} />
                        </div>
                        <div>
                            <img src={require("../../assets/OktaHelpCenter_2_0.png")} />
                        </div>
                    </Carousel>
                </div>
                <div style={{ background: "#ECECEC", padding: "10px" }}>
                    <Row gutter={16}>
                        {
                            apps.map((app, i)=> {
                                console.log("logo: ", app._links.logo);
                                return (
                                    <Col key={i} span={8}>
                                        <Card title={app.label}
                                              extra={<span onClick={this.showHelpModal.bind(this)}>Help</span>}
                                              hoverable={true}
                                              onClick={() => window.open(app._links.appLinks[0].href, "_blank")}
                                              bordered={false}>
                                            <Meta
                                                avatar={<Avatar shape="square" size={100} src={app._links.logo[0].href} />}
                                                title={app.label}
                                            />
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
                <Modal
                    title="Help"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
  }
}

export default Apps;
