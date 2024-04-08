import * as React from 'react';
// import {useState}  from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import AuthPage from 'pages/auth/AuthPage';
import CustomLayout from 'Layout';
import CustomForm from 'components/common/BaseForm';
import { ConfigProvider } from 'antd';

const Container = styled.div`
  min-height: 100vh;
`;

const App = () => {
  return (
    // <ThemeProvider theme={}>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Montserrat',
        },
      }}
    >
      <HelmetProvider>
        <AuthPage />
        <Container>
          <CustomLayout />
          <CustomForm values='hello' err='erroxx' />
        </Container>
      </HelmetProvider>
    </ConfigProvider>
    // </ThemeProvider>
  );
};

export default App;
