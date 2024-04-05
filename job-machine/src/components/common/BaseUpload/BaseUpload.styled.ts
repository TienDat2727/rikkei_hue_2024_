import { Upload } from "antd"
import styled from "styled-components"

export const BaseUpload = styled(Upload)`
.acb-upload-container {
    .ant-upload-list-picture-card-container {
      float: left;
      width: 125px;
      height: 100px;
      margin: 0 8px 8px 0;
      margin-right: 20px;
    }
    .ant-upload-list-picture-card .ant-upload-list-item {
      float: left;
      width: 125px;
      height: 100px;
      margin: 0 8px 8px 0;
    }
    .ant-upload.ant-upload-select-picture-card {
      width: 125px;
      height: 100px;
      background: rgba(196, 196, 196, 0.4);
      border-radius: 20px;
    }
    .ant-upload-text {
      font-size: 20px;
      color: #1F419B;
    }
  }
  `