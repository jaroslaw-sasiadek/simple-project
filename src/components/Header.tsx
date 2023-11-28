"use client";

import Link from "next/link";

import { ThemeToggler } from "./ThemeToggler";

export const Header = () => {
  return (
    <header className="flex h-24 select-none items-center justify-between">
      <Link className="text-2xl font-bold" href="/">
        SimpleProject
      </Link>
      <div className="flex items-center gap-5">
        <ThemeToggler />
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </header>
  );
};
