import CustomLayout from 'Layout';
import CustomForm from 'components/common/BaseForm';
import { ConfigProvider } from 'antd';

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
      {/* <AuthPage /> */}
      <CustomLayout />
      <CustomForm values='hello' err='erroxx' />
    </ConfigProvider>
    // </ThemeProvider>
  );
};

export default App;
