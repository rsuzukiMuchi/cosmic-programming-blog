"use client";

import { useState } from "react";

export function NameFormDemo() {
  const [name, setName] = useState("娘");

  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <label className="block text-sm font-bold text-white" htmlFor="demo-name">
        名前
      </label>
      <input
        className="mt-3 w-full rounded-md border border-white/10 bg-night px-3 py-3 text-white outline-none focus:ring-2 focus:ring-comet"
        id="demo-name"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <p className="mt-4 text-base leading-7 text-slate-300">こんにちは、{name || "名前なし"}さん。</p>
    </div>
  );
}
