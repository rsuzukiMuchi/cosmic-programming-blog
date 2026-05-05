"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { ReactIntroDemoKind } from "@/lib/react-intro-series";

type DemoProps = {
  kind: ReactIntroDemoKind;
};

const demoTitles: Record<ReactIntroDemoKind, string> = {
  atomicDesign: "部品を小さい順に並べて見る",
  componentProps: "同じ部品に違うpropsを渡す",
  conditional: "条件で表示を切り替える",
  customHook: "同じロジックを複数UIで使う",
  effect: "外の時間とstateを同期する",
  event: "イベントが画面変化の入口になる",
  form: "入力欄とstateをつなぐ",
  jsx: "JSXの波かっこに値を入れる",
  list: "配列から複数の表示を作る",
  state: "stateが変わると画面も変わる",
  storybook: "部品の状態を並べて確認する",
  storyshots: "差分に気づく方法を比べる",
  uiLibrary: "UIライブラリのtrade-offを見る",
};

export function ReactPlayground({ kind }: DemoProps) {
  return (
    <section className="overflow-hidden rounded-lg border border-white/10 bg-slate-950 shadow-glow">
      <div className="border-b border-white/10 px-4 py-3 sm:px-5">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral">interactive lesson</p>
        <h2 className="mt-2 text-xl font-bold text-white">{demoTitles[kind]}</h2>
      </div>
      {kind === "event" ? <EventDemo /> : null}
      {kind === "jsx" ? <JsxDemo /> : null}
      {kind === "componentProps" ? <ComponentPropsDemo /> : null}
      {kind === "state" ? <StateDemo /> : null}
      {kind === "form" ? <FormDemo /> : null}
      {kind === "list" ? <ListDemo /> : null}
      {kind === "conditional" ? <ConditionalDemo /> : null}
      {kind === "effect" ? <EffectDemo /> : null}
      {kind === "atomicDesign" ? <AtomicDesignDemo /> : null}
      {kind === "uiLibrary" ? <UiLibraryDemo /> : null}
      {kind === "storybook" ? <StorybookDemo /> : null}
      {kind === "storyshots" ? <StoryshotsDemo /> : null}
      {kind === "customHook" ? <CustomHookDemo /> : null}
    </section>
  );
}

function EventDemo() {
  const [count, setCount] = useState(0);
  const logs = [`onClick発火`, `clickCount = ${count}`, `DOMの表示: ${count}回`];

  return (
    <DemoShell
      code={`<button onClick={handleClick}>押す</button>

function handleClick() {
  setCount((current) => current + 1);
}`}
      logs={logs}
      state={`clickCount: ${count}`}
    >
      <button className="rounded-md bg-comet px-4 py-3 font-bold text-slate-950" onClick={() => setCount((current) => current + 1)} type="button">
        押す
      </button>
      <Result label="画面" value={`${count}回押した`} />
    </DemoShell>
  );
}

function JsxDemo() {
  const [name, setName] = useState("娘");
  const [count, setCount] = useState(2);
  const message = count > 0 ? "学習中" : "まだこれから";

  return (
    <DemoShell
      code={`const name = "${name}";
const count = ${count};
const message = count > 0 ? "学習中" : "まだこれから";

return <p>{name}は{message}: {count}個</p>;`}
      logs={[`nameを"${name}"として表示`, `count + 条件式をJSXへ差し込み`]}
      state={`name: "${name}", count: ${count}`}
    >
      <label className="grid gap-2 text-sm text-slate-300">
        表示名
        <input className="rounded-md border border-white/10 bg-night px-3 py-3 text-white" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <div className="flex gap-2">
        <button className="rounded-md border border-white/15 px-3 py-2 text-white" onClick={() => setCount((current) => Math.max(0, current - 1))} type="button">
          減らす
        </button>
        <button className="rounded-md bg-comet px-3 py-2 font-bold text-slate-950" onClick={() => setCount((current) => current + 1)} type="button">
          増やす
        </button>
      </div>
      <Result label="JSXの表示" value={`${name || "名前なし"}は${message}: ${count}個`} />
    </DemoShell>
  );
}

