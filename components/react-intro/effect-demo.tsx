"use client";

import { useEffect, useState } from "react";

export function EffectDemo() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(timerId);
  }, []);

  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-comet">effect demo</p>
      <p className="mt-3 text-lg font-bold text-white">ページを開いてから {seconds} 秒</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">画面の外側の時間に合わせて、Reactの表示を更新しています。</p>
    </div>
  );
}
