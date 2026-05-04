type Line = {
  speaker: "daughter" | "father";
  text: string;
};

type DialogueBlockProps = {
  lines: Line[];
  title?: string;
};

const speakerLabel = {
  daughter: "娘",
  father: "父",
};

const speakerName = {
  daughter: "むすめ",
  father: "父",
};

const panelStyle = {
  daughter: "border-coral/40 bg-[linear-gradient(135deg,rgba(251,113,133,0.14),rgba(15,23,42,0.88))]",
  father: "border-comet/40 bg-[linear-gradient(135deg,rgba(56,189,248,0.14),rgba(15,23,42,0.88))]",
};

const faceStyle = {
  daughter: "border-coral/50 bg-rose-950/80",
  father: "border-comet/50 bg-sky-950/80",
};

export function DialogueBlock({ lines, title = "父娘の会話" }: DialogueBlockProps) {
  return (
    <section className="rounded-lg border border-white/15 bg-slate-950 p-3 shadow-glow sm:p-4">
      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">manga scene</p>
          <h2 className="mt-1 text-lg font-black text-white">{title}</h2>
        </div>
        <div className="rounded border border-white/15 px-2 py-1 font-mono text-xs text-slate-400">4 koma</div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {lines.map((line, index) => (
          <article
            className={`relative min-h-52 overflow-hidden rounded-md border p-4 ${panelStyle[line.speaker]}`}
            key={`${line.speaker}-${index}`}
          >
            <div className="absolute inset-0 manga-tone opacity-35" aria-hidden="true" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="rounded-sm bg-white px-2 py-1 font-mono text-xs font-bold text-slate-950">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rounded-sm border border-white/15 bg-slate-950/70 px-2 py-1 text-xs font-bold text-slate-300">
                {speakerName[line.speaker]}
              </span>
            </div>
            <div
              className={`relative z-10 mt-4 flex items-end gap-4 ${
                line.speaker === "father" ? "flex-row-reverse" : ""
              }`}
            >
              <div className="min-w-0 flex-1">
                <p
                  className={`speech-bubble ${
                    line.speaker === "father" ? "speech-bubble-right" : "speech-bubble-left"
                  }`}
                >
                  {line.text}
                </p>
              </div>
              <CharacterFace speaker={line.speaker} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CharacterFace({ speaker }: { speaker: Line["speaker"] }) {
  const isDaughter = speaker === "daughter";

  return (
    <div className="shrink-0 text-center" aria-hidden="true">
      <div className={`relative mx-auto h-24 w-20 rounded-t-full border ${faceStyle[speaker]}`}>
        <span className="absolute left-3 top-9 h-2 w-2 rounded-full bg-white" />
        <span className="absolute right-3 top-9 h-2 w-2 rounded-full bg-white" />
        <span className="absolute bottom-8 left-1/2 h-1.5 w-6 -translate-x-1/2 rounded-full bg-white/80" />
        {isDaughter ? (
          <>
            <span className="absolute -left-3 top-5 h-8 w-5 rounded-full bg-coral/70" />
            <span className="absolute -right-3 top-5 h-8 w-5 rounded-full bg-coral/70" />
          </>
        ) : (
          <span className="absolute -top-2 left-1/2 h-5 w-12 -translate-x-1/2 rounded-t-full bg-comet/60" />
        )}
      </div>
      <div className="mx-auto h-12 w-24 rounded-t-3xl border border-white/10 bg-white/10" />
      <p className="mt-1 text-xs font-bold text-slate-400">{speakerLabel[speaker]}</p>
    </div>
  );
}
