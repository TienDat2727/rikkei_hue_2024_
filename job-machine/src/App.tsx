import * as React from 'react';
// import {useState}  from 'react';

import styled from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import CustomLayout from "layout";
import CustomUpload from "components/common/BaseUpload";
import AuthPage from 'pages/auth/AuthPage';
import './index.css'


const Container = styled.div`
  min-height: 100vh;
`;

const App = () => {
  return (
    // <ThemeProvider theme={}>
    <HelmetProvider>
      <AuthPage />
      <Container>
        <CustomLayout />
        <CustomUpload />
      </Container>
    </HelmetProvider>
    // </ThemeProvider>
  );
};

export default App;
