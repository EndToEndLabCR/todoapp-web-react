import { Layout } from "antd";

const { Footer } = Layout;

export function AppFooter() {
  return <Footer style={{ textAlign: "center" }}>TODO App ©{new Date().getFullYear()} Created by EndToEndLabCR</Footer>;
}
