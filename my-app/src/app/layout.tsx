import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Home Page",
  description: "Test Home Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
