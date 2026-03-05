"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--gold)] text-[#0E0D0B] hover:bg-[var(--gold-light)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(240,165,0,0.25)]",
  secondary:
    "bg-transparent text-[var(--text)] border border-[var(--border)] hover:border-[var(--gold-border)] hover:text-[var(--gold)]",
  ghost:
    "bg-transparent text-[var(--muted2)] hover:text-[var(--text)] p-2",
  danger:
    "bg-transparent text-[var(--red)] border border-[rgba(248,113,113,0.25)] hover:bg-[var(--red-dim)]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", fullWidth = true, className = "", children, ...props }, ref) => {
    const baseStyles =
      "font-lato font-bold text-[15px] rounded-[var(--radius)] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
    const paddingStyles = variant === "ghost" ? "px-0 py-2" : "px-7 py-[15px]";
    const widthStyles = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${paddingStyles} ${widthStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
