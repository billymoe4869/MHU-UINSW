import Sidebar from "@/components/admin/Sidebar";

export default function LayoutDashboard({ children }) {
  return (
    <div className="grid md:grid-cols-5 min-h-dvh">
      <div className="md:col-span-1">
        <Sidebar />
      </div>
      <main className="md:col-span-4 col-span-5 md:p-6">{children}</main>
    </div>
  );
}
