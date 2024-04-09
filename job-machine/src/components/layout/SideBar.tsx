import React from "react";
import {
  UserOutlined,
  MessageOutlined,
  ProfileOutlined,
  CarryOutOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import { Flex, Menu } from "antd";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <>
    <Flex align="center" justify="center">
        <div className="logo" style={{height: 60}}>
            Logo
        </div>
    </Flex>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Dashboard",
          },
          {
            key: "2",
            icon: <FlagOutlined />,
            label: "Report",
          },
          {
            key: "3",
            icon: <MessageOutlined />,
            label: "Message",
          },
          {
            key: "4",
            icon: <CarryOutOutlined />,
            label: "Category",
          },
          {
            key: "5",
            icon: <ProfileOutlined />,
            label: "Post",
          },
          {
            key: "6",
            icon: <UserOutlined />,
            label: "Profile",
          }
        ]}
      />
    </>
  );
};

export default SideBar;
