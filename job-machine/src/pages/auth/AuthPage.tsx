import { useEffect, useState } from 'react';
import { TypeActivePanel } from '../../interfaces/interfaces';
import WebFont from 'webfontloader';
import FormContainer from 'components/auth/FormCommon/FormContainer';
import TooglePanel from 'components/auth/ToogleCommon/TooglePanel';
import { Body, Container } from './Auth.styled';
const AuthPage = () => {
  const [typePanel, setTypePanel] = useState<TypeActivePanel>('sign-in');
  const isSignIn = typePanel === 'sign-in';
  const handleChange = () => {
    setTypePanel(prevPanel =>
      prevPanel === 'sign-in' ? 'sign-up' : 'sign-in'
    );
  };
  const returnTypeActive = () => {
    return typePanel;
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat', 'Roboto'],
      },
    });
  }, []);
  return (
    <Body>
      <Container>
        <div className={isSignIn ? '' : 'active'}>
          <FormContainer state={typePanel} />
          <TooglePanel
            handleChange={handleChange}
            returnTypePanel={returnTypeActive}
          />
        </div>
      </Container>
    </Body>
  );
};

export default AuthPage;
