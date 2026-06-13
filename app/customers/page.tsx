"use client";

import { useState } from "react";
const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN").format(value);

export default function CustomersPage() {
  const [search, setSearch] = useState("");

  const customers = [
    {
      id: 1,
      name: "Ramesh Timber",
      phone: "9876543210",
      revenue: 245000,
      orders: 12,
    },
    {
      id: 2,
      name: "Kumar Traders",
      phone: "9876543211",
      revenue: 180000,
      orders: 8,
    },
    {
      id: 3,
      name: "Sri Wood Works",
      phone: "9876543212",
      revenue: 120000,
      orders: 5,
    },
    {
      id: 4,
      name: "Ganesh Interiors",
      phone: "9876543213",
      revenue: 95000,
      orders: 4,
    },
  ];

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase()) ||
    customer.phone.includes(search)
  );

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="bg-green-100 rounded-2xl px-6 py-5 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Customers
        </h1>

        <p className="text-gray-500 mt-2">
          Search and manage timber business customers
        </p>
      </div>

      <input
        type="text"
        placeholder="🔍 Search customer by name or phone..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-200 p-4 rounded-xl w-full mb-8 bg-white shadow-sm outline-none focus:ring-2 focus:ring-green-500"
      />

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {filteredCustomers.map((customer) => (
          <div
            key={customer.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-xl">
                {customer.name.charAt(0)}
              </div>

              <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Active
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              {customer.name}
            </h3>

            <p className="text-gray-500 mt-2">
              📞 {customer.phone}
            </p>

            <p className="text-gray-500 mt-2">
              Orders: {customer.orders}
            </p>

            <p className="text-green-600 font-bold text-2xl mt-4">
  ₹{customer.revenue}
</p>
          </div>
        ))}
      </div>

      {filteredCustomers.length === 0 && (
        <div className="bg-white p-8 rounded-xl shadow text-center mt-6">
          <p className="text-gray-500 text-lg">
            No customers found.
          </p>
        </div>
      )}
    </main>
  );
}