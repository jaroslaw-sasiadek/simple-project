"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <ThemeProvider defaultTheme="system" attribute="class">
      {children}
    </ThemeProvider>
  ) : (
    <>{children}</>
  );
}
