export default function TopCustomers() {
  const customers = [
    { name: "Ramesh Timber", amount: "₹2,45,000" },
    { name: "Kumar Traders", amount: "₹1,80,000" },
    { name: "Sri Wood Works", amount: "₹1,20,000" },
    { name: "Ganesh Interiors", amount: "₹95,000" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">
        Top Customers
      </h2>

      <div className="space-y-4">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="flex justify-between border-b pb-2"
          >
            <span>{customer.name}</span>
            <span className="font-semibold text-green-600">
              {customer.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}