function ComponentPropsDemo() {
  const [active, setActive] = useState<"daughter" | "father">("daughter");
  const person = active === "daughter" ? { name: "娘", job: "なんで？係" } : { name: "父", job: "説明を練習する係" };

  return (
    <DemoShell
      code={`function ProfileCard({ name, job }) {
  return <article>{name}: {job}</article>;
}

<ProfileCard name="${person.name}" job="${person.job}" />`}
      logs={[`親がpropsを選ぶ`, `name="${person.name}"`, `job="${person.job}"`]}
      state={`props: ${person.name}`}
    >
      <Segmented
        items={[
          ["daughter", "娘"],
          ["father", "父"],
        ]}
        value={active}
        onChange={(value) => setActive(value as "daughter" | "father")}
      />
      <article className="rounded-lg border border-white/10 bg-night p-4">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-comet">ProfileCard</p>
        <h3 className="mt-3 text-2xl font-bold text-white">{person.name}</h3>
        <p className="mt-2 text-slate-300">{person.job}</p>
      </article>
    </DemoShell>
  );
}

function StateDemo() {
  const [count, setCount] = useState(0);
  const [last, setLast] = useState("まだ操作なし");

  function change(next: number, label: string) {
    setCount(next);
    setLast(label);
  }

  return (
    <DemoShell
      code={`const [count, setCount] = useState(${count});

<button onClick={() => setCount(count + 1)}>
  {count}回押した
</button>`}
      logs={[last, `count = ${count}`, `再描画して ${count}回 を表示`]}
      state={`count: ${count}`}
    >
      <div className="flex flex-wrap gap-2">
        <button className="rounded-md bg-comet px-4 py-3 font-bold text-slate-950" onClick={() => change(count + 1, "onClickでsetCount(+1)")} type="button">
          増やす
        </button>
        <button className="rounded-md border border-white/15 px-4 py-3 text-white" onClick={() => change(0, "resetで初期値へ")} type="button">
          リセット
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Result label="変更前" value={last === "まだ操作なし" ? "なし" : last} />
        <Result label="変更後" value={`${count}回押した`} active />
      </div>
    </DemoShell>
  );
}

function FormDemo() {
  const [name, setName] = useState("");
  const displayName = name || "名前なし";

  return (
    <DemoShell
      code={`const [name, setName] = useState("${name}");

<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>

<p>こんにちは、{name || "名前なし"}さん。</p>`}
      logs={[`onChange発火`, `name = "${name}"`, `プレビューも同じstateを見る`]}
      state={`name: "${name}"`}
    >
      <label className="grid gap-2 text-sm text-slate-300">
        名前
        <input className="rounded-md border border-white/10 bg-night px-3 py-3 text-white" value={name} onChange={(event) => setName(event.target.value)} placeholder="名前を入力" />
      </label>
      <button className="w-fit rounded-md border border-white/15 px-3 py-2 text-white" onClick={() => setName("")} type="button">
        リセット
      </button>
      <Result label="プレビュー" value={`こんにちは、${displayName}さん。`} active />
    </DemoShell>
  );
}

function ListDemo() {
  const [topics, setTopics] = useState(["component", "props", "state"]);
  const nextTopic = ["event", "form", "effect", "hook"][topics.length - 3] ?? `topic-${topics.length + 1}`;

  return (
    <DemoShell
      code={`const topics = ${JSON.stringify(topics)};

return (
  <ul>
    {topics.map((topic) => (
      <li key={topic}>{topic}</li>
    ))}
  </ul>
);`}
      logs={[`topics.length = ${topics.length}`, `mapで${topics.length}件のliを作る`, `keyはtopic文字列`]}
      state={`topics: [${topics.join(", ")}]`}
    >
      <div className="flex flex-wrap gap-2">
        <button className="rounded-md bg-comet px-4 py-3 font-bold text-slate-950" onClick={() => setTopics((current) => [...current, nextTopic])} type="button">
          追加
        </button>
        <button className="rounded-md border border-white/15 px-4 py-3 text-white" onClick={() => setTopics((current) => current.slice(0, -1))} type="button">
          削除
        </button>
      </div>
      {topics.length === 0 ? <Result label="空状態" value="項目はまだありません" /> : null}
      <ul className="grid gap-2">
        {topics.map((topic) => (
          <li className="rounded-md border border-white/10 bg-night px-3 py-2 text-slate-300" key={topic}>
            <span className="font-mono text-xs text-comet">key={topic}</span> {topic}
          </li>
        ))}
      </ul>
    </DemoShell>
  );
}

