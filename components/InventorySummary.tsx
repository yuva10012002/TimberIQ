export default function InventorySummary() {
  const items = [
    { name: "Teak Wood", stock: "250 pcs" },
    { name: "Plywood", stock: "180 pcs" },
    { name: "Oak Timber", stock: "95 pcs" },
    { name: "Doors", stock: "40 pcs" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">
        Inventory Summary
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b pb-2"
          >
            <span>{item.name}</span>
            <span className="font-semibold text-blue-600">
              {item.stock}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}