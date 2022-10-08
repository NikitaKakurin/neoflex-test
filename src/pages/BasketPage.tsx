import BasketCard from 'components/BasketCard';
import React from 'react';
import { cardsData } from 'data/cardsData';
import 'style/basketPage.scss';
import { useInBasketContext } from 'context/context';
import { ICard, IInBasket } from 'model/typescript';

const getCardsInBasket = (inBasket: IInBasket, data: ICard[]) => {
  const idArr = Object.keys(inBasket);
  return data.filter((card) => idArr.includes(card.id));
};

const getTotalPrice = (cards: ICard[], inBasket: IInBasket) => {
  let sum = 0;
  cards.forEach((card) => (sum += +card.price * inBasket[card.id]));
  return sum;
};

export default function BasketPage() {
  const { inBasket } = useInBasketContext();
  const cardsInBasket = getCardsInBasket(inBasket, cardsData);
  const totalPrice = getTotalPrice(cardsInBasket, inBasket);
  return (
    <div className="basketPage">
      <h2 className="basketPage__title">Корзина</h2>
      <div className="basketPage__container">
        <div className="basketPage__cards">
          {cardsInBasket.map((data) => (
            <BasketCard data={data} key={data.id} />
          ))}
        </div>
        <div className="aside">
          <div className="aside__text_container">
            <div>ИТОГО</div>
            <div>{`₽ ${totalPrice}`}</div>
          </div>
          <button className="aside__btn">Перейти к офрмлению</button>
        </div>
      </div>
    </div>
  );
}
