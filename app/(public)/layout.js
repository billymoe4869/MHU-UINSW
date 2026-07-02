import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Footer";
import DashboardLink from "@/components/DashboardLink";

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