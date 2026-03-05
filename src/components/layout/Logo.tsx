"use client";

import Link from "next/link";

interface LogoProps {
  href?: string;
}

export function Logo({ href = "/" }: LogoProps) {
  const content = (
    <span className="font-playfair font-black text-[22px] tracking-tight text-[var(--gold)] cursor-pointer">
      Sats
      <sup className="text-[10px] font-lato font-bold tracking-[2px] text-[var(--muted)] align-super ml-[3px] uppercase">
        daily
      </sup>
    </span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
