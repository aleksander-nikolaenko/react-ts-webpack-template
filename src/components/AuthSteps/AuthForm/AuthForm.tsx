import { NavLink } from 'react-router-dom';

import { AuthFormStep1 } from 'components/AuthSteps/AuthForm';

import s from './AuthForm.module.scss';

interface IProps {
  currentStep: number;
}

export const AuthForm = ({ currentStep }: IProps) => {
  return (
    <div className={s.formWrapper}>
      <h2 className={s.formTitle}>Choose your role</h2>
      <p className={s.logIn}>
        Already have an account?{' '}
        <NavLink to='/login' className={s.link}>
          Log in
        </NavLink>
      </p>
      {currentStep === 1 && <AuthFormStep1 />}
    </div>
  );
};
