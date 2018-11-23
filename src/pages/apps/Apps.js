import React, { Component } from "react";
import { Row, Col, Card, Icon, Carousel, Modal, Divider } from "antd";
import "./Apps.css";
import AppService from "../../services/AppService";

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
          <Row gutter={24} type="flex" justify="start">
            {apps
              ? apps.map((app, i) => {
                  return (
                    <Col
                      key={i}
                      span={6}
                      style={{ borderRight: "1px solid gainsboro" }}
                    >
                      <Card
                        hoverable={true}
                        onClick={() =>
                          window.open(app._links.appLinks[0].href, "_blank")
                        }
                        bordered={true}
                      >
                        <div style={{ textAlign: "center" }}>
                          <img src={app._links.logo[0].href} style={{}} />
                        </div>
                      </Card>
                      <div className="app-info">
                        <h3 style={{}}>{app.label}</h3>
                        <div className="module last-line">
                          <p>{app.help}</p>
                        </div>
                        <a onClick={e => this.showHelpModal(e, i)}>view more</a>
                      </div>
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
