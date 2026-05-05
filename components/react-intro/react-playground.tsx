"use client";

import { useEffect, useMemo, useState } from "react";

type LessonKind = "effect" | "form" | "list" | "profile" | "state";

type Frame = {
  after: string;
  before: string;
  codeLines: string[];
  highlightedLines: number[];
  reactSays: string;
  stateValue: string;
  topics?: string[];
  uiLabel: string;
};

const characters = [
  { job: "なんで？を投げる人", name: "娘" },
  { job: "学び直して説明する人", name: "父" },
];

const topicSets = [
  ["component", "props"],
  ["component", "props", "state"],
  ["component", "props", "state", "effect"],
];

const lessonCopy = {
  effect: {
    signal: "1秒たった",
    state: "seconds",
    title: "外の時間に合わせて表示が変わる",
    ui: "タイマー表示",
  },
  form: {
    signal: "入力文字が変わる",
    state: "name",
    title: "入力値をstateとして覚える",
    ui: "あいさつ文",
  },
  list: {
    signal: "配列が増える",
    state: "topics",
    title: "配列から同じ形の表示を作る",
    ui: "リスト表示",
  },
  profile: {
    signal: "propsを渡す",
    state: "props",
    title: "同じ部品に違う情報を入れる",
    ui: "プロフィールカード",
  },
  state: {
    signal: "setCountを呼ぶ",
    state: "count",
    title: "stateが変わると表示も変わる",
    ui: "カウンター表示",
  },
};

