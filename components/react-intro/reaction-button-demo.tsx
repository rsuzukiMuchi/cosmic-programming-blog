"use client";

import { useState } from "react";

export function ReactionButtonDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral">state demo</p>
      <p className="mt-3 text-lg font-bold text-white">わかったボタン: {count}回</p>
      <button
        className="mt-4 rounded-md bg-coral px-4 py-3 font-bold text-slate-950 transition hover:bg-rose-300 focus:outline-none focus:ring-2 focus:ring-coral"
        onClick={() => setCount(count + 1)}
        type="button"
      >
        わかった
      </button>
    </div>
  );
}
