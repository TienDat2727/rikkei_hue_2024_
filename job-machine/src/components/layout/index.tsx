import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Flex } from "antd";
import SideBar from "./SideBar";
import { CustomHeader } from "./CustomHeader";
// import MainContent from "./MainContent";
// import SideContent from "./SideContent";
import logo from "../../assets/images/logo.png";
import Post from "pages/postManagement";
import CardPost from "pages/postManagement/CardPost";

const { Header, Sider, Content } = Layout;

const CustomLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedMenuItem, setSelectedMenuItem] = useState("dashboard");

  // const handleMenuClick = (menuItem) => {
  //   setSelectedMenuItem(menuItem.key);
  // };

  return (
    <Layout>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <Flex align="center" justify="center">
          <div className="logo" style={{ height: 60 }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "200px", height: "65px" }}
            />
          </div>
        </Flex>
        <SideBar />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <CustomHeader />
        </Header>
        <Flex gap={6}>
        <Content
          style={{
            margin: "24px 20px",
            padding: 24,
            minHeight: 280,
            maxWidth: "80%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Flex>
            <Post />
          </Flex>
        </Content>
        <Flex>
          <CardPost />
        </Flex>
        </Flex>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
