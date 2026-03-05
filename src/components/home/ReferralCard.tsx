"use client";

import { useState } from "react";
import { useAppStore } from "@/lib/store";

export function ReferralCard() {
  const { referralBonus, showToast } = useAppStore();
  const [copied, setCopied] = useState(false);
  const refCode = "ALEX92"; // This would come from user state

  const copyLink = () => {
    navigator.clipboard.writeText(`https://sats.gg/r/${refCode}`);
    setCopied(true);
    showToast("Link copied! 🔗");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.5px] mb-1">
            Refer Friends
          </div>
          <div className="text-[13px] text-[var(--muted)]">
            1 bonus ticket per friend who buys
          </div>
        </div>
        <div className="bg-[var(--gold-dim)] border border-[var(--gold-border)] text-[var(--gold)] text-[13px] font-bold px-[14px] py-1 rounded-full">
          {referralBonus} refs
        </div>
      </div>

      {/* Referral link */}
      <div className="bg-[var(--surface2)] border border-[var(--border)] rounded-[var(--radius)] flex overflow-hidden mb-[14px]">
        <div className="flex-1 px-[14px] py-[11px] font-mono text-xs text-[var(--muted2)] overflow-hidden text-ellipsis whitespace-nowrap">
          sats.gg/r/{refCode}
        </div>
        <button
          onClick={copyLink}
          className="bg-[var(--surface)] border-none border-l border-[var(--border)] text-[var(--text)] px-4 py-[10px] font-lato text-xs font-bold cursor-pointer transition-all duration-150 whitespace-nowrap hover:bg-[var(--gold-dim)] hover:text-[var(--gold)]"
        >
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>

      <p className="text-[13px] text-[var(--muted)] leading-[1.65]">
        Share your link. When a friend{" "}
        <strong className="text-[var(--text)]">buys their first ticket</strong>,
        you earn 1 free bonus entry for today&apos;s draw.
      </p>

      {/* Recent referrals */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.5px] mb-1">
          Recent
        </div>
        <div className="flex justify-between items-center p-[10px] px-[14px] bg-[var(--surface2)] border border-[var(--border)] rounded-[var(--radius)]">
          <div className="text-[13px] font-bold">
            sam_crypto
            <span className="text-[var(--muted)] text-[11px] block mt-[2px] font-normal">
              Bought 3 tickets · Today 2:14 PM
            </span>
          </div>
          <span className="text-[11px] font-bold text-[var(--green)] bg-[var(--green-dim)] border border-[rgba(74,222,128,0.15)] px-[10px] py-[3px] rounded-full">
            +1 ticket
          </span>
        </div>
        <div className="flex justify-between items-center p-[10px] px-[14px] bg-[var(--surface2)] border border-[var(--border)] rounded-[var(--radius)]">
          <div className="text-[13px] font-bold">
            jessica_m
            <span className="text-[var(--muted)] text-[11px] block mt-[2px] font-normal">
              Bought 1 ticket · Today 11:02 AM
            </span>
          </div>
          <span className="text-[11px] font-bold text-[var(--green)] bg-[var(--green-dim)] border border-[rgba(74,222,128,0.15)] px-[10px] py-[3px] rounded-full">
            +1 ticket
          </span>
        </div>
      </div>
    </div>
  );
}
