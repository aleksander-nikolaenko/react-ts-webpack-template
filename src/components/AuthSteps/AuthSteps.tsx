import { useState } from 'react';

import { Logo } from 'components/Logo';
import { Steps } from 'components/Steps';
import { AuthForm } from 'components/AuthSteps/AuthForm';

import s from './AuthSteps.module.scss';

export const AuthSteps = () => {
  const [step, setStep] = useState(1);

  return (
    <section className={s.section}>
      <Logo content='SkillRyzen' />
      <Steps currentStep={step} />
      <AuthForm currentStep={step} />
    </section>
  );
};
