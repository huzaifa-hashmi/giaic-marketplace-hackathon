import Header from "../.././components/Header";
import Navbar from "../.././components/Navbar";
import Footer from "../.././components/Footer";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}