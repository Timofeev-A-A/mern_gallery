import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Gallery from '../components/Gallery';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="main-content">
        <Routes>
          <Route element={HomePage} path="/" />
          <Route element={Gallery} path="/gallery" />
          <Route element={NotFoundPage} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
