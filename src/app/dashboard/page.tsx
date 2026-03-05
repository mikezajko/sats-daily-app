"use client";

import { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { CountdownBanner } from "@/components/home/CountdownBanner";
import { JackpotCard } from "@/components/home/JackpotCard";
import { MyTicketsCard } from "@/components/home/MyTicketsCard";
import { BuyTicketsCard } from "@/components/home/BuyTicketsCard";
import { ReferralCard } from "@/components/home/ReferralCard";
import { PurchaseModal } from "@/components/modals/PurchaseModal";
import { useAppStore } from "@/lib/store";

export default function DashboardPage() {
  const { user, logout } = usePrivy();
  const router = useRouter();
  const {
    activeTab,
    setActiveTab,
    purchasedTickets,
    referralBonus,
    showToast,
  } = useAppStore();
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);

  const totalTickets = purchasedTickets + referralBonus;

  const handleSignOut = async () => {
    await logout();
    showToast("Signed out");
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)]">
      <Header>
        {totalTickets > 0 && (
          <Pill variant="gold">{totalTickets} tickets</Pill>
        )}
        <Pill onClick={() => setActiveTab("profile")}>👤</Pill>
      </Header>

      {/* Home Tab */}
      {activeTab === "home" && (
        <div className="max-w-[480px] mx-auto p-[22px] px-5 flex flex-col gap-[14px]">
          <CountdownBanner />
          <JackpotCard />
          <MyTicketsCard />
          <BuyTicketsCard onPurchase={() => setPurchaseModalOpen(true)} />
          <ReferralCard />
          <div className="h-20" /> {/* Bottom spacer */}
        </div>
      )}

      {/* Profile Tab */}
      {activeTab === "profile" && (
        <div className="max-w-[480px] mx-auto p-[22px] px-5 flex flex-col gap-[14px]">
          {/* Account Info */}
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden">
            <div className="flex justify-between items-center p-[15px] px-5 border-b border-[var(--border)] text-sm font-bold">
              <span className="text-[var(--muted2)] text-xs font-bold">
                Account
              </span>
              <span>{user?.email?.address || user?.google?.email || "—"}</span>
            </div>
            <div className="flex justify-between items-center p-[15px] px-5 border-b border-[var(--border)] text-sm font-bold">
              <span className="text-[var(--muted2)] text-xs font-bold">
                Member Since
              </span>
              <span>
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex justify-between items-center p-[15px] px-5 text-sm font-bold">
              <span className="text-[var(--muted2)] text-xs font-bold">
                Your Referral Code
              </span>
              <span className="text-[var(--gold)]">ALEX92</span>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden">
            <div className="flex justify-between items-center p-[15px] px-5 border-b border-[var(--border)] text-sm font-bold">
              <span className="text-[var(--muted2)] text-xs font-bold">
                Lifetime Tickets Bought
              </span>
              <span>{purchasedTickets}</span>
            </div>
            <div className="flex justify-between items-center p-[15px] px-5 border-b border-[var(--border)] text-sm font-bold">
              <span className="text-[var(--muted2)] text-xs font-bold">
                Total Referrals
              </span>
              <span className="text-[var(--gold)]">{referralBonus}</span>
            </div>
            <div className="flex justify-between items-center p-[15px] px-5 text-sm font-bold">
              <span className="text-[var(--muted2)] text-xs font-bold">
                Bonus Tickets Earned
              </span>
              <span>{referralBonus}</span>
            </div>
          </div>

          <Button variant="danger" onClick={handleSignOut}>
            Sign Out
          </Button>

          <div className="h-20" /> {/* Bottom spacer */}
        </div>
      )}

      <BottomNav />
      <Toast />
      <PurchaseModal
        isOpen={purchaseModalOpen}
        onClose={() => setPurchaseModalOpen(false)}
      />
    </div>
  );
}
