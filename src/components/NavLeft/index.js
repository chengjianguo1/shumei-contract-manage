import React from "react";
import { Menu } from "antd";
import { NavLink } from 'react-router-dom'
const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
  render() {
    return (
      <Menu style={{ width: 227 }} mode="inline" defaultOpenKeys={["sub1"]}>
        <SubMenu key="sub1" title="合同管理">
          <Menu.Item key="1">
            <NavLink to="/home">合同审批</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/home1">合同类目</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/home2">合同类目1</NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/home3">合同类目2</NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
