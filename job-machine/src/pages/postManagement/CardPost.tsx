import { Card, Flex, TimePicker, Typography } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { BaseInput } from "components/common/BaseInput";
import { BaseSelect, Option } from "components/common/BaseSelect";
import { BaseButton } from "components/common/BaseButton/BaseButton";

const { RangePicker } = DatePicker;

const FilterPost = () => {
  const dateFormat = "YYYY-MM-DD";
  return (
    <Card
      id="tree-table"
      style={{ marginTop: "25px", marginRight: "10px" }}
      size="small"
    >
      <Flex vertical gap="30px">
        <Flex vertical align="flex-start" gap={10}>
          <Typography.Title level={3}>Tìm kiếm</Typography.Title>
          <BaseInput placeholder="Nhập tên/email/mã người dùng/trang/ ..." />
          <RangePicker
            defaultValue={[
              dayjs("2019-09-03", dateFormat),
              dayjs("2019-11-22", dateFormat),
            ]}
          />
          <Typography.Title level={5}>Loại nội dung</Typography.Title>
          <BaseSelect
            defaultValue="Tất cả"
            allowClear
            style={{ height: "40px", width: "110px" }}
          >
            <Option value="all">Tuyển dụng</Option>
            <Option value="week">Ứng tuyển</Option>
          </BaseSelect>
          <Flex gap={10} justify="center">
            <BaseButton size="large">Đặt lại</BaseButton>
            <BaseButton size="large">Tìm kiếm</BaseButton>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default FilterPost;
