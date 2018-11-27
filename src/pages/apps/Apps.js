import React, { Component } from "react";
import { Row, Col, Card, Icon, Carousel, Modal, Divider } from "antd";
import "./Apps.css";
import AppService from "../../services/AppService";
import { Tabs } from "antd";
import AppItems from "../../components/AppItems";
const TabPane = Tabs.TabPane;

class Apps extends Component {
  constructor(props) {
    super(props);
    const panes = [{ title: "Work", content: "", key: "1" }];
    this.state = {
      visible: false,
      selectedApp: null,
      activeKey: panes[0].key,
      panes
    };
    this.newTabIndex = 0;
  }

  componentDidMount() {}

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: "New Tab", content: "New Tab Pane", key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  };

  showHelpModal(e, id) {
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
    let modalTitle = "",
      modalContent = "",
      modalImg = "";
    if (this.state.selectedApp !== null) {
      const app = apps[this.state.selectedApp];
      modalTitle = app.label;
      modalContent = app.help;
      modalImg = app._links.logo[0].href;
    }

    return (
      <div>
        <div style={{ background: "#ECECEC", padding: "10px" }}>
          <Carousel autoplay>
            <div className="slider-box">
              <img
                className="slider-img"
                src={require("../../assets/img1.png")}
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium sequi provident fuga dolorem deserunt, explicabo
                reprehenderit consectetur repudiandae consequatur, doloribus
                alias cum vitae voluptatibus ut quis temporibus recusandae error
                tenetur!
              </p>
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
        <div style={{ background: "#ECECEC", padding: "40px" }}>
          <div className="card-container">
            <Tabs
              hideAdd
              onChange={this.onChange}
              activeKey={this.state.activeKey}
              type="editable-card"
              onEdit={this.onEdit}
            >
              {this.state.panes.map(pane => (
                <TabPane tab={pane.title} key={pane.key}>
                  {
                    <AppItems
                      apps={apps}
                      showHelpModal={this.showHelpModal.bind(this)}
                    />
                  }
                </TabPane>
              ))}
            </Tabs>
          </div>
        </div>
        <Modal
          title={`Details of ${modalTitle}`}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          style={{ padding: "24px 0 24px 0" }}
        >
          <div>
            <Row style={{ background: "#ECECEC", padding: 20 }}>
              <img src={modalImg} />
            </Row>
            <Row
              style={{ padding: 20 }}
              type="flex"
              justify="center"
              align="middle"
            >
              <Col span={12}>{modalContent}</Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <img src={modalImg} />
              </Col>
            </Row>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Apps;
