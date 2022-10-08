import Footer from 'components/Footer';
import BasketPage from 'pages/BasketPage';
import MainPage from 'pages/MainPage';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { inBasketContext } from 'context/context';
import { IInBasket } from 'model/typescript';
import Page404 from 'pages/Page404';

function App() {
  const arr: IInBasket = {};
  const [inBasket, setInBasket] = useState(arr);

  return (
    <BrowserRouter>
      <inBasketContext.Provider value={{ inBasket, setInBasket }}>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </div>
      </inBasketContext.Provider>
    </BrowserRouter>
  );
}

export default App;
