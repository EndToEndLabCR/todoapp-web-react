import React, { use, useState } from "react";
import { Layout, Menu } from "antd";
import { groupedMenuItems } from "./menuData";
import { useNavigate } from "react-router-dom";
import "./SiderMenu.scss";

const { Sider } = Layout;

export function SiderMenu() {
  const [selectedKey, setSelectedKey] = useState("todo-1");
  const navigate = useNavigate();


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
        onClick={({ key }) => {setSelectedKey(key); navigate(key);}}
        items={groupedMenuItems()}
      />
    </Sider>
  );
}
