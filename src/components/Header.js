import React from "react";
import { Layout, Menu, Icon } from "antd";
import Search from "./Search";
import UserDropDown from "./UserDropDown";
const { Header } = Layout;

const styles = {
  Search: {
    width: "200px",
    height: "30px",
    margin: "15px 0"
  },
  NavBar: {
    lineHeight: "64px",
    background: "inherit",
    float: "right"
  }
};

const HeaderComp = ({ style, user, apps, history }) => {
  const handleNavClick = e => {
    if (e.key === "home") {
      history.push(`/dashboard/apps`);
    }
  };
  return (
    <Header style={style}>
      <div>
        <div className="logo-main">
          <img src={require("../assets/logo.svg")} />
          <div className="logo-bottom-curve" />
        </div>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        style={styles.NavBar}
        onClick={handleNavClick}
      >
        <Menu.Item key="search">
          <Search style={styles.Search} data={apps} placeholder="Launch App" />
        </Menu.Item>
        <Menu.Item key="home">
          <Icon type="home" />
          Home
        </Menu.Item>
        <Menu.Item key="notification">
          <Icon type="bell" />
          <Icon
            type="caret-down"
            style={{ fontSize: 10, margin: "0 0 0 -5px", padding: 0 }}
          />
        </Menu.Item>
        <Menu.Item key="settings">
          <UserDropDown user={user} history={history} />
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComp;
