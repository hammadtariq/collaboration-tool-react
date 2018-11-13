import React, { Component } from "react";
import { Layout, Menu, Icon, Input } from "antd";
import { Route } from "react-router-dom";
import Home from "../home/Home";
import Apps from "../apps/Apps";
import Settings from "../settings/Settings";
import "./Dashboard.css";

const { Header, Content, Footer, Sider } = Layout;

const styles = {
  Header: {
    background: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "10vh"
  },
  Sider: {
    overflow: "auto",
    height: "100vh",
    position: "fixed",
    left: 0
  },
  Content: {
    margin: "24px 16px 0",
    height: "calc(100vh - 10vh)",
    overflow: "initial"
  }
};
class Dashboard extends Component {
  state = {};

  handleClick = e => {
    console.log("click ", e);
    const url = e.key !== "home" ? "/" + e.key : "";
    this.props.history.push(`/dashboard${url}`);
  };

  render() {
    return (
      <Layout>
        <Sider style={styles.Sider}>
          <div className="avatar-box">
            <div className="logo-avatar">
              <img src={require("../../assets/avatar.png")} />
            </div>
            <p />
          </div>

          <Menu
            onClick={this.handleClick}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["home"]}
          >
            <Menu.Item key="home">
              <Icon type="user" />
              <span className="nav-text">Home</span>
            </Menu.Item>
            <Menu.Item key="apps">
              <Icon type="video-camera" />
              <span className="nav-text">Apps</span>
            </Menu.Item>
            <Menu.Item key="settings">
              <Icon type="upload" />
              <span className="nav-text">Settings</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={styles.Header}>
            <div className="logo-main">
              <img src={require("../../assets/logo.svg")} />
            </div>
            <Input.Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              className="search-box"
            />
          </Header>
          {/* </Row> */}
          <Content style={styles.Content}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Route exact path={`/dashboard/`} component={Home} />
              <Route exact path={`/dashboard/apps`} component={Apps} />
              <Route exact path={`/dashboard/settings`} component={Settings} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
