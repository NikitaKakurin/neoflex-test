import React from 'react';
import 'components/UI/Card/card.scss';
import { ICard } from 'model/typescript';

interface IProps {
  data: ICard;
}

export default function Card({ data }: IProps) {
  const { img, title, rate, prevPrice, price } = data;
  return (
    <div className="card">
      <div className="card__img_container">
        <img src={img} alt="image1" className="card__img" />
      </div>

      <div className="card__text_container">
        <div className="card__text_wrapper">
          <span className="card__title">{title}</span>
          <div className="card__stars">{rate}</div>
        </div>
        <div className="card__text_wrapper-right">
          <div className="card__price_wrapper">
            <span className="card__price">{`${price} ₽`}</span>
            <span className="card__price-prev">{prevPrice && `${prevPrice} ₽`}</span>
          </div>
          <button className="card__buy_btn">Купить</button>
        </div>
      </div>
    </div>
  );
}
