import React from 'react';
import 'components/UI/Basket/basket.scss';
// import basketPath from 'assets/svg/basket.svg';
export default function Basket() {
  return (
    <div className="basket__container">
      <div className="basket__count">1</div>
      <img src="assets/svg/basket.svg" alt="basket" className="basket__img" />
    </div>
  );
}
