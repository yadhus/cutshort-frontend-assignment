import React, { useEffect, useState } from 'react';

import './Input.css';

export type TextInputProps = {
  type?: string;
  label?: string | JSX.Element;
  value?: string;
  placeholder?: string;
  helpText?: string;
  hasError?: boolean;
  error?: string;
  required?: boolean;
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (value: string, e: React.FocusEvent<HTMLInputElement>) => void;
};

export const Input = (props: TextInputProps) => {
  const {
    label,
    value = '',
    placeholder,
    helpText,
    hasError = false,
    error,
    required,
    fullWidth = false,
    readOnly = false,
    disabled = false,
    autoFocus = false,
    onClick,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const [textValue, setTextValue] = useState<string>('');

  useEffect(() => {
    value === undefined || value === null
      ? setTextValue('')
      : setTextValue(value);
  }, [value]);

  const handleTextClick = (evt: React.MouseEvent<HTMLInputElement>) => {
    onClick && onClick(evt);
  };

  const handleTextChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setTextValue(value);
    onChange && onChange(value, evt);
  };

  const handleTextBlur = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onBlur && onBlur(evt.target.value, evt);
  };

  const handleTextFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(evt.target.value, evt);
  };

  return (
    <div
      className={
        disabled
          ? 'ed-text-input-container-disabled'
          : 'ed-text-input-container'
      }
      style={{ width: fullWidth ? '100%' : '' }}
    >
      {label && (
        <label className="ed-text-input-label">
          {label}
          {required && <span className="ed-text-input-required"> *</span>}
        </label>
      )}
      <div
        className={`ed-text-input-wrapper  ${
          hasError || error ? 'ed-text-input-error' : undefined
        }`}
      >
        <input
          className={`ed-text-input`}
          value={textValue}
          onChange={handleTextChange}
          onBlur={handleTextBlur}
          onFocus={handleTextFocus}
          placeholder={placeholder}
          onClick={handleTextClick}
          tabIndex={2}
          readOnly={readOnly}
          disabled={disabled}
          autoFocus={autoFocus}
        />
      </div>
      <div className="ed-text-input-bottom">
        {error && <div className="ed-text-input-error">{error}</div>}
        {helpText && <div className="ed-text-input-help-text">{helpText}</div>}
      </div>
    </div>
  );
};
