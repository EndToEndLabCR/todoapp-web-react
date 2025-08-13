import { Layout, Badge, Avatar, Dropdown } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Header } = Layout;

const userMenuItems: MenuProps["items"] = [
  {
    key: "profile",
    label: "Mi Perfil",
    icon: <UserOutlined />,
  },
  {
    key: "settings",
    label: "Configuración",
  },
  {
    type: "divider",
  },
  {
    key: "logout",
    label: "Cerrar Sesión",
    danger: true,
  },
];

export function AppHeader() {
  return (
    <Header style={{ background: "#001529", color: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <div>¡Hola! Génesis</div>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <div style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
              <Badge count={3} size="small">
                <Avatar size="large" icon={<UserOutlined />} />
              </Badge>
              <DownOutlined style={{ color: "white" }} />
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
}
