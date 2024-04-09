import React from "react";
import { Avatar, Flex, Typography } from "antd";
import Search from "antd/es/transfer/search";
import {MessageOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";

type Props = {};

export const CustomHeader = (props: Props) => {
  return (
    <Flex align="center" justify="space-between">
      <Flex align="flex-end" gap='3rem'>
        <Search placeholder="Search something..." />
      </Flex>
      <Flex align="center" gap={20}>
        <MessageOutlined className="header-icon"/>
        <NotificationOutlined className="header-icon"/>
        <Avatar icon={<UserOutlined />}/>
      </Flex>
    </Flex>
  );
};
