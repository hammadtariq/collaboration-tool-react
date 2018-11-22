import React, { Component } from "react";
import { Layout, Menu, Icon, Input } from "antd";
// import { Route, Link } from "react-router-dom";
// import Home from "../home/Home";
// import Settings from "../settings/Settings";
import Cookies from "universal-cookie";
import { USER } from "../../utils/Constant";
import AppService from "../../services/AppService";

import Apps from "../apps/Apps";
import Search from "../../components/Search";
import "./Dashboard.css";

const { Header, Content, Footer } = Layout;
const cookies = new Cookies();

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
  },
  Search: { width: "200px", height: "30px", margin: "15px 0" }
};

class Dashboard extends Component {
  state = {
    user: {},
    apps: []
  };

  componentWillMount() {
    let user = cookies.get(USER);
    if (user) {
      this.setState({ user });
    }
    const apps = AppService.allApps();
    this.setState({ apps });
  }

  handleSideNavClick = e => {
    console.log("click ", e);
    const url = e.key !== "home" ? "/" + e.key : "";
    this.props.history.push(`/dashboard${url}`);
  };

  handleNavClick = e => {
    console.log("click ", e);
    if (e.key !== "search") {
      const url = e.key !== "home" ? "/" + e.key : "";
      this.props.history.push(`/dashboard${url}`);
    }
  };

  render() {
    const { user, apps } = this.state;

    return (
      <Layout>
        <Header style={styles.Header}>
          <div>
            <div className="logo-main">
              <img src={require("../../assets/logo.svg")} />
              <div className="logo-bottom-curve" />
            </div>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["home"]}
            style={styles.NavBar}
            onClick={this.handleNavClick.bind(this)}
          >
            <Menu.Item key="search">
              {/* <Input.Search
                placeholder="Launch App"
                onSearch={value => console.log(value)}
                className="search-box"
              /> */}
              <Search
                style={styles.Search}
                data={apps}
                placeholder="Launch App"
              />
            </Menu.Item>
            <Menu.Item key="home">
              <Icon type="home" />
              Home
            </Menu.Item>
            <Menu.Item key="settings">
              <Icon type="user" />
              {user === undefined
                ? `${user.profile.firstName}  ${user.profile.lastName}`
                : ""}
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          {/* <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              onClick={this.handleSideNavClick.bind(this)}
              defaultSelectedKeys={["home"]}
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
                <Apps apps={this.state.apps} />
                {/* <Route
                  exact
                  path={`/dashboard/`}
                  component={Apps}
                /> */}
                {/* <Route
                  exact
                  path={`/dashboard/apps`}
                  component={Apps}
                />
                <Route
                  exact
                  path={`/dashboard/settings`}
                  component={Settings}
                /> */}
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
