import * as React from 'react';
// import {useState}  from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import AuthPage from 'pages/auth/AuthPage';
import CustomLayout from 'Layout';
import CustomForm from 'components/common/BaseForm';

const Container = styled.div`
  min-height: 100vh;
`;

const App = () => {
  return (
    // <ThemeProvider theme={}>
    <HelmetProvider>
        <CustomLayout />
        <CustomForm values="hello" err="erroxx"/>
      <AuthPage />
      <Container>
        <CustomLayout />
        <CustomForm values='hello' err='erroxx' />
      </Container>
    </HelmetProvider>
    // </ThemeProvider>
  );
};

export default App;
