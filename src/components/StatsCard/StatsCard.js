export default function StatCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-100 ">
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
}
