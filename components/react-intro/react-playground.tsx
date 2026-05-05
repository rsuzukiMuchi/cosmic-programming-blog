"use client";

import { useEffect, useMemo, useState } from "react";

type PlaygroundKind = "effect" | "form" | "list" | "profile" | "state";

const characterJobs = {
  daughter: { job: "なんで？を投げる人", name: "娘" },
  father: { job: "学び直して説明する人", name: "父" },
};

const starterTopics = ["コンポーネント", "props", "state"];

export function ReactPlayground({ kind }: { kind: PlaygroundKind }) {
  const [character, setCharacter] = useState<keyof typeof characterJobs>("daughter");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("娘");
  const [topics, setTopics] = useState(starterTopics);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) {
      return;
    }

    const timerId = window.setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [running]);

  const selectedCharacter = characterJobs[character];
  const code = useMemo(
    () =>
      getCode({
        character: selectedCharacter,
        count,
        name,
        topics,
      })[kind],
    [count, kind, name, selectedCharacter, topics],
  );

  return (
    <section className="overflow-hidden rounded-lg border border-white/10 bg-slate-950 shadow-glow">
      <div className="border-b border-white/10 px-4 py-3 sm:px-5">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral">live playground</p>
        <h2 className="mt-2 text-xl font-bold text-white">コードのとなりで動きを見る</h2>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="border-b border-white/10 p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">preview</p>
            <span className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-400">操作できます</span>
          </div>
          <Preview
            character={character}
            count={count}
            name={name}
            running={running}
            seconds={seconds}
            setCharacter={setCharacter}
            setCount={setCount}
            setName={setName}
            setRunning={setRunning}
            setSeconds={setSeconds}
            setTopics={setTopics}
            topics={topics}
            type={kind}
          />
        </div>

        <div className="min-w-0">
          <div className="border-b border-white/10 px-4 py-3 font-mono text-xs text-slate-400">sample.tsx</div>
          <pre className="max-h-[520px] overflow-auto p-4 text-sm leading-7 text-slate-200">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

type PreviewProps = {
  character: keyof typeof characterJobs;
  count: number;
  name: string;
  running: boolean;
  seconds: number;
  setCharacter: (character: keyof typeof characterJobs) => void;
  setCount: (count: number) => void;
  setName: (name: string) => void;
  setRunning: (running: boolean) => void;
  setSeconds: (seconds: number) => void;
  setTopics: (topics: string[]) => void;
  topics: string[];
  type: PlaygroundKind;
};

function Preview(props: PreviewProps) {
  if (props.type === "state") {
    return (
      <div>
        <p className="text-base leading-8 text-slate-300">ボタンを押すと、countというstateが増えて画面が描き直されます。</p>
        <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-5">
          <p className="text-3xl font-black text-white">{props.count}</p>
          <p className="mt-2 text-sm text-slate-400">わかった回数</p>
          <button
            className="mt-4 rounded-md bg-coral px-4 py-3 font-bold text-slate-950 transition hover:bg-rose-300 focus:outline-none focus:ring-2 focus:ring-coral"
            onClick={() => props.setCount(props.count + 1)}
            type="button"
          >
            わかった
          </button>
        </div>
      </div>
    );
  }

  if (props.type === "form") {
    return (
      <div>
        <p className="text-base leading-8 text-slate-300">入力欄を変えると、nameというstateが変わり、下の文章も同時に変わります。</p>
        <label className="mt-5 block text-sm font-bold text-white" htmlFor="playground-name">
          名前
        </label>
        <input
          className="mt-3 w-full rounded-md border border-white/10 bg-night px-3 py-3 text-white outline-none focus:ring-2 focus:ring-comet"
          id="playground-name"
          onChange={(event) => props.setName(event.target.value)}
          value={props.name}
        />
        <p className="mt-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-lg font-bold text-white">
          こんにちは、{props.name || "名前なし"}さん。
        </p>
      </div>
    );
  }

  if (props.type === "list") {
    return (
      <div>
        <p className="text-base leading-8 text-slate-300">配列の中身を増やすと、mapで表示される行も増えます。</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            className="rounded-md bg-orbit px-4 py-3 font-bold text-slate-950 transition hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-orbit"
            onClick={() => props.setTopics([...props.topics, `項目${props.topics.length + 1}`])}
            type="button"
          >
            追加
          </button>
          <button
            className="rounded-md border border-white/15 px-4 py-3 font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orbit"
            onClick={() => props.setTopics(starterTopics)}
            type="button"
          >
            戻す
          </button>
        </div>
        <ul className="mt-4 grid gap-2">
          {props.topics.map((topic) => (
            <li className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-slate-300" key={topic}>
              {topic}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (props.type === "effect") {
    return (
      <div>
        <p className="text-base leading-8 text-slate-300">タイマーはReactの外側で動くものです。useEffectで開始し、止める時に片付けます。</p>
        <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-5">
          <p className="text-3xl font-black text-white">{props.seconds}秒</p>
          <p className="mt-2 text-sm text-slate-400">ページの外側の時間と同期しています</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              className="rounded-md bg-comet px-4 py-3 font-bold text-slate-950 transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-comet"
              onClick={() => props.setRunning(!props.running)}
              type="button"
            >
              {props.running ? "止める" : "動かす"}
            </button>
            <button
              className="rounded-md border border-white/15 px-4 py-3 font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-comet"
              onClick={() => props.setSeconds(0)}
              type="button"
            >
              リセット
            </button>
          </div>
        </div>
      </div>
    );
  }

  const selectedCharacter = characterJobs[props.character];

  return (
    <div>
      <p className="text-base leading-8 text-slate-300">同じProfileCardに違うpropsを渡すと、同じ形のまま中身だけ変わります。</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {Object.entries(characterJobs).map(([key, character]) => (
          <button
            className={`rounded-md px-4 py-3 font-bold transition focus:outline-none focus:ring-2 focus:ring-comet ${
              props.character === key ? "bg-comet text-slate-950" : "border border-white/15 text-white hover:bg-white/10"
            }`}
            key={key}
            onClick={() => props.setCharacter(key as keyof typeof characterJobs)}
            type="button"
          >
            {character.name}
          </button>
        ))}
      </div>
      <article className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-5">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-comet">ProfileCard</p>
        <h3 className="mt-3 text-2xl font-bold text-white">{selectedCharacter.name}</h3>
        <p className="mt-2 text-base leading-7 text-slate-300">{selectedCharacter.job}</p>
      </article>
    </div>
  );
}

function getCode({
  character,
  count,
  name,
  topics,
}: {
  character: { job: string; name: string };
  count: number;
  name: string;
  topics: string[];
}) {
  return {
    profile: `type ProfileCardProps = {
  name: string;
  job: string;
};

function ProfileCard({ name, job }: ProfileCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{job}</p>
    </article>
  );
}

<ProfileCard
  name="${character.name}"
  job="${character.job}"
/>`,
    state: `"use client";

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(${count});

  return (
    <button onClick={() => setCount(count + 1)}>
      わかった: {count}回
    </button>
  );
}`,
    form: `"use client";

import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("${name}");

  return (
    <>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>こんにちは、{name}さん。</p>
    </>
  );
}`,
    list: `const topics = ${JSON.stringify(topics, null, 2)};

function TopicList() {
  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic}>{topic}</li>
      ))}
    </ul>
  );
}`,
    effect: `"use client";

import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(timerId);
  }, []);

  return <p>{seconds}秒</p>;
}`,
  };
}
