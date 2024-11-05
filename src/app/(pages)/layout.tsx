import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col h-fit container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
