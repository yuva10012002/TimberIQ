"use client";

import { useState } from "react";

export default function InventoryPage() {
const [search, setSearch] = useState("");

const [productName, setProductName] = useState("");
const [stock, setStock] = useState("");
const [buyPrice, setBuyPrice] = useState("");
const [sellPrice, setSellPrice] = useState("");

const [products, setProducts] = useState([
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
]);

const handleAddProduct = () => {
if (
!productName ||
!stock ||
!buyPrice ||
!sellPrice
) {
alert("Please fill all fields");
return;
}


const newProduct = {
  id: Date.now(),
  name: productName,
  stock: Number(stock),
  buyPrice: Number(buyPrice),
  sellPrice: Number(sellPrice),
};

setProducts([...products, newProduct]);

setProductName("");
setStock("");
setBuyPrice("");
setSellPrice("");


};

const handleDelete = (id: number) => {
setProducts(
products.filter(
(product) => product.id !== id
)
);
};

const filteredProducts = products.filter(
(product) =>
product.name
.toLowerCase()
.includes(search.toLowerCase())
);

return ( <main className="min-h-screen bg-gray-100 p-8">

```
  {/* Header */}
  <div className="bg-green-100 rounded-2xl p-6 mb-6">
    <h1 className="text-3xl font-bold">
      Inventory Management
    </h1>

    <p className="text-gray-600 mt-2">
      Manage timber stock and pricing
    </p>
  </div>

  {/* Stats */}
  <div className="grid md:grid-cols-4 gap-6 mb-8">

    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-gray-500">
        Products
      </h3>

      <p className="text-3xl font-bold text-green-600">
        {products.length}
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-gray-500">
        Total Stock
      </h3>

      <p className="text-3xl font-bold text-blue-600">
        {products.reduce(
          (sum, p) => sum + p.stock,
          0
        )}
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-gray-500">
        Low Stock
      </h3>

      <p className="text-3xl font-bold text-red-600">
        {
          products.filter(
            (p) => p.stock < 200
          ).length
        }
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-gray-500">
        Inventory Value
      </h3>

      <p className="text-3xl font-bold text-purple-600">
        ₹
        {products
          .reduce(
            (sum, p) =>
              sum +
              p.stock * p.buyPrice,
            0
          )
          .toLocaleString()}
      </p>
    </div>

  </div>

  {/* Search */}
  <div className="flex gap-4 mb-8">

    <input
      type="text"
      placeholder="🔍 Search Product..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="flex-1 p-4 rounded-xl border bg-white"
    />

  </div>

  {/* Add Product */}
  <div className="bg-white p-6 rounded-2xl shadow mb-8">

    <h2 className="text-2xl font-bold mb-4">
      Add Product
    </h2>

    <div className="grid md:grid-cols-2 gap-4">

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) =>
          setProductName(e.target.value)
        }
        className="border p-3 rounded-xl"
      />

      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) =>
          setStock(e.target.value)
        }
        className="border p-3 rounded-xl"
      />

      <input
        type="number"
        placeholder="Buy Price"
        value={buyPrice}
        onChange={(e) =>
          setBuyPrice(e.target.value)
        }
        className="border p-3 rounded-xl"
      />

      <input
        type="number"
        placeholder="Sell Price"
        value={sellPrice}
        onChange={(e) =>
          setSellPrice(e.target.value)
        }
        className="border p-3 rounded-xl"
      />

    </div>

    <button
      onClick={handleAddProduct}
      className="bg-green-600 text-white px-6 py-3 rounded-xl mt-4 hover:bg-green-700"
    >
      Save Product
    </button>

  </div>

  {/* Product Cards */}
  <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">

    {filteredProducts.map((product) => (

      <div
        key={product.id}
        className="bg-white rounded-2xl p-6 shadow"
      >

        <h2 className="text-2xl font-bold mb-4">
          {product.name}
        </h2>

        <p>
          Stock: {product.stock}
        </p>

        {product.stock < 200 && (
          <p className="text-red-600 font-bold mt-2">
            ⚠ Low Stock
          </p>
        )}

        <p className="mt-2">
          Buy Price: ₹
          {product.buyPrice}
        </p>

        <p className="mt-2">
          Sell Price: ₹
          {product.sellPrice}
        </p>

        <p className="text-green-600 font-bold text-xl mt-4">
          Profit: ₹
          {product.sellPrice -
            product.buyPrice}
        </p>

        <button
          onClick={() =>
            handleDelete(product.id)
          }
          className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-700"
        >
          Delete
        </button>

      </div>

    ))}

  </div>

</main>


);
}
