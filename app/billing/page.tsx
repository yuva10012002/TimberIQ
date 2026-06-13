"use client";
import { generatePDF } from "../../components/PDFInvoice";
import { useState } from "react";

export default function CreateInvoice() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const total =
    (Number(quantity) || 0) *
    (Number(price) || 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-6">
        Create Invoice
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Customer Name"
          className="border p-3 rounded-lg"
          value={customerName}
          onChange={(e) =>
            setCustomerName(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="border p-3 rounded-lg"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Product"
          className="border p-3 rounded-lg"
          value={product}
          onChange={(e) =>
            setProduct(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Quantity"
          className="border p-3 rounded-lg"
          value={quantity}
          onChange={(e) =>
            setQuantity(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Price"
          className="border p-3 rounded-lg"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

      </div>

      <div className="flex gap-4 mt-6">
        <button
  onClick={() =>
    generatePDF(
      customerName,
      phone,
      product,
      Number(quantity),
      Number(price),
      total
    )
  }
  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
>
  Generate Invoice
</button>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Save Draft
        </button>
      </div>

      <div className="mt-10 bg-gray-50 border rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">
          Invoice Preview
        </h3>

        <p>
          <strong>Customer:</strong> {customerName}
        </p>

        <p>
          <strong>Phone:</strong> {phone}
        </p>

        <p>
          <strong>Product:</strong> {product}
        </p>

        <p>
          <strong>Quantity:</strong> {quantity}
        </p>

        <p>
          <strong>Price:</strong> ₹{price}
        </p>

        <p className="mt-4 text-green-600 font-bold text-2xl">
          Total: ₹{total.toLocaleString()}
        </p>
      </div>
    </div>
  );
}