import React from "react";
import {
  HomeOutlined,
  CalendarOutlined,
  ScheduleOutlined,
  StarOutlined,
  CheckCircleOutlined,
  Loading3QuartersOutlined,
  FileZipFilled,
} from "@ant-design/icons";
import { Layout, Menu, Divider, Typography } from "antd";

const { Sider } = Layout;
const { Title } = Typography;

const icons = [
  HomeOutlined,
  CalendarOutlined,
  ScheduleOutlined,
  StarOutlined,
  CheckCircleOutlined,
  Loading3QuartersOutlined,
  FileZipFilled,
];

const labels = [
  "Home",
  "Today",
  "Week",
  "Importants",
  "Completed",
  "Pending",
  "Archived",
];

const items = icons.map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: labels[index],
}));

export function SiderMenu() {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => console.log(broken)}
      onCollapse={(collapsed, type) => console.log(collapsed, type)}
      style={{ padding: "16px 0" }}
    >
      <div style={{ padding: "0 24px", marginBottom: "16px" }}>
        <Title level={4} style={{ color: "#fff", margin: 0 }}>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <CheckCircleOutlined style={{ fontSize: "20px", color: "#fff" }} />
            To-Do
          </span>
        </Title>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={items} />
      <Divider style={{ margin: "16px 0", borderTop: "1px solid #fff" }} />
    </Sider>
  );
}

