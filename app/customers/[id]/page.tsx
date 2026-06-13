export default async function CustomerProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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

  console.log("Route ID:", id);

  const customer = customers.find(
    (c) => c.id === Number(id)
  );

  if (!customer) {
    return (
      <div className="p-10">
        <h1>Customer Not Found</h1>
      </div>
    );
  }

 return (
  <div className="min-h-screen bg-gray-100 p-8">

    {/* Customer Header */}

    <div className="bg-white rounded-2xl shadow p-8 mb-6">

      <h1 className="text-4xl font-bold text-gray-900">
        {customer.name}
      </h1>

      <p className="text-gray-500 mt-2">
        📞 {customer.phone}
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">

        <div className="bg-green-50 p-5 rounded-xl">
          <h3 className="text-gray-500">
            Total Orders
          </h3>

          <p className="text-3xl font-bold text-green-600">
            {customer.orders}
          </p>
        </div>

        <div className="bg-blue-50 p-5 rounded-xl">
          <h3 className="text-gray-500">
            Revenue
          </h3>

          <p className="text-3xl font-bold text-blue-600">
            ₹{customer.revenue}
          </p>
        </div>

      </div>

    </div>

    {/* Recent Orders */}

    <div className="bg-white rounded-2xl shadow p-8 mb-6">

      <h2 className="text-2xl font-bold mb-4">
        Recent Orders
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between border-b pb-3">
          <span>INV-001</span>
          <span>₹25,000</span>
          <span className="text-green-600">
            Paid
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>INV-002</span>
          <span>₹15,000</span>
          <span className="text-yellow-500">
            Pending
          </span>
        </div>

        <div className="flex justify-between">
          <span>INV-003</span>
          <span>₹40,000</span>
          <span className="text-green-600">
            Paid
          </span>
        </div>

      </div>

    </div>

    {/* Customer Notes */}

    <div className="bg-white rounded-2xl shadow p-8">

      <h2 className="text-2xl font-bold mb-4">
        Customer Notes
      </h2>

      <ul className="space-y-3 text-gray-700">

        <li>
          ✅ Regular customer
        </li>

        <li>
          ✅ Interested in Teak Wood
        </li>

        <li>
          ✅ Pays on time
        </li>

      </ul>

    </div>

  </div>
);
}