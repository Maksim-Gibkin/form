import React, { ChangeEvent, useRef } from 'react';
import './style.css';


type FileInput = {
  name: string
  disabled: boolean
  onChange: (e: File, key: string) => void
  onCancel: () => void
  value: File | null
}

export const FileInput = ({ name, disabled, onChange, value, onCancel }: FileInput) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`fileInput ${disabled ? ' fileInput--disabled' : ''}`}>
      <div>
        <label htmlFor="fileInput" className={`fileInput__label${value ? ' fileInput__label--green' : ''}`}>или
          прикрепите файл</label>
        <input
          type="file"
          name={name}
          disabled={disabled}
          id="fileInput"
          ref={fileInputRef}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            if (e.target.files) {
              onChange(e.target.files[0], name);
            }
          }}
          style={{ display: 'none' }}
        />
        <button
          disabled={disabled}
          className="fileInput__button"
          onClick={(e) => {
            debugger
            e.preventDefault();
            if (fileInputRef.current) {
              fileInputRef.current.click();
            }
          }}
        ></button>
      </div>
      <div>
        {value && <>
          <span className="fileInput__fileName"> {value.name}</span>
          <button className="fileInput__cancel"
                  onClick={() => onCancel()}
          >
            <span className="fileInput__cancel__ico">X</span>
          </button>
        </>}
      </div>
    </div>
  );
};
