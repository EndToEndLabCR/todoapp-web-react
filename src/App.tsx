import { Layout, theme } from "antd";
import { useLocation } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import { AppFooter } from "./shared/components/layout/footer/Footer";
import { AppHeader } from "./shared/components/layout/header/components";
import { SiderMenu } from "./shared/components/layout/sider-menu/SiderMenu";

const { Content } = Layout;

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {!isLogin && !isRegister && <SiderMenu />}   
      <Layout>
        {!isLogin && !isRegister && <AppHeader />} 

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <AppRoutes />
          </div>
        </Content>

        {!isLogin && !isRegister && <AppFooter />}
      </Layout>
    </Layout>
  );
}

export default App;
