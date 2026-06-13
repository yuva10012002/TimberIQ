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
      <h1 className="text-4xl font-bold mb-6">
        {customer.name}
      </h1>

      <div className="bg-white rounded-xl p-6 shadow">
        <p>
          <strong>Phone:</strong> {customer.phone}
        </p>

        <p className="mt-3">
          <strong>Orders:</strong> {customer.orders}
        </p>

        <p className="mt-3 text-green-600 text-2xl font-bold">
          Revenue: ₹{customer.revenue}
        </p>
      </div>
    </div>
  );
}