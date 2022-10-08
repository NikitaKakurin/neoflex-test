import Footer from 'components/Footer';
import BasketPage from 'pages/BasketPage';
import MainPage from 'pages/MainPage';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { basketCountContext } from 'context/context';
import { IInBasket } from 'model/typescript';
function App() {
  const [basketCount, setBasketCount] = useState(0);

  return (
    <BrowserRouter>
      <basketCountContext.Provider value={{ basketCount, setBasketCount }}>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="*" element={<h2>404 not found</h2>} />
          </Routes>
          <Footer />
        </div>
      </basketCountContext.Provider>
    </BrowserRouter>
  );
}

export default App;
