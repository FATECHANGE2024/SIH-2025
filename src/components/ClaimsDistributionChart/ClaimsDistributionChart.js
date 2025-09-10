"use client";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Rejected", value: 12 },
  { name: "Pending", value: 24 },
  { name: "Approved", value: 27 },
];

const COLORS = ["#f87171", "#fbbf24", "#34d399"];

export default function ClaimsDistributionChart({ lang, title }) {
  const translations = {
    en: { rejected: "Rejected", pending: "Pending", approved: "Approved" },
    hi: { rejected: "अस्वीकृत", pending: "लंबित", approved: "स्वीकृत" },
  };

  const t = translations[lang];

  // Update chart labels
  const localizedData = [
    { name: t.rejected, value: 12 },
    { name: t.pending, value: 24 },
    { name: t.approved, value: 27 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-sm font-medium text-gray-600 mb-2">{title}</h3>
      <PieChart width={200} height={200}>
        <Pie data={localizedData} cx="50%" cy="50%" outerRadius={70} dataKey="value">
          {localizedData.map((entry, idx) => (
            <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
