import React from 'react';
import './style.css';

type CommonTextareaProps = {
  value: string;
  onChange: (v: string, key: string) => void;
  placeholder: string;
  name: string;
  disabled: boolean
}

export const CommonTextarea = (props: CommonTextareaProps) => {
  return (
    <div className="common-textarea">
      <textarea
        className="common-textarea__input"
        {...props}
        onChange={e => props.onChange(e.target.value, props.name)}
      />
    </div>
  );
};
