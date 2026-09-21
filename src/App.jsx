import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-dark min-vh-100 text-white">
      <Header />
      <Banner />
      <ProductList />
      <Footer />
    </div>
  );
}
