"use client";

interface LiveDotProps {
  className?: string;
}

export function LiveDot({ className = "" }: LiveDotProps) {
  return (
    <span
      className={`w-[7px] h-[7px] bg-[var(--green)] rounded-full inline-block animate-blink ${className}`}
    />
  );
}
