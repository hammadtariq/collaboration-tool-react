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
    background: "#2785B8"
  },
  NavBar: {
    lineHeight: "64px",
    background: "inherit",
    float: "right"
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
    padding: "25px 25px",
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
        <Header style={styles.Header}>
          <div>
            <div className="logo-main">
              <img src={require("../../assets/logo.svg")} />
            </div>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={styles.NavBar}
          >
            <Menu.Item key="1">
              <Input.Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                className="search-box"
              />
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="home" />
              Home
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="user" />
              Username
            </Menu.Item>
          </Menu>
          <div style={{}}>
            <div className="avatar-box" />
          </div>
        </Header>
        <Layout>
          {/* <Sider width={200} style={{ background: "#fff" }}>
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
          </Sider> */}
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content style={styles.Content}>
              <div
                style={{
                  padding: 24,
                  background: "#fff",
                  minHeight: "inherit"
                }}
              >
                <Route exact path={`/dashboard/`} component={Apps} />
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
