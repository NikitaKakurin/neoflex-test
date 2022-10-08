import { useInBasketContext } from 'context/context';
import { ICard } from 'model/typescript';
import React from 'react';
import 'components/UI/BasketCard/basketCard.scss';

interface IProps {
  data: ICard;
}
export default function BasketCard({ data }: IProps) {
  const { img, title, price, id } = data;
  const { inBasket, setInBasket } = useInBasketContext();
  function addToBasket() {
    setInBasket((prev) => {
      return { ...prev, ...{ [id]: prev[id] ? prev[id] + 1 : 1 } };
    });
  }

  function removeFromBasket() {
    setInBasket((prev) => {
      const count = prev[id] ? prev[id] - 1 : 1;
      return { ...prev, ...{ [id]: count < 0 ? 0 : count } };
    });
  }

  function deleteFromBasket() {
    setInBasket((prev) => {
      const obj = { ...prev };
      delete obj[id];
      return obj;
    });
  }
  return (
    <div className="basketCard">
      <div className="basketCard__data_container">
        <div className="basketCard__data">
          <img src={img} alt={title} className="basketCard__img" />
          <div className="basketCard__text_container">
            <span className="basketCard__title">{title}</span>
            <span className="basketCard__price">{`${price} ₽`}</span>
          </div>
        </div>
        <button className="basketCard__delete_btn" onClick={deleteFromBasket}>
          <img src="./assets/svg/delete.svg" alt="delete" className="basketCard__delete_img" />
        </button>
      </div>
      <div className="basketCard__control">
        <div className="basketCard__btns">
          <button
            className="basketCard__btn"
            onClick={removeFromBasket}
            disabled={inBasket[id] - 1 < 0}
          >
            <img src="./assets/svg/decrease.svg" alt="decrease" className="basketCard__btn_img" />
          </button>
          <div className="basketCard__amount">{inBasket[id]}</div>
          <button className="basketCard__btn" onClick={addToBasket}>
            <img src="./assets/svg/increase.svg" alt="increase" className="basketCard__btn_img" />
          </button>
        </div>
        <div className="basketCard__total_price">{`${inBasket[id] * +price} ₽`} </div>
      </div>
    </div>
  );
}