function ConditionalDemo() {
  const [status, setStatus] = useState("loading");
  const text = status === "loading" ? "読み込み中です" : status === "error" ? "うまく読めませんでした" : "表示できました";

  return (
    <DemoShell
      code={`if (status === "loading") return <p>読み込み中です</p>;
if (status === "error") return <p>うまく読めませんでした</p>;

return <p>表示できました</p>;`}
      logs={[`status = "${status}"`, "条件に合うJSXだけ返す"]}
      state={`status: ${status}`}
    >
      <Segmented
        items={[
          ["loading", "loading"],
          ["success", "success"],
          ["error", "error"],
        ]}
        value={status}
        onChange={setStatus}
      />
      <Result label="条件付き表示" value={text} active={status === "success"} />
    </DemoShell>
  );
}

function EffectDemo() {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!running) return;
    const timerId = window.setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);
    return () => window.clearInterval(timerId);
  }, [running]);

  return (
    <DemoShell
      code={`useEffect(() => {
  if (!running) return;

  const timerId = setInterval(() => {
    setSeconds((current) => current + 1);
  }, 1000);

  return () => clearInterval(timerId);
}, [running]);`}
      logs={[running ? "外のタイマーが動いている" : "タイマー停止中", `seconds = ${seconds}`, running ? "cleanupは停止時に実行" : "外側との同期なし"]}
      state={`running: ${running}, seconds: ${seconds}`}
    >
      <div className="flex flex-wrap gap-2">
        <button className="rounded-md bg-comet px-4 py-3 font-bold text-slate-950" onClick={() => setRunning((current) => !current)} type="button">
          {running ? "停止" : "開始"}
        </button>
        <button className="rounded-md border border-white/15 px-4 py-3 text-white" onClick={() => setSeconds(0)} type="button">
          リセット
        </button>
      </div>
      <Result label="タイマー表示" value={`${seconds}秒`} active={running} />
    </DemoShell>
  );
}

function AtomicDesignDemo() {
  const [level, setLevel] = useState("molecules");
  const notes: Record<string, string> = {
    atoms: "Button / Input: これ以上分けると読みにくい小さな部品",
    molecules: "SearchForm: ButtonとInputを組み合わせた意味のある部品",
    organisms: "ArticleList: 複数のカードをまとめた画面の一部",
  };

  return (
    <DemoShell code={`atoms -> Button, Input
molecules -> SearchForm
organisms -> ArticleList

分ければ正解ではなく、名前で理解しやすくなる単位で分ける。`} logs={[notes[level]]} state={`selected: ${level}`}>
      <Segmented
        items={[
          ["atoms", "atoms"],
          ["molecules", "molecules"],
          ["organisms", "organisms"],
        ]}
        value={level}
        onChange={setLevel}
      />
      <Result label="父の言葉" value={notes[level]} active />
    </DemoShell>
  );
}

function UiLibraryDemo() {
  const [library, setLibrary] = useState("shadcn/ui");
  const map: Record<string, string> = {
    "shadcn/ui": "見た目を持ち帰って自分のコードとして調整しやすい",
    MUI: "完成度が高く、業務UIを早く作りやすい",
    "Tailwindのみ": "自由度は高いが、状態やアクセシビリティを自分で見ます",
  };

  return (
    <DemoShell code={`比較軸:
- 見た目の完成度
- カスタマイズ性
- アクセシビリティ
- 学習コスト
- 依存の重さ`} logs={[map[library]]} state={`choice: ${library}`}>
      <Segmented
        items={[
          ["shadcn/ui", "shadcn/ui"],
          ["MUI", "MUI"],
          ["Tailwindのみ", "Tailwind"],
        ]}
        value={library}
        onChange={setLibrary}
      />
      <Result label="trade-off" value={map[library]} active />
    </DemoShell>
  );
}

function StorybookDemo() {
  const [story, setStory] = useState("normal");
  const storyText: Record<string, string> = {
    normal: "通常状態。まず基本の見た目を見る。",
    loading: "送信中。押せるのか、文言は十分かを見る。",
    disabled: "無効状態。コントラストと操作不可が伝わるかを見る。",
    error: "失敗状態。次に何をすればよいかを見る。",
  };

  return (
    <DemoShell code={`export const Normal = {};
export const Loading = {};
export const Disabled = {};
export const Error = {};

Storybookは部品だけを机の上に出す作業台。`} logs={[storyText[story]]} state={`story: ${story}`}>
      <Segmented
        items={[
          ["normal", "normal"],
          ["loading", "loading"],
          ["disabled", "disabled"],
          ["error", "error"],
        ]}
        value={story}
        onChange={setStory}
      />
      <Result label="Story" value={storyText[story]} active />
    </DemoShell>
  );
}

