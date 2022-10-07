import Card from 'components/Card';
import React from 'react';
import 'style/mainPage.scss';
import { cardsData } from 'data/cardsData';
export default function MainPage() {
  const wireCards = cardsData.filter((item) => item.type === 'wire');
  const wirelessCards = cardsData.filter((item) => item.type === 'wireless');
  return (
    <main className="main">
      <h2 className="main__title">Наушники</h2>
      <div className="main__cards">
        {wireCards.map((item) => (
          <Card data={item} key={Date.now()} />
        ))}
      </div>
      <h2 className="main__title">Беспроводные наушники</h2>
      <div className="main__cards">
        {wirelessCards.map((item) => (
          <Card data={item} key={Date.now()} />
        ))}
      </div>
    </main>
  );
}
