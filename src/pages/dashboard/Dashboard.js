import React, { Component } from "react";
import { Layout, Menu, Icon, Input } from "antd";
import { Route, Link } from "react-router-dom";
import Home from "../home/Home";
import Settings from "../settings/Settings";
import Cookies from "universal-cookie";
import { USER } from "../../utils/Constant";
import AppService from "../../services/AppService";

import Apps from "../apps/Apps";
import "./Dashboard.css";
import HeaderComp from "../../components/Header";

const { Content, Footer } = Layout;
const cookies = new Cookies();

const styles = {
  Header: {
    background: "#2785B8"
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

  AppsComp = props => {
    return <Apps apps={this.state.apps} {...props} />;
  };

  render() {
    const { user, apps } = this.state;

    return (
      <Layout>
        <HeaderComp
          style={styles.Header}
          user={user}
          apps={apps}
          history={this.props.history}
        />
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
                <Route exact path={`/dashboard/`} component={this.AppsComp} />
                <Route
                  exact
                  path={`/dashboard/apps`}
                  component={this.AppsComp}
                />
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
