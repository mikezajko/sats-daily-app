"use client";

import { useState } from "react";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";

const QTY_OPTIONS = [
  { qty: 1, price: 5 },
  { qty: 5, price: 25 },
  { qty: 10, price: 50 },
  { qty: 25, price: 125 },
  { qty: 50, price: 250 },
  { qty: 100, price: 500 },
];

interface BuyTicketsCardProps {
  onPurchase?: () => void;
}

export function BuyTicketsCard({ onPurchase }: BuyTicketsCardProps) {
  const { selectedQty, selectedPrice, selectQty, purchaseTickets, showToast } =
    useAppStore();

  const handlePurchase = () => {
    purchaseTickets(selectedQty, selectedPrice);
    showToast(
      `${selectedQty} ticket${selectedQty > 1 ? "s" : ""} purchased ✓`
    );
    onPurchase?.();
  };

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-6">
      <div className="flex justify-between items-center mb-[14px]">
        <div className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.5px]">
          Buy Tickets
        </div>
        <div className="text-xs text-[var(--muted)] font-bold">$5 each</div>
      </div>

      {/* Quantity selector */}
      <div className="grid grid-cols-3 gap-2 mb-[14px]">
        {QTY_OPTIONS.map(({ qty, price }) => (
          <button
            key={qty}
            onClick={() => selectQty(qty, price)}
            className={`bg-[var(--surface2)] border rounded-[var(--radius)] p-[13px] px-2 cursor-pointer transition-all duration-150 text-center font-lato ${
              selectedQty === qty
                ? "bg-[var(--gold-dim)] border-[var(--gold)]"
                : "border-[var(--border)] hover:border-[var(--gold-border)]"
            }`}
          >
            <span
              className={`font-playfair text-[22px] font-bold tracking-tight block leading-none ${
                selectedQty === qty ? "text-[var(--gold)]" : "text-[var(--text)]"
              }`}
            >
              {qty}
            </span>
            <span
              className={`text-[11px] font-bold mt-[3px] block ${
                selectedQty === qty
                  ? "text-[rgba(240,165,0,0.6)]"
                  : "text-[var(--muted)]"
              }`}
            >
              ${price}
            </span>
          </button>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-[var(--surface2)] border border-[var(--border)] rounded-[var(--radius)] p-[14px] px-4 mb-3 flex justify-between items-center">
        <span className="text-[13px] text-[var(--muted2)] font-bold">
          You&apos;ll pay
        </span>
        <span className="font-playfair text-[18px] text-[var(--gold)] tracking-tight">
          ${selectedPrice} for {selectedQty} ticket{selectedQty > 1 ? "s" : ""}
        </span>
      </div>

      <Button onClick={handlePurchase}>
        Buy {selectedQty} Ticket{selectedQty > 1 ? "s" : ""} →
      </Button>
    </div>
  );
}
