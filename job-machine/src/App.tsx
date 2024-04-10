import * as React from "react";
// import {useState}  from 'react';
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import AuthPage from "pages/auth/AuthPage";
import CustomForm from "components/common/BaseForm";
import { ConfigProvider } from "antd";
import CustomLayout from "./components/layout";


const App = () => {
  return (
    // <ThemeProvider theme={}>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Montserrat",
        },
      }}
    >
      <HelmetProvider>
        {/* <AuthPage /> */}
          <CustomLayout />
      </HelmetProvider>
    </ConfigProvider>
    // </ThemeProvider>
  );
};

export default App;
