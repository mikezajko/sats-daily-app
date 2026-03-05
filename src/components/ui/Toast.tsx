"use client";

import { useEffect } from "react";
import { useAppStore } from "@/lib/store";

export function Toast() {
  const { toastMessage, toastVisible, hideToast } = useAppStore();

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 2600);
      return () => clearTimeout(timer);
    }
  }, [toastVisible, hideToast]);

  return (
    <div
      className={`fixed bottom-6 left-1/2 bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] px-[22px] py-3 rounded-full text-[13px] font-bold z-[500] whitespace-nowrap shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-transform duration-300 ${
        toastVisible
          ? "-translate-x-1/2 translate-y-0"
          : "-translate-x-1/2 translate-y-20"
      }`}
    >
      {toastMessage}
    </div>
  );
}
