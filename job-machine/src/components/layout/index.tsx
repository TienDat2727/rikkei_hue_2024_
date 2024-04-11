import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Flex, Card } from "antd";
import SideBar from "./SideBar";
import { CustomHeader } from "./CustomHeader";
// import MainContent from "./MainContent";
// import SideContent from "./SideContent";
import logo from "../../assets/images/logo.png";
import PostContainer from "pages/postManagement";
import FilterPost from "pages/postManagement/CardPost";
import { BaseButton } from "components/common/BaseButton/BaseButton";

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
              padding: 24,
              minHeight: 280,
              maxWidth: "80%",
              position: "relative",
            }}
          >
            <Flex>
              <PostContainer />
            </Flex>
          </Content>
          <Flex vertical style={{ position: "fixed", right: "0" }}>
            <Card
              style={{ marginTop: "25px", marginRight: "10px" }}
              size="small"
            >
              <Flex gap={10} style={{ justifyContent: "center" }}>
                <Flex>
                  <BaseButton size="large">Xóa</BaseButton>
                </Flex>
                <Flex>
                  <BaseButton size="large">Duyệt</BaseButton>
                </Flex>
              </Flex>
            </Card>
            <FilterPost />
          </Flex>
        </Flex>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
