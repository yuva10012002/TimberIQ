import RevenueChart from "../components/RevenueChart";
import TopCustomers from "../components/TopCustomers";
import RecentOrders from "../components/RecentOrders";
import InventorySummary from "../components/InventorySummary";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="flex">

        {/* Sidebar */}
        <div className="w-64 bg-white h-screen shadow-md p-6">
          <h1 className="text-2xl font-bold text-green-700">
            TimberIQ
          </h1>

          <ul className="mt-10 space-y-4">
            <li className="bg-green-100 text-green-700 rounded-xl px-4 py-3">
              🏠 Dashboard
            </li>

            <li>💰 Sales</li>
            <li>📦 Inventory</li>
            <li>👥 Customers</li>
            <a href="/billing">🧾 Billing</a>
            <li>💸 Expenses</li>
            <li>📊 Reports</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">

          {/* Header */}
          <div className="bg-green-100 rounded-xl px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Dashboard
            </h2>
          </div>

          <p className="text-gray-500 mt-4">
            Smart Analytics & Business Management
          </p>

          {/* KPI Cards */}
          <div className="grid grid-cols-4 gap-6 mt-8">

            <div className="
  bg-green-600
  text-white
  p-8
  rounded-3xl
  shadow-lg
  hover:scale-105
  transition-all
  duration-300
">
  <h3 className="text-xl font-medium">
    Revenue
  </h3>

  <p className="text-5xl font-bold mt-6 tracking-wide">
    ₹12,50,000
  </p>
</div>

            {/* Profit */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-gray-500">Profit</h3>
              <p className="text-3xl font-bold text-blue-600">
                ₹3,45,000
              </p>
            </div>

            {/* Customers */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-gray-500">Customers</h3>
              <p className="text-3xl font-bold">
                142
              </p>
            </div>

            {/* Pending Payments */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-gray-500">
                Pending Payments
              </h3>
              <p className="text-3xl font-bold text-red-600">
                ₹85,000
              </p>
            </div>

          </div>

          {/* Revenue Chart */}
          <div className="mt-8">
          <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="col-span-2">
            <RevenueChart />
  </div>

  <TopCustomers />

  <RecentOrders />
  
  <div className="mt-6">
  <InventorySummary />
  </div>
  </div>
          </div>

        </div>

      </div>
    </main>
  );
}