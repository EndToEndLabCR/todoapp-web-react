import { Layout, Badge, Avatar, Dropdown } from "antd";
import { UserOutlined, DownOutlined, BellOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Header } = Layout;

const userMenuItems: MenuProps["items"] = [
  {
    key: "profile",
    label: "My Profile",
    icon: <UserOutlined />,
  },
  {
    key: "settings",
    label: "Settings",
  },
  {
    type: "divider",
  },
  {
    key: "logout",
    label: "Logout",
    danger: true,
  },
];

export function AppHeader() {
  return (
    <Header style={{ background: "#001529", color: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <div style={{ fontSize: "20px", fontWeight: 600 }}>Hello! Genesis</div>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Badge count={3} size="small">
            <BellOutlined style={{ color: "white", fontSize: "18px" }} />
          </Badge>
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <div style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
              <Avatar size="large" icon={<UserOutlined />} />
              <DownOutlined style={{ color: "white" }} />
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
}
