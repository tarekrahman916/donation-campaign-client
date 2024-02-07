import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Providers from "@/lib/Providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <Navbar />
      <div className="min-h-screen mt-20">{children}</div>
      <Footer />
    </Providers>
  );
};

export default RootLayout;
