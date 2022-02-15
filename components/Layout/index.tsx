import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <div className="max-w-3xl mx-auto">{children}</div>;
}

export default Layout;
