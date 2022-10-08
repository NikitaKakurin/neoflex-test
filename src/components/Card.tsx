import React from 'react';
import 'components/UI/Card/card.scss';
import { ICard } from 'model/typescript';
import { useInBasketContext } from 'context/context';
interface IProps {
  data: ICard;
}

export default function Card({ data }: IProps) {
  const { img, title, rate, prevPrice, price, id } = data;
  const { setInBasket } = useInBasketContext();
  function addToBasket() {
    setInBasket((prev) => {
      return { ...prev, ...{ [id]: prev[id] ? prev[id] + 1 : 1 } };
    });
  }
  return (
    <div className="card">
      <div className="card__img_container">
        <img src={img} alt={title} className="card__img" />
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
          <button className="card__buy_btn" onClick={addToBasket}>
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}
