import Sidebar from "@/components/admin/Sidebar";

export default function LayoutDashboard({ children }) {
  return (
    <>
      <div className="grid grid-cols-5 min-h-dvh">
        <Sidebar />
        <main className="col-span-3">{children}</main>
      </div>
    </>
  );
}
