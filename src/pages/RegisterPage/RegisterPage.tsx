import { AuthContainer } from 'components/AuthContainer';
import { AuthIntro } from 'components/AuthIntro';
import { AuthSteps } from 'components/AuthSteps';

const RegisterPage = () => {
  return (
    <AuthContainer>
      <AuthIntro />
      <AuthSteps />
    </AuthContainer>
  );
};

export default RegisterPage;
