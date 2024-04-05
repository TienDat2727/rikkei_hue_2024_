import React from "react";
import { Upload } from "antd";
import "./BaseUpload.styled";

interface CustomUpload {
  fileList?: [];
  handleChange?: () => void;
  extendClassName?: [];
}

const CustomUpload: React.FC<CustomUpload> = () => {
  const uploadButton = (
    <div>
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  const customRequest = (option: any) => {
    const { onSuccess, onError } = option;
    try {
      setTimeout(() => {
        onSuccess();
        // console.log('File', file)
      }, 200);
    //   clearTimeout();
    } catch (err) {
      onError();
      // console.log(err)
    }
  };

  return (
    <div className="acb-upload-container">
      <Upload
        className=""
        customRequest={customRequest}
        listType="picture-card"
        // onChange={handleChange}
        // fileList={fileList}
      >
        {uploadButton}
      </Upload>
    </div>
  );
};

export default CustomUpload;