export function ReactPlayground({ kind }: { kind: LessonKind }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
    const timerId = window.setInterval(() => {
      setStep((current) => (current + 1) % 4);
    }, 1800);

    return () => window.clearInterval(timerId);
  }, [kind]);

  const frame = useMemo(() => buildFrame(kind, step), [kind, step]);
  const copy = lessonCopy[kind];

  return (
    <section className="overflow-hidden rounded-lg border border-white/10 bg-slate-950 shadow-glow">
      <div className="border-b border-white/10 px-4 py-3 sm:px-5">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral">visual lesson</p>
        <h2 className="mt-2 text-xl font-bold text-white">{copy.title}</h2>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="border-b border-white/10 p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">react flow</p>
            <span className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-400">自動で変化します</span>
          </div>

          <div className="grid gap-3">
            <FlowBox active={step === 0} label="きっかけ" tone="coral" value={copy.signal} />
            <FlowArrow active={step === 1} />
            <FlowBox active={step === 1} label="Reactが覚える値" tone="comet" value={`${copy.state}: ${frame.stateValue}`} />
            <FlowArrow active={step === 2} />
            <FlowBox active={step === 2} label="再描画" tone="orbit" value="新しい値でコンポーネントをもう一度計算" />
            <FlowArrow active={step === 3} />
            <FlowBox active={step === 3} label={copy.ui} tone="white" value={frame.uiLabel} />
          </div>

          <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">result on screen</p>
            <VisualResult frame={frame} kind={kind} />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <BeforeAfter label="変更前" value={frame.before} />
            <BeforeAfter active label="変更後" value={frame.after} />
          </div>

          <div className="mt-5 rounded-lg border border-comet/30 bg-sky-400/10 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-comet">React says</p>
            <p className="mt-2 text-base font-bold leading-7 text-white">{frame.reactSays}</p>
          </div>
        </div>

        <div className="min-w-0">
          <div className="border-b border-white/10 px-4 py-3">
            <p className="font-mono text-xs text-slate-400">sample.tsx</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">いま関係している行だけ光ります。値が変わる場所と、表示に使われる場所を見ます。</p>
          </div>
          <pre className="max-h-[620px] overflow-auto p-4 text-sm leading-7">
            <code>
              {frame.codeLines.map((line, index) => (
                <span
                  className={`block rounded-sm px-2 transition ${
                    frame.highlightedLines.includes(index + 1) ? "bg-comet/20 text-white ring-1 ring-comet/40" : "text-slate-300"
                  }`}
                  key={`${index}-${line}`}
                >
                  <span className="mr-4 inline-block w-5 select-none text-right text-slate-600">{index + 1}</span>
                  {line || " "}
                </span>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

function buildFrame(kind: LessonKind, step: number): Frame {
  if (kind === "profile") {
    const character = characters[step % characters.length];
    const previousCharacter = characters[(step + characters.length - 1) % characters.length];

    return {
      after: `${character.name}カード`,
      before: `${previousCharacter.name}カード`,
      codeLines: [
        "function ProfileCard({ name, job }) {",
        "  return (",
        "    <article>",
        "      <h2>{name}</h2>",
        "      <p>{job}</p>",
        "    </article>",
        "  );",
        "}",
        "",
        "<ProfileCard",
        `  name="${character.name}"`,
        `  job="${character.job}"`,
        "/>",
      ],
      highlightedLines: step === 0 ? [10, 11, 12] : step === 1 ? [1] : step === 2 ? [4, 5] : [4, 5],
      reactSays: [
        "新しいpropsを受け取ったな。",
        "同じProfileCardをもう一度使うぞ。",
        "propsの値をカードの中に流し込むぞ。",
        "だから表示だけが変わるぞ。",
      ][step],
      stateValue: `name="${character.name}"`,
      uiLabel: `${character.name}カード`,
    };
  }

  if (kind === "form") {
    const names = ["娘", "父", "React"];
    const name = names[step % names.length];
    const previousName = names[(step + names.length - 1) % names.length];

    return {
      after: `name = "${name}"`,
      before: `name = "${previousName}"`,
      codeLines: [
        `const [name, setName] = useState("${name}");`,
        "",
        "return (",
        "  <>",
        "    <input value={name} />",
        "    <p>こんにちは、{name}さん。</p>",
        "  </>",
        ");",
      ],
      highlightedLines: step === 0 ? [5] : step === 1 ? [1] : step === 2 ? [6] : [6],
      reactSays: [
        "入力欄の値が変わったな。",
        "nameというstateを新しい文字にするぞ。",
        "nameを使っている表示をもう一度作るぞ。",
        "あいさつ文が新しいnameになったぞ。",
      ][step],
      stateValue: `"${name}"`,
      uiLabel: `こんにちは、${name}さん。`,
    };
  }

  if (kind === "list") {
    const topics = topicSets[Math.min(step, topicSets.length - 1)];
    const previousTopics = topicSets[Math.max(Math.min(step - 1, topicSets.length - 1), 0)];

    return {
      after: `${topics.length}件`,
      before: `${previousTopics.length}件`,
      codeLines: [
        `const topics = ${JSON.stringify(topics)};`,
        "",
        "return (",
        "  <ul>",
        "    {topics.map((topic) => (",
        "      <li key={topic}>{topic}</li>",
        "    ))}",
        "  </ul>",
        ");",
      ],
      highlightedLines: step === 0 ? [1] : step === 1 ? [5] : step === 2 ? [6] : [6],
      reactSays: [
        "配列の中身を見つけたぞ。",
        "mapで1件ずつ表示に変えるぞ。",
        "liを件数分だけ作るぞ。",
        "配列が増えた分、表示も増えたぞ。",
      ][step],
      stateValue: `[${topics.join(", ")}]`,
      topics,
      uiLabel: `${topics.length}件の項目`,
    };
  }

  if (kind === "effect") {
    const seconds = step + 1;

    return {
      after: `${seconds}秒`,
      before: `${step}秒`,
      codeLines: [
        `const [seconds, setSeconds] = useState(${seconds});`,
        "",
        "useEffect(() => {",
        "  const timerId = setInterval(() => {",
        "    setSeconds((current) => current + 1);",
        "  }, 1000);",
        "",
        "  return () => clearInterval(timerId);",
        "}, []);",
        "",
        "return <p>{seconds}秒</p>;",
      ],
      highlightedLines: step === 0 ? [3, 4] : step === 1 ? [5] : step === 2 ? [1] : [11],
      reactSays: [
        "外のタイマーが動いたな。",
        "setSecondsでsecondsを増やすぞ。",
        "secondsが変わったから再描画するぞ。",
        "新しい秒数を画面に出すぞ。",
      ][step],
      stateValue: String(seconds),
      uiLabel: `${seconds}秒`,
    };
  }

  return {
    after: `count = ${step}`,
    before: `count = ${Math.max(step - 1, 0)}`,
    codeLines: [
      `const [count, setCount] = useState(${step});`,
      "",
      "return (",
      "  <button onClick={() => setCount(count + 1)}>",
      "    わかった: {count}回",
      "  </button>",
      ");",
    ],
    highlightedLines: step === 0 ? [4] : step === 1 ? [1] : step === 2 ? [5] : [5],
    reactSays: [
      "ボタンから更新の合図が来たな。",
      "countの箱を新しい値に入れ替えるぞ。",
      "countを使っている表示をもう一度作るぞ。",
      "画面の数字が新しいcountになったぞ。",
    ][step],
    stateValue: String(step),
    uiLabel: `わかった: ${step}回`,
  };
}

function BeforeAfter({ active = false, label, value }: { active?: boolean; label: string; value: string }) {
  return (
    <div className={`rounded-lg border p-4 ${active ? "border-coral/40 bg-rose-400/10" : "border-white/10 bg-night"}`}>
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className={`mt-2 text-lg font-black ${active ? "text-coral" : "text-slate-300"}`}>{value}</p>
    </div>
  );
}

function FlowBox({ active, label, tone, value }: { active: boolean; label: string; tone: "comet" | "coral" | "orbit" | "white"; value: string }) {
  const toneClass = {
    comet: "border-comet/50 bg-sky-400/10 text-comet",
    coral: "border-coral/50 bg-rose-400/10 text-coral",
    orbit: "border-orbit/50 bg-yellow-300/10 text-orbit",
    white: "border-white/25 bg-white/[0.06] text-white",
  }[tone];

  return (
    <div className={`rounded-lg border p-4 transition ${toneClass} ${active ? "scale-[1.02] shadow-glow" : "opacity-65"}`}>
      <p className="font-mono text-xs uppercase tracking-[0.16em] opacity-75">{label}</p>
      <p className="mt-2 text-lg font-bold leading-7">{value}</p>
    </div>
  );
}

function FlowArrow({ active }: { active: boolean }) {
  return (
    <div className={`flex h-5 items-center justify-center font-mono text-sm transition ${active ? "text-comet" : "text-slate-600"}`} aria-hidden="true">
      ↓
    </div>
  );
}

function VisualResult({ frame, kind }: { frame: Frame; kind: LessonKind }) {
  if (kind === "list") {
    return (
      <ul className="mt-4 grid gap-2">
        {(frame.topics ?? []).map((topic) => (
          <li className="rounded-md border border-white/10 bg-night px-3 py-2 text-slate-300" key={topic}>
            {topic}
          </li>
        ))}
      </ul>
    );
  }

  if (kind === "profile") {
    return (
      <article className="mt-4 rounded-lg border border-white/10 bg-night p-4">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-comet">ProfileCard</p>
        <h3 className="mt-3 text-2xl font-bold text-white">{frame.uiLabel.replace("カード", "")}</h3>
        <p className="mt-2 text-sm text-slate-400">{frame.stateValue}</p>
      </article>
    );
  }

  return <p className="mt-4 rounded-lg border border-white/10 bg-night p-5 text-3xl font-black text-white">{frame.uiLabel}</p>;
}
