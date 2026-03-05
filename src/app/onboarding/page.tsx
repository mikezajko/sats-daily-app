"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { Header } from "@/components/layout/Header";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";

const SLIDES = [
  {
    eyebrow: "Welcome to Sats Daily",
    title: (
      <>
        Win one whole Bitcoin.
        <br />
        <span className="font-dm-serif italic text-[var(--gold)] font-normal">
          Every day.
        </span>
      </>
    ),
    body: (
      <>
        One full Bitcoin — worth over <strong>$94,000</strong> — is raffled off
        every day at 5 PM EST. It only costs <strong>$5</strong> to enter.
      </>
    ),
    callout: {
      icon: "🎟️",
      text: (
        <>
          More tickets = better odds. Each ticket is just{" "}
          <strong className="text-[var(--gold)]">$5</strong>.
        </>
      ),
    },
  },
  {
    eyebrow: "How the pool works",
    title: (
      <>
        We buy Bitcoin
        <br />
        <span className="font-dm-serif italic text-[var(--gold)] font-normal">
          for real.
        </span>
      </>
    ),
    body: (
      <>
        Once enough tickets are sold, the smart contract{" "}
        <strong>automatically buys 1 BTC on-chain</strong>. If the pool
        doesn&apos;t fill, your money rolls over or is refunded.
      </>
    ),
    callout: {
      icon: "🔍",
      text: (
        <>
          Every purchase is{" "}
          <strong className="text-[var(--gold)]">verifiable on-chain</strong>.
          No trust required.
        </>
      ),
    },
  },
  {
    eyebrow: "Refer & earn",
    title: (
      <>
        Invite friends,
        <br />
        <span className="font-dm-serif italic text-[var(--gold)] font-normal">
          win more.
        </span>
      </>
    ),
    body: (
      <>
        Every time someone you refer buys a ticket, you get{" "}
        <strong>one free bonus entry</strong> added to today&apos;s draw
        automatically.
      </>
    ),
    callout: {
      icon: "⚡",
      text: (
        <>
          Bonus entries are{" "}
          <strong className="text-[var(--gold)]">today only</strong> — they
          expire if the pool doesn&apos;t fill.
        </>
      ),
    },
  },
  {
    eyebrow: "The draw",
    title: (
      <>
        5 PM EST.
        <br />
        <span className="font-dm-serif italic text-[var(--gold)] font-normal">
          One winner.
        </span>
      </>
    ),
    body: (
      <>
        Chainlink VRF picks one winner from all active tickets. The Bitcoin goes
        straight to their wallet — no middlemen, fully auditable.
      </>
    ),
    callout: {
      icon: "✅",
      text: (
        <>
          The result is{" "}
          <strong className="text-[var(--gold)]">verifiable on-chain</strong> by
          anyone. Any time.
        </>
      ),
    },
  },
];

export default function OnboardingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const { login } = usePrivy();

  const handleNext = () => {
    if (currentSlide >= SLIDES.length - 1) {
      router.push("/");
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleSkip = () => {
    router.push("/");
  };

  const handleSignIn = () => {
    login();
  };

  const isLastSlide = currentSlide === SLIDES.length - 1;
  const slide = SLIDES[currentSlide];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_80%_30%,rgba(240,165,0,0.06)_0%,transparent_65%),radial-gradient(ellipse_50%_50%_at_10%_80%,rgba(240,165,0,0.04)_0%,transparent_60%)]" />

      <Header>
        <Pill onClick={handleSignIn}>Sign in</Pill>
      </Header>

      <div className="relative z-[2] w-full max-w-[480px] mx-auto px-6 flex-1 flex flex-col">
        {/* Progress dots */}
        <div className="flex justify-center gap-2 pt-6">
          {SLIDES.map((_, i) => (
            <div
              key={i}
              className={`h-[6px] rounded-full transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] border ${
                i < currentSlide
                  ? "w-[6px] bg-[var(--muted)] border-[var(--muted)]"
                  : i === currentSlide
                  ? "w-[22px] bg-[var(--gold)] border-[var(--gold)]"
                  : "w-[6px] bg-[var(--border)] border-[var(--border)]"
              }`}
            />
          ))}
        </div>

        {/* Slide content */}
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-center py-4 overflow-y-auto">
            {/* Meme label */}
            <div className="inline-block self-start text-[9px] font-bold tracking-[2px] uppercase text-[var(--muted)] border border-[var(--border)] px-2 py-[3px] rounded-sm mb-[10px]">
              slide {currentSlide + 1} of {SLIDES.length}
            </div>

            {/* Meme placeholder */}
            <div className="relative rounded-lg overflow-hidden mb-6 border border-[var(--border)] bg-[var(--surface)] h-[180px] flex items-center justify-center">
              <span className="text-6xl opacity-20">🎰</span>
            </div>

            {/* Eyebrow */}
            <div className="text-[11px] font-bold tracking-[2.5px] uppercase text-[var(--gold)] mb-[10px]">
              {slide.eyebrow}
            </div>

            {/* Title */}
            <h2 className="font-playfair font-black text-[clamp(28px,6vw,40px)] tracking-[-1.5px] mb-3 leading-[1.05]">
              {slide.title}
            </h2>

            {/* Body */}
            <p className="text-sm text-[var(--muted2)] leading-[1.7] max-w-[400px]">
              {slide.body}
            </p>

            {/* Callout */}
            <div className="bg-[var(--surface)] border border-[var(--gold-border)] rounded-[var(--radius)] p-[14px] px-4 mt-4 flex items-start gap-3">
              <span className="text-[20px] shrink-0">{slide.callout.icon}</span>
              <span className="text-[13px] text-[var(--muted2)] leading-[1.6]">
                {slide.callout.text}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-4 pb-7 flex flex-col gap-[10px] shrink-0">
          <Button onClick={handleNext}>
            {isLastSlide ? "Get Started →" : "Next →"}
          </Button>
          {!isLastSlide && (
            <div
              onClick={handleSkip}
              className="text-center text-[13px] text-[var(--muted)] font-bold cursor-pointer transition-colors p-1 hover:text-[var(--muted2)]"
            >
              Skip intro
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
