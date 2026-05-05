const topics = ["コンポーネント", "props", "state", "イベント", "リスト表示"];

export function ListDemo() {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-orbit">list demo</p>
      <ul className="mt-4 grid gap-2">
        {topics.map((topic) => (
          <li className="rounded-md border border-white/10 px-3 py-2 text-slate-300" key={topic}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}
