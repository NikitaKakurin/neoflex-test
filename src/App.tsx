import BasketPage from 'pages/BasketPage';
import MainPage from 'pages/MainPage';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="*" element={<h2>404 not found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
