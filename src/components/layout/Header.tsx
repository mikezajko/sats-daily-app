"use client";

import { ReactNode } from "react";
import { Logo } from "./Logo";

interface HeaderProps {
  children?: ReactNode;
  logoHref?: string;
}

export function Header({ children, logoHref = "/" }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-6 py-[18px] border-b border-[var(--border)] sticky top-0 bg-[rgba(14,13,11,0.96)] backdrop-blur-[20px] z-[99] shrink-0">
      <Logo href={logoHref} />
      <div className="flex gap-[10px] items-center">{children}</div>
    </header>
  );
}
