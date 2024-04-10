import { TreeTable } from "components/table/TreeTable";
import { Card } from "antd";
import { Flex, Typography } from "antd";
import { BaseButton } from "components/common/BaseButton/BaseButton";
import { BaseSelect, Option } from "components/common/BaseSelect";
import { ContainerPost } from "./PostManagement.styled";

const Post = () => {
  return (
    <ContainerPost>
      <Flex vertical gap="30px">
        <Flex vertical align="flex-start">
          <Typography.Title level={2}>Post Management </Typography.Title>
          <Typography.Text type="secondary" strong>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </Typography.Text>
        </Flex>

        <Flex gap={10}>
          <BaseSelect
            defaultValue="Move to trash"
            allowClear
            style={{ height: "40px", width: "130px" }}
          >
            <Option value="lucy">Move to trash</Option>
            <Option value="view">View</Option>
            <Option value="accept">Accept</Option>
            <Option value="reject">Reject</Option>
          </BaseSelect>
          <BaseButton size="large">Apply</BaseButton>
          <BaseSelect
            defaultValue="All dates"
            allowClear
            style={{ height: "40px", width: "110px" }}
          >
            <Option value="all">All dates</Option>
            <Option value="week">Last week</Option>
            <Option value="month">Last month</Option>
          </BaseSelect>
          <BaseButton size="large">Filter</BaseButton>
        </Flex>
      </Flex>
      <Card id="tree-table" style={{marginTop: '25px'}}>
        <TreeTable />
      </Card>
    </ContainerPost>
  );
};

export default Post;
