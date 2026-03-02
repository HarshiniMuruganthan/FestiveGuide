export default function AdminDashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <a href="/admin/festivals" className="text-primary mt-4 block">
        Manage Festivals →
      </a>
    </div>
  );
}
