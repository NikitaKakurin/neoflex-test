import React from 'react';
import { Link } from 'react-router-dom';
import Basket from './Basket';
import 'style/header.scss';
export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link to="/" className="header__title">
          QPICK
        </Link>
      </h1>
      <div className="header__icons_container">
        <Link to="/favourites">
          <Basket />
        </Link>
        <Link to="/basket">
          <Basket />
        </Link>
      </div>
    </header>
  );
}
