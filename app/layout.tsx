import type { Metadata } from "next";
import "./globals.css";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

export const metadata: Metadata = {
  title: "Pak-Swiss Unani Herbal Clinic",
  // description: "Best medical specialist in belgium",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 overflow-x-hidden">
        <TopBar />
        <NavBar />
        <main className="m-0 p-0 w-full">{children}</main>
        <Footer />
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/+923135620039" // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-20"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
      </body>
    </html>
  );
}
