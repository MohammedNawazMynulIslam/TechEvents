import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { dbConnect } from "@/services/mongo";
import AuthProvider from "./Providers/AuthProvider";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata = {
  title: "Eventry – Discover Tech Events Worldwide",
  description: "Your single entry point to discover, explore, and attend the best technology events happening around the globe.",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={outfit.className}>
        <AuthProvider>
          <Navbar />
          <main className="pt-24 pb-16">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
