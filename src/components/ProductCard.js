import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600 mt-1">{product.description}</p>
      <p className="text-green-500 font-bold mt-2">${product.price}</p>
      <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
