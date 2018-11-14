import React, { Component } from "react";
import { Layout, Menu, Icon, Input, Button } from "antd";
import { Route } from "react-router-dom";
import Home from "../home/Home";
import Apps from "../apps/Apps";
import Settings from "../settings/Settings";
import "./Dashboard.css";

const { Header, Content, Footer, Sider } = Layout;

const styles = {
  Header: {
    background: "#2785B8",
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
    height: "auto",
    minHeight: "calc(100vh - 10vh)",
    overflow: "initial",
    padding: "20px 0",
    margin: "0px"
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
        <Header style={styles.Header} className="header">
          <div className="logo-main">
            <img src={require("../../assets/logo.svg")} />
          </div>
          <Input.Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            className="search-box"
          />

          <div className="avatar-box">
            {/* <div className="logo-avatar">
              <img src={require("../../assets/avatar.png")} />
            </div> */}
            <Icon type="user" />
            <span className="nav-text">Username</span>
          </div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              onClick={this.handleClick.bind(this)}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="home">
                <Icon type="home" />
                <span className="nav-text">Home</span>
              </Menu.Item>
              <Menu.Item key="apps">
                <Icon type="appstore" />
                <span className="nav-text">Apps</span>
              </Menu.Item>
              <Menu.Item key="settings">
                <Icon type="setting" />
                <span className="nav-text">Settings</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content style={styles.Content}>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <Route exact path={`/dashboard/`} component={Home} />
                <Route exact path={`/dashboard/apps`} component={Apps} />
                <Route
                  exact
                  path={`/dashboard/settings`}
                  component={Settings}
                />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Collaboration Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
