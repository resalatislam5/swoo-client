import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "./components/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SWOO",
  description: "SWOO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
