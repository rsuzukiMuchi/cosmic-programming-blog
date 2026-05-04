const planets = [
  { name: "水星", size: "h-2 w-2", orbit: "h-20 w-20", color: "bg-slate-300", speed: "animate-[spin_7s_linear_infinite]" },
  { name: "地球", size: "h-3 w-3", orbit: "h-32 w-32", color: "bg-comet", speed: "animate-[spin_12s_linear_infinite]" },
  { name: "火星", size: "h-2.5 w-2.5", orbit: "h-44 w-44", color: "bg-coral", speed: "animate-[spin_18s_linear_infinite]" },
];

export function OrbitDemo() {
  return (
    <section className="grid gap-6 rounded-lg border border-white/10 bg-slate-950/70 p-5 sm:grid-cols-[1fr_1.1fr] sm:p-6">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-comet">tiny simulation</p>
        <h2 className="mt-3 text-2xl font-bold text-white">惑星は「落ちながら外れている」</h2>
        <p className="mt-4 text-base leading-8 text-slate-300">
          太陽に引っぱられているのに、横向きにも進み続ける。その結果、まっすぐ落ちずにぐるりと回る。
          まずはこの感覚だけ持てれば十分、というサンプルです。
        </p>
      </div>
      <div className="relative mx-auto flex aspect-square w-full max-w-72 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(56,189,248,0.14),transparent_60%)]">
        <div className="absolute h-10 w-10 rounded-full bg-orbit shadow-[0_0_36px_rgba(250,204,21,0.5)]" aria-label="太陽" />
        {planets.map((planet) => (
          <div
            aria-label={`${planet.name}の軌道`}
            className={`absolute rounded-full border border-dashed border-white/15 ${planet.orbit} ${planet.speed}`}
            key={planet.name}
          >
            <span className={`absolute left-1/2 top-0 block -translate-x-1/2 rounded-full ${planet.size} ${planet.color}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
