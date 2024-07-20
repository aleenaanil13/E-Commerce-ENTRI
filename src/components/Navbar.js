import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between">
        <div className="text-xl font-bold">E-commerce Entri</div>
        <div className="flex items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
