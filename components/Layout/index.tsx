import React from "react";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
