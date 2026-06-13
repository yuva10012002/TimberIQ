"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", revenue: 120000 },
  { month: "Feb", revenue: 180000 },
  { month: "Mar", revenue: 220000 },
  { month: "Apr", revenue: 280000 },
  { month: "May", revenue: 350000 },
  { month: "Jun", revenue: 420000 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow mb-10">
      <h2 className="text-2xl font-semibold mb-6">
        Revenue Trend
      </h2>

      <LineChart
        width={700}
        height={350}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            borderRadius: "10px",
            border: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        />

        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#16a34a"
          strokeWidth={5}
          dot={{ r: 6 }}
        />
      </LineChart>
    </div>
  );
}