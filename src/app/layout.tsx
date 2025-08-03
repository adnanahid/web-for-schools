import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import bg from "../assets/background.jpg";
import Navigation from "@/components/layout/Navigaton";
import Footer from "@/components/layout/Footer";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "School Info System",
  description: "School website for official information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body
        className={hindSiliguri.className}
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundColor: "#f0f0f0",
          opacity: 0.97,
        }}
      >
        <header>
          <Navigation />
        </header>
        <main className="z-50">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
