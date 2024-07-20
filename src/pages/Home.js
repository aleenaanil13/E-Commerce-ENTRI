import React from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import productsData from '../data/products.json'; // Replace with your product data

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <ProductList products={productsData} />
      </div>
    </div>
  );
}

export default Home;
