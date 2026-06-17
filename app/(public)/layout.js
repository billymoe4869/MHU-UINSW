import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Footer";

export default function LayoutPublic({ children }) {
    return (
      <>
        <Navbar />
            <main className="min-h-dvh flex flex-col bg-(--color-background)">
                {children}
            </main>
        <Footer />
      </>
    );
}