import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/code/code-block";
import { MangaImage } from "@/components/manga/manga-image";
import { ReactPlayground } from "@/components/react-intro/react-playground";
import { getReactIntroArticle, getReactIntroLane, reactIntroArticles } from "@/lib/react-intro-series";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return reactIntroArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getReactIntroArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | React入門`,
    description: article.conclusion,
  };
}

export default async function ReactIntroArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getReactIntroArticle(slug);

  if (!article) {
    notFound();
  }

  const lane = getReactIntroLane(article.lane);
  const nextArticle = article.next ? getReactIntroArticle(article.next) : undefined;
  const readingMinutes = article.order <= 6 ? 22 : 18;

  return (
    <main className="min-h-screen bg-night text-ink">
      <div className="mx-auto max-w-5xl px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <Link className="text-base font-bold text-white transition hover:text-comet focus:outline-none focus:ring-2 focus:ring-comet" href="/">
            宇宙・プログラミング・ぼやき
          </Link>
          <nav className="flex flex-wrap gap-2 text-sm text-slate-300" aria-label="React入門ナビゲーション">
            <Link className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-white" href="/posts/react-intro">
              React入門
            </Link>
            <Link className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-white" href="/sample">
              宇宙サンプル
            </Link>
          </nav>
        </header>

        <article className="mx-auto max-w-3xl py-10 sm:py-14">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-coral">
            {lane?.label ?? "React入門"} / LESSON {String(article.order).padStart(2, "0")}
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-6xl">{article.title}</h1>
          <p className="mt-6 text-lg leading-9 text-slate-300">{article.intro}</p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-400">
            <span className="rounded-md border border-white/10 px-3 py-2">{lane?.short ?? "React入門"}</span>
            <span className="rounded-md border border-white/10 px-3 py-2">読了目安 {readingMinutes}分</span>
            <span className="rounded-md border border-white/10 px-3 py-2">読む + 触る</span>
          </div>

          <div className="mt-10">
            {/*
              React入門 導入漫画 台本:
              {article.manga.introScript.join("\n              ")}
            */}
            <MangaImage alt={article.manga.introAlt} priority src={article.manga.introSrc} />
          </div>

          <section className="mt-12 space-y-5">
            <h2 className="text-2xl font-bold text-white">問い</h2>
            <p className="text-base leading-8 text-slate-300">{article.intro}</p>
          </section>

          <section className="mt-12 border-l-4 border-coral bg-white/[0.04] p-6">
            <h2 className="text-2xl font-bold text-white">結論</h2>
            <p className="mt-4 text-lg leading-9 text-slate-300">{article.conclusion}</p>
          </section>

          <section className="mt-12 space-y-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-comet">reader guide</p>
              <h2 className="mt-3 text-2xl font-bold text-white">この章の読み方</h2>
            </div>
            <div className="grid gap-3">
              <GuideCard label="初心者はここを掴む" value={article.readerGuide.beginner} />
              <GuideCard label="中級者はここを見る" value={article.readerGuide.intermediate} />
              <GuideCard label="画面で試すこと" value={article.readerGuide.handsOn} />
            </div>
          </section>

          <section className="mt-12 space-y-5">
            <div className="rounded-lg border border-comet/30 bg-sky-400/10 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-comet">before reading</p>
              <h2 className="mt-3 text-2xl font-bold text-white">まず、この地図だけ持って読む</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{article.lesson}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["きっかけ", "クリック、入力、時間、データ取得など、画面が変わる入口を見る。"],
                ["値", "props、state、配列、条件など、表示の材料を見る。"],
                ["画面", "Reactが値から作った表示結果を確認する。"],
              ].map(([title, note], index) => (
                <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4" key={title}>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-coral">STEP {index + 1}</p>
                  <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">plain words</p>
            <h2 className="mt-3 text-2xl font-bold text-white">用語を父の言葉に直す</h2>
            <dl className="mt-4 grid gap-3">
              {article.vocabulary.map((word) => (
                <div className="grid gap-2 border-t border-white/10 pt-3 sm:grid-cols-[8rem_minmax(0,1fr)]" key={word.term}>
                  <dt className="font-bold text-white">{word.term}</dt>
                  <dd className="text-base leading-7 text-slate-300">{word.meaning}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-12 grid gap-4">
            <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-comet">today's goal</p>
              <h2 className="mt-3 text-2xl font-bold text-white">今日できるようになること</h2>
              <ul className="mt-4 grid gap-2">
                {article.goals.map((goal) => (
                  <li className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-base leading-7 text-slate-300" key={goal}>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-coral/30 bg-rose-400/10 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral">interactive types</p>
              <h2 className="mt-3 text-2xl font-bold text-white">操作できる教材</h2>
              <p className="mt-3 text-base leading-8 text-slate-300">{article.demoTypes.join(" / ")}</p>
            </div>
          </section>

          {article.demo ? (
            <section className="mt-12 space-y-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral">watch the change</p>
                <h2 className="mt-3 text-2xl font-bold text-white">画面の変化を見る</h2>
              </div>
              <p className="text-base leading-8 text-slate-300">{article.lesson}</p>
              <ReactPlayground kind={article.demo} />
            </section>
          ) : null}

          {article.sections.map((section) => (
            <section className="mt-12 space-y-5" key={section.title}>
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p className="text-base leading-8 text-slate-300" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              {section.code ? <CodeBlock code={section.code.value} filename={section.code.filename} /> : null}
            </section>
          ))}

          <section className="mt-12 rounded-lg border border-orbit/30 bg-yellow-300/10 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-orbit">chapter summary</p>
            <h2 className="mt-3 text-2xl font-bold text-white">この章のまとめ</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">{article.conclusion}</p>
          </section>

          <section className="mt-12 space-y-5">
            <h2 className="text-2xl font-bold text-white">よくあるつまずき</h2>
            <div className="grid gap-3">
              {article.pitfalls.map((pitfall) => (
                <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4" key={pitfall}>
                  <p className="text-base leading-8 text-slate-300">{pitfall}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 space-y-5">
            <h2 className="text-2xl font-bold text-white">小さな練習問題</h2>
            <ol className="grid list-decimal gap-3 pl-5">
              {article.exercises.map((exercise) => (
                <li className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-base leading-8 text-slate-300" key={exercise}>
                  {exercise}
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-12 border-y border-white/10 py-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">official docs connection</p>
            <h2 className="mt-3 text-2xl font-bold text-white">React公式ではどこにあたるか</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">{article.official}</p>
            <a className="mt-5 inline-flex rounded-md border border-white/15 px-4 py-3 font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-comet" href="https://ja.react.dev/learn">
              React公式 Learn を見る
            </a>
          </section>

          <div className="mt-12">
            {/*
              React入門 締め漫画 台本:
              {article.manga.outroScript.join("\n              ")}
            */}
            <MangaImage alt={article.manga.outroAlt} caption="分かったことを、家のテーブルで説明できるくらいまで小さくする。" src={article.manga.outroSrc} />
          </div>

          <footer className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link className="rounded-md border border-white/15 px-4 py-3 text-center font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-comet" href="/posts/react-intro">
              React入門一覧へ
            </Link>
            {nextArticle ? (
              <Link className="rounded-md bg-comet px-4 py-3 text-center font-bold text-slate-950 transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-comet" href={`/posts/react-intro/${nextArticle.slug}`}>
                次へ: {nextArticle.title}
              </Link>
            ) : null}
          </footer>
        </article>
      </div>
    </main>
  );
}

function GuideCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <h3 className="text-lg font-bold text-white">{label}</h3>
      <p className="mt-2 text-base leading-8 text-slate-300">{value}</p>
    </div>
  );
}
