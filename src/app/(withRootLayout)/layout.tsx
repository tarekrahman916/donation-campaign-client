import Providers from "@/lib/Providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <h1>Navbar</h1>
      <div className="min-h-screen">{children}</div>
      <h1>Footer</h1>
    </Providers>
  );
};

export default RootLayout;
