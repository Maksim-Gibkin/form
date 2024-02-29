import React from 'react';
import './style.css';

export const InfoText = () => {
  return (
    <div className="list">
      <h2 className="list__title">Вспомогательная информация для обращения</h2>
      <ol className="list__items">
        <li className="list__item">
          <h3 className="list__item-title">Расскажите о своей компании?</h3>
          <p className="list__item-description">Как работаете, на чем зарабатываете?</p>
          <p className="list__item-description">Кто ваши конкуренты?</p>
          <p className="list__item-description">Чем вы от них отличаетесь?</p>
        </li>
        <li className="list__item">
          <h3 className="list__item-title">В чем ваша задача?</h3>
          <p className="list__item-description">Чего хотите достичь в ближайшем будущем?</p>
          <p className="list__item-description">Что вам мешает?</p>
        </li>
        <li className="list__item">
          <h3 className="list__item-title">Каким вы видите решение задачи?</h3>
          <p className="list__item-description">Как планируете достичь своих целей?</p>
          <p className="list__item-description">Какие решения пробовали раньше?</p>
        </li>
        <li className="list__item">
          <h3 className="list__item-title">Какие у вас ожидания от результата?</h3>
          <p className="list__item-description">В каком виде вы видите решение вашей задачи?</p>
          <p className="list__item-description">В какой срок?</p>
          <p className="list__item-description">Почему он важен? На что это должно быть похоже?</p>
        </li>
        <li className="list__item">
          <h3 className="list__item-title">Сколько денег планируете потратить?</h3>
          <p className="list__item-description">Каков ваш бюджет?</p>
          <p className="list__item-description">Почему вы готовы потратить именно такую сумму?</p>
        </li>
      </ol>
    </div>
  );
};
