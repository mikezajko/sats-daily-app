"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

interface PillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "gold";
}

export const Pill = forwardRef<HTMLButtonElement, PillProps>(
  ({ variant = "default", className = "", children, ...props }, ref) => {
    const baseStyles =
      "px-[15px] py-[7px] rounded-full text-xs font-bold cursor-pointer transition-all duration-150 border";

    const variantStyles =
      variant === "gold"
        ? "bg-[var(--gold-dim)] border-[var(--gold-border)] text-[var(--gold)]"
        : "bg-[var(--surface2)] border-[var(--border)] text-[var(--muted2)] hover:border-[var(--gold-border)] hover:text-[var(--text)]";

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Pill.displayName = "Pill";
