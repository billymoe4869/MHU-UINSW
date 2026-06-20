import Sidebar from "@/components/admin/Sidebar";

export default function LayoutDashboard({ children }) {
  return (
    <>
      <div className="grid grid-cols-3 min-h-dvh">
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  );
}
