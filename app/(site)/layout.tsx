import { Paytone_One, Outfit } from "next/font/google";
import Navbar from "@/components/ui/layout/Navbar";
import "../globals.css";
import Footer from "@/components/ui/layout/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const paytone = Paytone_One({
  subsets: ["latin"],
  variable: "--font-paytone",
  display: "swap",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${paytone.variable} ${outfit.variable} dark:bg-red-500`}
    >
      <body>
        <div id="contact-modal"></div>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
