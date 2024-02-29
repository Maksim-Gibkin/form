import React from 'react';
import './FormPage.css';
import { InfoText } from './components/Info/info';
import { Form } from './components/Form/Form';

export const FormPage = () => {
  return (
    <section className="main">
      <div className="main_container">
        <InfoText />
        <Form />
      </div>
    </section>
  );
};
