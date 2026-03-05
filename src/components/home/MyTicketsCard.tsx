"use client";

import { useAppStore } from "@/lib/store";

export function MyTicketsCard() {
  const { purchasedTickets, referralBonus, hasBought } = useAppStore();

  if (!hasBought) return null;

  const total = purchasedTickets + referralBonus;

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-5 px-6">
      <div className="flex justify-between items-center mb-[14px]">
        <div className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.5px]">
          My Tickets Today
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[10px]">
        <div className="bg-[var(--surface2)] border border-[var(--border)] rounded-[var(--radius)] p-[14px] px-[10px] text-center">
          <div className="font-playfair text-[32px] font-bold tracking-tight leading-none text-[var(--gold)]">
            {purchasedTickets}
          </div>
          <div className="text-[10px] text-[var(--muted)] font-bold uppercase tracking-[0.3px] mt-1">
            Purchased
          </div>
        </div>
        <div className="bg-[var(--surface2)] border border-[var(--border)] rounded-[var(--radius)] p-[14px] px-[10px] text-center">
          <div className="font-playfair text-[32px] font-bold tracking-tight leading-none text-[var(--green)]">
            {referralBonus}
          </div>
          <div className="text-[10px] text-[var(--muted)] font-bold uppercase tracking-[0.3px] mt-1">
            Bonus
          </div>
        </div>
        <div className="bg-[var(--surface2)] border border-[var(--border)] rounded-[var(--radius)] p-[14px] px-[10px] text-center">
          <div className="font-playfair text-[32px] font-bold tracking-tight leading-none">
            {total}
          </div>
          <div className="text-[10px] text-[var(--muted)] font-bold uppercase tracking-[0.3px] mt-1">
            Total
          </div>
        </div>
      </div>
    </div>
  );
}
