import React, { useEffect, useState } from 'react';
import './style.css';
import { CommonInput } from '../CommonInput/CommonInput';
import { CommonTextarea } from '../CommonTextarea/CommonTextarea';
import { FileInput } from '../FileInput/FileInput';
import { ConfirmCheckbox } from '../СommonCheckbox/CommonCheckbox';

type FormData = {
  userName: string,
  company: string,
  phoneNumber: string,
  email: string,
  file: File | null,
  description: string,
  confirm: boolean,
}

export const Form = () => {
  const [data, setData] = useState<FormData>({
    userName: '',
    company: '',
    phoneNumber: '',
    email: '',
    file: null,
    description: '',
    confirm: false,
  });
  const [isValid, setValid] = useState<boolean>(false);

  useEffect(() => {
    if (data.userName && data.company && data.phoneNumber && data.email && data.confirm && (data.file || data.description)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [data]);

  const onChange = (value: string | boolean | File, key: string) => {
    setData(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  const cancelFileUpload = () => {
    setData(prev => ({
      ...prev,
      file: null,
    }));
  };

  return (
    <div className="feedback-form">
      <h2 className="feedback-form__title">Анкета для новых клиентов AGIMA</h2>
      <form className="feedback-form__form" onSubmit={(e) => {
        e.preventDefault();
        console.log(isValid, data);
      }}>
        <div className="feedback-form__form-group">
          <CommonInput type="text" name="userName" label="Введите ваше имя" value={data.userName} onChange={onChange} />
        </div>
        <div className="feedback-form__form-group">
          <CommonInput type="text" name="company" label="Компания" value={data.company} onChange={onChange} />
        </div>
        <div className="feedback-form__form-group">
          <CommonInput type="tel" name="phoneNumber" label="Телефон" value={data.phoneNumber} onChange={onChange} />
        </div>
        <div className="feedback-form__form-group">
          <CommonInput type="email" name="email" label="Электронная почта" value={data.email} onChange={onChange} />
        </div>
        <div className="feedback-form__form-group">
          <CommonTextarea placeholder="Напишите текст обращения" name="description" value={data.description}
                          disabled={Boolean(data.file)} onChange={onChange} />
          <FileInput name="file" disabled={Boolean(data.description)} onChange={onChange} value={data.file}
                     onCancel={cancelFileUpload} />
        </div>
        <div className="feedback-form__form-action">
          <div className="feedback-form__form-action__confirm">
            <ConfirmCheckbox checked={data.confirm} onChecked={() => onChange(!data.confirm, 'confirm')} />
          </div>
          <div>
            <button type="submit" className="feedback-form__form-action__submit" disabled={!isValid}>Отправить</button>
          </div>
        </div>
      </form>
    </div>
  );
};
