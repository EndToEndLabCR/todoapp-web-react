import "./App.css";
import { useLocation } from "react-router-dom";
import { Layout, theme } from "antd";
import { AppFooter } from "./shared/components/layout/footer/Footer";
import { SiderMenu } from "./shared/components/layout/sider-menu/SiderMenu";
import { AppHeader } from "./shared/components/layout/header/components";
import { AppRoutes } from "./routes/AppRoutes";

const { Content } = Layout;

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {!isLogin && <SiderMenu />}   
      <Layout>
        {!isLogin && <AppHeader />} 

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

        {!isLogin && <AppFooter />}
      </Layout>
    </Layout>
  );
}

export default App;
