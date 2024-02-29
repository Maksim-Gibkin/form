import React from 'react';
import './style.css';


type CommonCheckboxProps = {
  checked: boolean
  onChecked: () => void
}

export const ConfirmCheckbox = ({ checked, onChecked }: CommonCheckboxProps) => {
  return (
    <div className="checkbox-container">
      <label className="checkbox">
        <input type="checkbox" checked={checked} id="box" onChange={() => onChecked()} />
        <span className="checkbox__control"></span>
      </label>
      <label htmlFor="box" className="checkbox__label">
        согласен на обработку моих
        <a className="checkbox__label__link" href="#" target="_blank"> персональных данных</a>
      </label>
    </div>
  );
};
