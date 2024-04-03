import * as React from "react";
// import {useState}  from 'react';
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const App = () => {
  return (
    // <ThemeProvider theme={}>
    <HelmetProvider>
      <Container>Build source base</Container>
    </HelmetProvider>
    // </ThemeProvider>
  );
};

export default App;
