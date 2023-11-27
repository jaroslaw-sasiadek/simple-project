"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import "./ThemeToggler.css";

export const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const onClick = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    mounted && (
      <div>
        <button
          className={`theme-toggler ${theme === "dark" ? "dark" : "light"}`}
          type="button"
          onClick={onClick}
          aria-label="theme toggler"
        />
      </div>
    )
  );
};
