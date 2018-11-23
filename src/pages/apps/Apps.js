import React, { Component } from "react";
import { Row, Col, Card, Icon, Carousel, Modal, Avatar, Divider } from "antd";
import "./Apps.css";
import AppService from "../../services/AppService";
const { Meta } = Card;

class Apps extends Component {
  state = {
    visible: false,
    selectedApp: null
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

  showHelpModal(e, id) {
    console.log("e: ", e);
    e.stopPropagation();
    this.setState({
      visible: true,
      selectedApp: id
    });
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
      selectedApp: null
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      selectedApp: null
    });
  };

  render() {
    let { apps } = this.props;
    const modalTitle =
      this.state.selectedApp !== null
        ? apps[this.state.selectedApp].label
        : "No information found";
    const modalContent =
      this.state.selectedApp !== null ? apps[this.state.selectedApp].help : "";
    return (
      <div>
        <div style={{ background: "#ECECEC", padding: "10px" }}>
          <Carousel autoplay>
            <div>
              <img
                className="slider-img"
                src={require("../../assets/img1.png")}
              />
            </div>
            <div>
              <img
                className="slider-img"
                src={require("../../assets/img2.png")}
              />
            </div>
            <div>
              <img
                className="slider-img"
                src={require("../../assets/img3.png")}
              />
            </div>
            <div>
              <img
                className="slider-img"
                src={require("../../assets/img4.png")}
              />
            </div>
          </Carousel>
        </div>
        <Divider orientation="left">Apps</Divider>
        <div style={{ background: "#ECECEC", padding: "40px" }}>
          <Row gutter={24}>
            {apps
              ? apps.map((app, i) => {
                  return (
                    <Col key={i} span={4}>
                      <Card
                        title={app.label}
                        extra={
                          <Icon
                            type="info-circle-o"
                            onClick={e => this.showHelpModal(e, i)}
                          />
                        }
                        hoverable={true}
                        onClick={() =>
                          window.open(app._links.appLinks[0].href, "_blank")
                        }
                        bordered={false}
                      >
                        <img src={app._links.logo[0].href} style={{}} />
                      </Card>
                    </Col>
                  );
                })
              : null}
          </Row>
        </div>
        <Modal
          title={modalTitle}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{modalContent}</p>
        </Modal>
      </div>
    );
  }
}

export default Apps;
