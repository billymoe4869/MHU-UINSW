import Navbar from "@/components/public/navbar/Navbar";
import Footer from "@/components/public/Footer";
import DashboardLink from "@/components/public/DashboardLink";

export default function LayoutPublic({ children }) {
  return (
    <>
      <Navbar>
        <DashboardLink />
      </Navbar>
      <main className="min-h-dvh flex flex-col bg-(--color-background)">
        {children}
      </main>
      <Footer />
    </>
  );
}
