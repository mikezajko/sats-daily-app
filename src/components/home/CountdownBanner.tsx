"use client";

import { useEffect, useState } from "react";

export function CountdownBanner() {
  const [countdown, setCountdown] = useState("00:00:00");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const draw = new Date();
      draw.setHours(17, 0, 0, 0); // 5 PM

      if (now > draw) {
        draw.setDate(draw.getDate() + 1);
      }

      const diff = draw.getTime() - now.getTime();
      const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
      const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");

      setCountdown(`${h}:${m}:${s}`);
      setDate(
        draw.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      );
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius)] p-4 px-5 flex justify-between items-center">
      <div>
        <div className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.5px] mb-1">
          Draw in
        </div>
        <div className="font-playfair text-[28px] text-[var(--gold)] tracking-tight leading-none">
          {countdown}
        </div>
      </div>
      <div className="text-right">
        <div className="text-xs text-[var(--muted2)] font-bold">{date}</div>
        <div className="text-[11px] text-[var(--muted)] font-bold mt-[3px]">
          5:00 PM EST
        </div>
      </div>
    </div>
  );
}
