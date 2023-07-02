import s from './AuthButton.module.scss';

interface ButtonProps {
  className?: string;
  type: 'button' | 'submit';
  text: string;
  onClick?: () => void;
  size: 'small' | 'large';
  color?: 'grey' | 'white' | 'blue';
  disabled?: boolean; // коли disabled то кнопка сіра, в іншому випадку акцент колір
  needBackground?: 'noBackgroundAccent' | 'noBackgroundGray'; // робить кнопку прозорою, та додає акцент колір на бордер та текст або сірий бордер
}

export const AuthButton = ({
  type = 'button',
  text,
  onClick,
  size = 'small',
  disabled,
  color,
  needBackground,
  className,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`${s.authBtn} ${s[size]} ${s[color]} ${s[needBackground]} ${className}`}
    >
      {text}
    </button>
  );
};
