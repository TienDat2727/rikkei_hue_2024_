import React from 'react';
import { DatePicker, TimePicker, Tooltip } from 'antd';


function CustomDatePicker() {
  return (
    <>
      <Tooltip title="dd/mm/YY HH:mm" >
      <DatePicker
        format="YYYY-MM-DD"
      />
      <TimePicker
        format="HH:mm:ss"
      />
      </Tooltip>
    </>
  );
}

export default CustomDatePicker;
