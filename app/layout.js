import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "./ui/footer/Footer";
import Home from "./ui/nav/Nav";

const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-sans",
});

export const metadata = {
  title: "E-Shop",
  description: "E-Shop - Your shopping experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Home />
        {children}
        <Footer />
      </body>
    </html>
  );
}
