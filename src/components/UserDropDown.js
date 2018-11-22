import React from "react";
import { Menu, Dropdown, Icon } from "antd";

const UserDropDown = ({ user, history }) => {
  const handleNavClick = e => {
    console.log("click ", e);
    if (e.key === "signout") {
      history.push(`/login`);
      return;
    }
    history.push(`/dashboard/settings`);
  };

  const menu = (
    <Menu onClick={handleNavClick}>
      <Menu.Item key="settings">
        <a href="">Settings</a>
      </Menu.Item>
      <Menu.Item key="signout">
        <a href="">Signout</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a href="#">
        <Icon type="user" />
        {user === undefined
          ? `${user.profile.firstName}  ${user.profile.lastName}`
          : "Hammad Tariq"}
      </a>
    </Dropdown>
  );
};

export default UserDropDown;
