import React from 'react';
import './style.css';

type CommonInputProps = {
  label: string
  value: string
  onChange: (e: string, key: string) => void
  type: 'text' | 'email' | 'tel'
  name: string
}

export const CommonInput = (props: CommonInputProps) => {
  return (
    <div className="common-input">
      <input {...props} placeholder=" " className="common-input__input"
             onChange={(e) => props.onChange(e.target.value, props.name)} />
      <label className="common-input__label">{props.label}</label>
    </div>
  );
};
