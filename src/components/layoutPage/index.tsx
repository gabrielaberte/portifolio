import { FileOutlined, HomeOutlined} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import About from "./about";
import FooterLayout from "../footer/footer";
import TimeLine from "./timeline";

const { Header, Content, Sider } = Layout;

const LayoutPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  let navigate = useNavigate();

  var largura: number | boolean = window.screen.width;
  if (largura < 400) {
    largura = false
  }


  return (
    <Layout>
      <Sider
        collapsed={true}
        style={{ height: '100vh' }}
        collapsedWidth={largura ? 80 : 40} 
      >
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item
            style={{ marginTop: "60px" }}
            onClick={() => {
              navigate("/");
            }}
            title={"Home"}
          >
            <HomeOutlined /> 
            </Menu.Item>
            <Menu.Item
            style={{ marginTop: "10px" }}
            onClick={() => {
              navigate("/projects");
            }}
            title={"Projects"}
          >
            <FileOutlined />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, color: 'white' }} >Gabriela Berte's Portfolio</Header>
        <Content style={{ margin: "0 16px" }}>
          <div className="site-layout-background" style={{ overflow: 'scroll', height: '90vh'}}>
            <About />
            <TimeLine />
          </div>
        </Content>
        <FooterLayout />
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
