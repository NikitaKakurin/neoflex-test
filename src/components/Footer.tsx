import React from 'react';
import { Link } from 'react-router-dom';
import 'style/footer.scss';
export default function Footer() {
  return (
    <footer className="footer">
      <h2>
        <Link to="/" className="footer__title">
          QPICK
        </Link>
      </h2>
      <div className="footer__navigation">
        <div className="footer__navigation_left">
          <Link to="/" className="footer__link">
            Избранное
          </Link>
          <Link to="/" className="footer__link">
            Корзины
          </Link>
          <Link to="/" className="footer__link">
            Контакты
          </Link>
        </div>
        <div className="footer__navigation_right">
          <Link to="/" className="footer__link">
            Условия Сервиса
          </Link>
          <div className="footer__lang">
            <span className="footer__lang footer__lang-active">Рус</span>
            <span className="footer__lang footer__lang">Eng</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
