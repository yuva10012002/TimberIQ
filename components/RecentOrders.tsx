export default function RecentOrders() {
  const orders = [
    {
      invoice: "INV-001",
      customer: "Ramesh Timber",
      amount: "₹45,000",
      status: "Paid",
    },
    {
      invoice: "INV-002",
      customer: "Kumar Traders",
      amount: "₹38,000",
      status: "Pending",
    },
    {
      invoice: "INV-003",
      customer: "Sri Wood Works",
      amount: "₹25,000",
      status: "Paid",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">
        Recent Orders
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Invoice</th>
            <th className="text-left py-2">Customer</th>
            <th className="text-left py-2">Amount</th>
            <th className="text-left py-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b">
              <td className="py-3">{order.invoice}</td>
              <td>{order.customer}</td>
              <td>{order.amount}</td>
              <td>
                <span
                  className={
                    order.status === "Paid"
                      ? "text-green-600 font-semibold"
                      : "text-orange-500 font-semibold"
                  }
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}