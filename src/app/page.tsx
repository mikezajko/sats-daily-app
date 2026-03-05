"use client";

import { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { LiveDot } from "@/components/ui/LiveDot";
import { Toast } from "@/components/ui/Toast";
import { useAppStore } from "@/lib/store";

export default function LandingPage() {
  const { ready, authenticated, login } = usePrivy();
  const router = useRouter();
  const { poolPct, btcPrice, showToast } = useAppStore();
  const [countdown, setCountdown] = useState("00:00");

  useEffect(() => {
    if (ready && authenticated) {
      router.push("/dashboard");
    }
  }, [ready, authenticated, router]);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const draw = new Date();
      draw.setHours(17, 0, 0, 0);
      if (now > draw) draw.setDate(draw.getDate() + 1);
      const diff = draw.getTime() - now.getTime();
      const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
      setCountdown(`${h}:${m}`);
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    login();
  };

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
        <p className="text-lg text-[var(--muted2)]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_55%_at_75%_35%,rgba(240,165,0,0.07)_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_15%_85%,rgba(240,165,0,0.04)_0%,transparent_60%)]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
        }}
      />

      <Header>
        <Pill onClick={handleLogin}>Sign in</Pill>
      </Header>

      <div className="relative z-[2] max-w-[520px] mx-auto px-6 py-14 pb-10 flex flex-col items-center text-center flex-1">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 bg-[var(--gold-dim)] border border-[var(--gold-border)] rounded-full px-4 py-[5px] text-[11px] font-bold text-[var(--gold)] tracking-[1.5px] uppercase mb-6 animate-fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          <LiveDot />
          Pool filling now
        </div>

        {/* Hero */}
        <h1
          className="font-playfair font-black text-[clamp(56px,11vw,88px)] tracking-[-3px] leading-[0.95] mb-[10px] animate-fade-up"
          style={{ animationDelay: "0.12s" }}
        >
          Win
          <br />
          <em className="font-dm-serif italic text-[var(--gold)] font-normal text-[1.05em] tracking-[-2px]">
            1 Bitcoin
          </em>
          <br />
          Today.
        </h1>

        <p
          className="text-[15px] text-[var(--muted2)] leading-[1.7] max-w-[360px] mt-[18px] mb-8 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          $5 per ticket. Pool fills → we buy BTC on-chain → raffle at 5 PM EST.
          Fully refundable if the pool doesn&apos;t fill.
        </p>

        {/* Actions */}
        <div
          className="flex flex-col gap-3 w-full max-w-[320px] animate-fade-up"
          style={{ animationDelay: "0.28s" }}
        >
          <Button onClick={handleLogin}>Get Started — It&apos;s Free</Button>

          <div className="flex items-center gap-3 text-[11px] text-[var(--muted)] font-bold tracking-[1px]">
            <span className="flex-1 h-px bg-[var(--border)]" />
            or continue with
            <span className="flex-1 h-px bg-[var(--border)]" />
          </div>

          <div className="flex gap-[10px]">
            <button
              onClick={handleLogin}
              className="flex-1 bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] p-3 font-lato text-[13px] font-bold cursor-pointer rounded-[var(--radius)] transition-all duration-150 flex items-center justify-center gap-2 hover:border-[var(--gold-border)]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
              </svg>
              Google
            </button>
            <button
              onClick={handleLogin}
              className="flex-1 bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] p-3 font-lato text-[13px] font-bold cursor-pointer rounded-[var(--radius)] transition-all duration-150 flex items-center justify-center gap-2 hover:border-[var(--gold-border)]"
            >
              🦊 Wallet
            </button>
          </div>

          <button
            onClick={handleLogin}
            className="bg-transparent text-[var(--muted2)] border-none p-2 font-lato text-[13px] font-bold cursor-pointer transition-colors hover:text-[var(--text)]"
          >
            Already have an account →
          </button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-px w-full bg-[var(--border)] border border-[var(--border)] mt-11 rounded-[var(--radius)] overflow-hidden animate-fade-up"
          style={{ animationDelay: "0.36s" }}
        >
          <div className="bg-[var(--surface)] p-[18px] px-4 text-center">
            <div className="font-playfair font-bold text-[22px] text-[var(--gold)] tracking-tight">
              ${(btcPrice / 1000).toFixed(1)}K
            </div>
            <div className="text-[10px] text-[var(--muted)] font-bold tracking-[0.5px] mt-1 uppercase">
              Today&apos;s Prize
            </div>
          </div>
          <div className="bg-[var(--surface)] p-[18px] px-4 text-center">
            <div className="font-playfair font-bold text-[22px] text-[var(--gold)] tracking-tight">
              {Math.round(poolPct)}%
            </div>
            <div className="text-[10px] text-[var(--muted)] font-bold tracking-[0.5px] mt-1 uppercase">
              Pool Filled
            </div>
          </div>
          <div className="bg-[var(--surface)] p-[18px] px-4 text-center">
            <div className="font-playfair font-bold text-[22px] text-[var(--gold)] tracking-tight">
              {countdown}
            </div>
            <div className="text-[10px] text-[var(--muted)] font-bold tracking-[0.5px] mt-1 uppercase">
              Until Draw
            </div>
          </div>
        </div>
      </div>

      <Toast />
    </div>
  );
}
