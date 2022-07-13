import { ImSpinner2 } from 'react-icons/im';

import { classNames } from '../../utils/common';

import './Button.css';

export enum BUTTON_SIZES {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

export enum BUTTON_VARIANTS {
  SOLID = 'solid',
  SECONDARY = 'secondary',
  LINK = 'link',
}

interface ButtonProps {
  size?: BUTTON_SIZES;
  width?: string;
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: string;
  onClick?: () => void;
  variant?: BUTTON_VARIANTS;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    size = BUTTON_SIZES.MEDIUM,
    variant = BUTTON_VARIANTS.SOLID,
    width,
    isLoading = false,
    disabled = false,
    leftIcon,
    rightIcon,
    onClick,
  } = props;

  return (
    <button
      className={classNames({
        'ed-button': true,
        [`ed-button-${variant}`]: true,
        [`ed-button-${size}`]: true,
      })}
      onClick={onClick}
      disabled={disabled}
      style={{ width }}
    >
      {leftIcon && <div className="ed-button-icon">{leftIcon}</div>}
      {isLoading && <ImSpinner2 className="ed-button-loading" size="18" />}
      {children}
      {rightIcon && <div className="ed-button-icon">{rightIcon}</div>}
    </button>
  );
};
