"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { useAppStore } from "@/lib/store";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PurchaseModal({ isOpen, onClose }: PurchaseModalProps) {
  const { purchasedTickets, referralBonus } = useAppStore();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-[66px] h-[66px] bg-[var(--gold-dim)] border border-[var(--gold-border)] rounded-full flex items-center justify-center mx-auto mb-6 text-[30px]">
        🎟️
      </div>
      <h2 className="font-playfair text-[26px] font-bold tracking-tight mb-2">
        You&apos;re in the draw!
      </h2>
      <p className="text-sm text-[var(--muted2)] leading-[1.65] mb-[26px]">
        Your tickets are live for today&apos;s Bitcoin raffle. Draw at 5 PM EST.
      </p>

      <div className="bg-[var(--surface2)] border border-[var(--border)] rounded-[var(--radius)] p-4 mb-[22px] grid grid-cols-2 gap-3">
        <div className="text-center">
          <div className="font-playfair text-[26px] font-bold tracking-tight text-[var(--gold)]">
            {purchasedTickets}
          </div>
          <div className="text-[10px] text-[var(--muted)] font-bold uppercase tracking-[0.3px] mt-[3px]">
            Purchased
          </div>
        </div>
        <div className="text-center">
          <div className="font-playfair text-[26px] font-bold tracking-tight text-[var(--green)]">
            {referralBonus}
          </div>
          <div className="text-[10px] text-[var(--muted)] font-bold uppercase tracking-[0.3px] mt-[3px]">
            Bonus (refs)
          </div>
        </div>
      </div>

      <div className="bg-[var(--gold-dim)] border border-[var(--gold-border)] rounded-[var(--radius)] p-[14px] px-4 mb-[18px] text-[13px] text-[var(--gold)] font-bold leading-[1.55] text-left">
        🔗 Invite more friends before 5 PM to earn bonus entries.
      </div>

      <Button onClick={onClose}>Got it →</Button>
    </Modal>
  );
}
