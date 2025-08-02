import { Hind_Siliguri } from "next/font/google";
import Navigation from "@/components/HomePage/Navigation";
import "./globals.css";
import Footer from "@/components/HomePage/Footer";

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
      <body className={hindSiliguri.className}>
        <div className="">
          <header>
            <Navigation />
          </header>
          <main className="flex-1 p-6">{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
