import { Inter } from "next/font/google";

import "./globals.css";
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";

export const metadata = {
  title: "Bhargav Gadhiya",
  description: "My Unique Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