function StoryshotsDemo() {
  return (
    <DemoShell
      code={`Storyshots:
  旧: Storyをスナップショット化
  現在: 非推奨・メンテナンス終了扱い

現代的な代替:
  Storybook test-runner
  Portable Stories
  visual regression testing`}
      logs={["差分には気づける", "正しいUIかは人間が見る", "現代的な代替へつなげる"]}
      state="Storyshots: deprecated"
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <Result label="Storyshots" value="非推奨" />
        <Result label="test-runner" value="操作と検証" active />
        <Result label="visual" value="見た目差分" active />
      </div>
    </DemoShell>
  );
}

function CustomHookDemo() {
  const counterA = useCounter(0);
  const counterB = useCounter(10);

  return (
    <DemoShell
      code={`function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);
  return {
    count,
    increment: () => setCount((current) => current + 1),
    reset: () => setCount(initialValue),
  };
}

const small = useCounter(0);
const large = useCounter(10);`}
      logs={["同じuseCounterを2つのUIで使う", `small = ${counterA.count}`, `large = ${counterB.count}`]}
      state={`small: ${counterA.count}, large: ${counterB.count}`}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <CounterCard label="小さいカウンター" {...counterA} />
        <CounterCard label="大きいカウンター" {...counterB} />
      </div>
    </DemoShell>
  );
}

function useCounter(initialValue: number) {
  const [count, setCount] = useState(initialValue);
  return useMemo(
    () => ({
      count,
      increment: () => setCount((current) => current + 1),
      reset: () => setCount(initialValue),
    }),
    [count, initialValue],
  );
}

function CounterCard({ count, increment, label, reset }: { count: number; increment: () => void; label: string; reset: () => void }) {
  return (
    <div className="rounded-lg border border-white/10 bg-night p-4">
      <p className="font-bold text-white">{label}</p>
      <p className="mt-2 text-3xl font-black text-comet">{count}</p>
      <div className="mt-3 flex gap-2">
        <button className="rounded-md bg-comet px-3 py-2 font-bold text-slate-950" onClick={increment} type="button">
          増やす
        </button>
        <button className="rounded-md border border-white/15 px-3 py-2 text-white" onClick={reset} type="button">
          戻す
        </button>
      </div>
    </div>
  );
}

function DemoShell({ children, code, logs, state }: { children: ReactNode; code: string; logs: string[]; state: string }) {
  return (
    <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="space-y-5 border-b border-white/10 p-4 sm:p-5 lg:border-b-0 lg:border-r">
        <div className="rounded-lg border border-comet/30 bg-sky-400/10 p-4">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-comet">state / props</p>
          <p className="mt-2 break-words text-lg font-bold leading-7 text-white">{state}</p>
        </div>
        {children}
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">event log</p>
          <ol className="mt-3 grid gap-2">
            {logs.map((log, index) => (
              <li className="rounded-md border border-white/10 bg-night px-3 py-2 text-sm text-slate-300" key={`${index}-${log}`}>
                {index + 1}. {log}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="min-w-0">
        <div className="border-b border-white/10 px-4 py-3">
          <p className="font-mono text-xs text-slate-400">sample.tsx</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">操作に関係する値、イベント、表示だけを短く抜き出しています。</p>
        </div>
        <pre className="max-h-[620px] overflow-auto p-4 text-sm leading-7 text-slate-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

function Result({ active = false, label, value }: { active?: boolean; label: string; value: string }) {
  return (
    <div className={`rounded-lg border p-4 ${active ? "border-coral/40 bg-rose-400/10" : "border-white/10 bg-night"}`}>
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className={`mt-2 text-lg font-black leading-7 ${active ? "text-coral" : "text-white"}`}>{value}</p>
    </div>
  );
}

function Segmented({ items, onChange, value }: { items: Array<[string, string]>; onChange: (value: string) => void; value: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(([itemValue, label]) => (
        <button
          aria-pressed={value === itemValue}
          className={`rounded-md border px-3 py-2 text-sm font-bold transition ${
            value === itemValue ? "border-comet bg-comet text-slate-950" : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10"
          }`}
          key={itemValue}
          onClick={() => onChange(itemValue)}
          type="button"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
