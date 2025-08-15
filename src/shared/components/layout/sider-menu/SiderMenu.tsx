import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { groupedMenuItems } from "./menuData";
import "./SiderMenu.css";

const { Sider } = Layout;

export function SiderMenu() {
  const [selectedKey, setSelectedKey] = useState("todo-1");

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => console.log(broken)}
      onCollapse={(collapsed, type) => console.log(collapsed, type)}
      className="sider-container"
    >
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        onClick={({ key }) => setSelectedKey(key)}
        items={groupedMenuItems()}
      />
    </Sider>
  );
}
