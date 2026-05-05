import Link from "next/link";
import { MangaImage } from "@/components/manga/manga-image";
import { reactIntroArticles, reactIntroLanes, reactIntroSources } from "@/lib/react-intro-series";

export const metadata = {
  title: "React入門 | 宇宙・プログラミング・ぼやき",
  description: "Reactを理解するための知識を、必修A/B/C、実践A/B/C、発展A/Bのロードマップで学ぶ連載。",
};

export default function ReactIntroIndexPage() {
  return (
    <main className="min-h-screen bg-night text-ink">
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <Link className="text-base font-bold text-white transition hover:text-comet focus:outline-none focus:ring-2 focus:ring-comet" href="/">
            宇宙・プログラミング・ぼやき
          </Link>
          <Link className="rounded-md border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-comet" href="/sample">
            宇宙サンプルへ
          </Link>
        </header>

        <section className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] lg:items-end">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-coral">programming series</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-6xl">React入門ロードマップ</h1>
            <p className="mt-6 text-lg leading-9 text-slate-300">
              Reactを用語だけで覚えず、Webの土台から、値、画面、コンポーネント、設計、品質へ積み上げます。
              各記事には操作できる教材を置き、「読む → 押す → 変わる → 理解する」の順で進みます。
            </p>
          </div>
          <MangaImage
            alt="黄色いパーカーの娘と丸眼鏡の父が机でノートパソコンを開き、Reactを一緒に学ぶキャラクター参照画像"
            priority
            src="/images/characters/father-daughter-reference.webp"
          />
        </section>

        <section className="mb-10 rounded-lg border border-white/10 bg-white/[0.04] p-5">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-comet">knowledge map</p>
          <h2 className="mt-3 text-2xl font-bold text-white">この順番で理解を積む</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {reactIntroLanes.map((lane) => (
              <a className="rounded-lg border border-white/10 bg-slate-950/70 p-4 transition hover:border-comet/50" href={`#${lane.id}`} key={lane.id}>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-coral">{lane.label}</p>
                <h3 className="mt-2 text-lg font-bold leading-7 text-white">{lane.short}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{lane.description}</p>
              </a>
            ))}
          </div>
        </section>

        <div className="grid gap-10 pb-10">
          {reactIntroLanes.map((lane) => {
            const articles = reactIntroArticles.filter((article) => article.lane === lane.id);

            return (
              <section className="scroll-mt-8" id={lane.id} key={lane.id}>
                <div className="mb-4 border-b border-white/10 pb-4">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral">{lane.label}</p>
                  <h2 className="mt-2 text-2xl font-bold text-white">{lane.short}</h2>
                  <p className="mt-2 text-base leading-8 text-slate-300">{lane.description}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {articles.map((article) => (
                    <Link
                      className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-coral/50 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-coral"
                      href={`/posts/react-intro/${article.slug}`}
                      key={article.slug}
                    >
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="rounded-md border border-white/10 px-2 py-1 font-mono text-slate-500">LESSON {String(article.order).padStart(2, "0")}</span>
                        <span className="rounded-md border border-comet/30 px-2 py-1 font-bold text-comet">{lane.label}</span>
                      </div>
                      <h3 className="mt-3 text-xl font-bold leading-8 text-white">{article.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-400">{article.conclusion}</p>
                      <dl className="mt-4 grid gap-3 text-sm">
                        <div>
                          <dt className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">前提</dt>
                          <dd className="mt-1 text-slate-300">{article.prerequisites.join(" / ")}</dd>
                        </div>
                        <div>
                          <dt className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">到達目標</dt>
                          <dd className="mt-1 text-slate-300">{article.goals[0]}</dd>
                        </div>
                        <div>
                          <dt className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">操作教材</dt>
                          <dd className="mt-1 text-slate-300">{article.demoTypes.join(" / ")}</dd>
                        </div>
                      </dl>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <section className="border-t border-white/10 py-10">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">references</p>
          <h2 className="mt-3 text-2xl font-bold text-white">参照する公式資料</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {reactIntroSources.map((source) => (
              <a className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-comet/50 hover:bg-white/[0.07]" href={source.url} key={source.title}>
                <h3 className="text-lg font-bold leading-7 text-white">{source.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{source.note}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
