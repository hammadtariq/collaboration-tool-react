import React, { Component } from "react";
import { Row, Col, Card, Icon, Carousel, Modal, Avatar, Divider } from "antd";
import "./Apps.css";
import AppService from "../../services/AppService";
const { Meta } = Card;

class Apps extends Component {
  state = {
    visible: false
  };

  componentDidMount() {
    // let apps = AppService.allApps();
    // this.setState({ apps });
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
      visible: true
    });
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    let { apps } = this.props;
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
        <Divider orientation="left">Apps</Divider>
        <div style={{ background: "#ECECEC", padding: "40px" }}>
          <Row gutter={24}>
            {apps.map((app, i) => {
              return (
                <Col key={i} span={4}>
                  <Card
                    title={app.label}
                    extra={
                      <Icon
                        type="info-circle-o"
                        onClick={this.showHelpModal.bind(this)}
                      />
                    }
                    hoverable={true}
                    onClick={() =>
                      window.open(app._links.appLinks[0].href, "_blank")
                    }
                    bordered={false}
                  >
                    {/* <Meta
                      avatar={
                        <Avatar
                          shape="square"
                          size="default"
                          src={app._links.logo[0].href}
                        />
                      }
                    /> */}
                    <img src={app._links.logo[0].href} style={{}} />
                  </Card>
                </Col>
              );
            })}
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
