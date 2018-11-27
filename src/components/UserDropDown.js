import React from "react";
import { Menu, Dropdown, Icon, Divider } from "antd";
import { TOKEN } from "../utils/Constant";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const UserDropDown = ({ user, history, logout }) => {
  const handleNavClick = e => {
    if (e.key === "signout") {
      let user = cookies.remove(TOKEN);
      console.log("logout: ", user);
      history.push(`/login`);
      return;
    }
    history.push(`/dashboard/settings`);
  };

  const menu = (
    <Menu onClick={handleNavClick} style={{ width: 100, textAlign: "center" }}>
      <Menu.Item key="settings">
        <a href="">Settings</a>
      </Menu.Item>
      <Menu.Item key="signout">
        <a href="">Sign out</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a href="#">
        <Icon type="user" style={{ fontSize: 15 }} />
        {user !== undefined ? `${user.firstName}` : ""}
        <Icon type="caret-down" style={{ fontSize: 10, marginLeft: 5 }} />
      </a>
    </Dropdown>
  );
};

export default UserDropDown;
