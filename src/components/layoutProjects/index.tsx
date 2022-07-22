import { FileOutlined, HomeOutlined} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterLayout from "../footer/footer";
import Cards from "./cards";

const { Header, Content, Sider } = Layout;

const LayoutProjects: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  let navigate = useNavigate();

  return (
    <Layout>
      <Sider
        collapsed={true}
        style={{height: '100vh'}}
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
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div className="site-layout-background">
            <Cards />
          </div>
        </Content>
        <FooterLayout />
      </Layout>
    </Layout>
  );
};

export default LayoutProjects;
