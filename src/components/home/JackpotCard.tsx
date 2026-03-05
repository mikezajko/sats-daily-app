"use client";

import { useAppStore } from "@/lib/store";
import { LiveDot } from "@/components/ui/LiveDot";

export function JackpotCard() {
  const { poolPct, poolSold, poolTarget, btcPrice } = useAppStore();

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-[26px] relative overflow-hidden">
      {/* Bitcoin watermark */}
      <span className="absolute -right-[10px] -top-[18px] text-[140px] opacity-[0.035] font-playfair font-bold leading-none pointer-events-none text-[var(--gold)]">
        ₿
      </span>

      <div className="flex justify-between items-start mb-[18px]">
        <div className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.5px]">
          Today&apos;s Jackpot
        </div>
        <div className="flex items-center gap-[6px] bg-[var(--green-dim)] border border-[rgba(74,222,128,0.2)] text-[var(--green)] text-[10px] font-bold px-[11px] py-1 rounded-full tracking-[0.5px]">
          <LiveDot />
          Live
        </div>
      </div>

      <div className="font-playfair text-[52px] font-black tracking-[-2px] leading-none">
        <span className="text-[var(--gold)]">1</span> BTC
      </div>
      <div className="text-sm text-[var(--muted2)] mt-[6px]">
        ≈ ${btcPrice.toLocaleString()} at current price
      </div>

      {/* Progress */}
      <div className="mt-[22px]">
        <div className="flex justify-between text-[13px] font-bold text-[var(--muted2)] mb-[9px]">
          <span>Pool progress</span>
          <span className="text-[var(--text)]">{Math.round(poolPct)}%</span>
        </div>
        <div className="h-[5px] bg-[var(--surface2)] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#C47800] via-[var(--gold)] to-[var(--gold-light)] transition-[width] duration-[1.4s] ease-[cubic-bezier(0.4,0,0.2,1)] relative"
            style={{ width: `${poolPct}%` }}
          >
            <span className="absolute right-0 top-0 bottom-0 w-7 bg-gradient-to-r from-transparent to-white/30 animate-gleam" />
          </div>
        </div>
        <div className="flex justify-between mt-[7px] text-xs text-[var(--muted)] font-bold">
          <span>{poolSold.toLocaleString()} tickets sold</span>
          <span>{poolTarget.toLocaleString()} needed</span>
        </div>
      </div>
    </div>
  );
}
