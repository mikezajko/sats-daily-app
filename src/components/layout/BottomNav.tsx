"use client";

import { useAppStore } from "@/lib/store";

export function BottomNav() {
  const { activeTab, setActiveTab } = useAppStore();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[rgba(24,23,20,0.97)] border-t border-[var(--border)] backdrop-blur-[20px] flex z-50">
      <button
        onClick={() => setActiveTab("home")}
        className={`flex-1 flex flex-col items-center py-3 px-2 cursor-pointer transition-all duration-150 border-none bg-transparent font-lato`}
      >
        <span className="text-[20px] mb-[3px]">🎟</span>
        <span
          className={`text-[10px] font-bold tracking-[0.3px] uppercase ${
            activeTab === "home" ? "text-[var(--gold)]" : "text-[var(--muted)]"
          }`}
        >
          Today
        </span>
      </button>
      <button
        onClick={() => setActiveTab("profile")}
        className={`flex-1 flex flex-col items-center py-3 px-2 cursor-pointer transition-all duration-150 border-none bg-transparent font-lato`}
      >
        <span className="text-[20px] mb-[3px]">👤</span>
        <span
          className={`text-[10px] font-bold tracking-[0.3px] uppercase ${
            activeTab === "profile" ? "text-[var(--gold)]" : "text-[var(--muted)]"
          }`}
        >
          Account
        </span>
      </button>
    </nav>
  );
}
