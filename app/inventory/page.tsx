"use client";

import { useState } from "react";

export default function InventoryPage() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Teak Wood",
      stock: 250,
      buyPrice: 1200,
      sellPrice: 1800,
    },
    {
      id: 2,
      name: "Rose Wood",
      stock: 180,
      buyPrice: 1500,
      sellPrice: 2200,
    },
    {
      id: 3,
      name: "Plywood",
      stock: 400,
      buyPrice: 800,
      sellPrice: 1200,
    },
    {
      id: 4,
      name: "MDF Board",
      stock: 300,
      buyPrice: 600,
      sellPrice: 950,
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-green-100 rounded-2xl p-6 mb-6">
        <h1 className="text-3xl font-bold">
          Inventory Management
        </h1>

        <p className="text-gray-600 mt-2">
          Manage timber stock and pricing
        </p>
      </div>

      {/* Search + Button */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="🔍 Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-4 rounded-xl border bg-white"
        />

        <button className="bg-green-600 text-white px-6 rounded-xl hover:bg-green-700">
          + Add Product
        </button>
      </div>

      {/* Product Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-4">
              {product.name}
            </h2>

            <p className="text-gray-600">
              Stock: {product.stock}
            </p>

            <p className="text-gray-600 mt-2">
              Buy Price: ₹{product.buyPrice}
            </p>

            <p className="text-gray-600 mt-2">
              Sell Price: ₹{product.sellPrice}
            </p>

            <p className="text-green-600 font-bold text-xl mt-4">
              Profit: ₹
              {product.sellPrice - product.buyPrice}
            </p>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="bg-white p-8 rounded-xl shadow mt-6 text-center">
          <p className="text-gray-500">
            No products found.
          </p>
        </div>
      )}
    </main>
  );
}