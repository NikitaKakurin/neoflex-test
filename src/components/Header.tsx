import React from 'react';
import { Link } from 'react-router-dom';
import BasketIcon from './BasketIcon';
import { useInBasketContext } from 'context/context';
import { getAmount } from 'utils/getAmount';
import 'style/header.scss';

export default function Header() {
  const { inBasket } = useInBasketContext();
  return (
    <header className="header">
      <h1>
        <Link to="/" className="header__title">
          QPICK
        </Link>
      </h1>
      <div className="header__icons_container">
        <Link to="/favourites">
          <BasketIcon src="assets/svg/favourites.svg" alt="favourites" count={2} />
        </Link>
        <Link to="/basket">
          <BasketIcon src="assets/svg/basket.svg" alt="basket" count={getAmount(inBasket)} />
        </Link>
      </div>
    </header>
  );
}
