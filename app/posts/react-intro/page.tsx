import Link from "next/link";
import { MangaImage } from "@/components/manga/manga-image";
import { reactIntroArticles, reactIntroSources } from "@/lib/react-intro-series";

export const metadata = {
  title: "React入門 | 宇宙・プログラミング・ぼやき",
  description: "React、TypeScript、Next.js、実践開発までを、父が娘に説明できるところまで学び直す連載。",
};

export default function ReactIntroIndexPage() {
  return (
    <main className="min-h-screen bg-night text-ink">
      <div className="mx-auto max-w-5xl px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            className="text-base font-bold text-white transition hover:text-comet focus:outline-none focus:ring-2 focus:ring-comet"
            href="/"
          >
            宇宙・プログラミング・ぼやき
          </Link>
          <Link
            className="rounded-md border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-comet"
            href="/sample"
          >
            宇宙サンプルへ
          </Link>
        </header>

        <section className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] lg:items-end">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-coral">programming series</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-6xl">React入門</h1>
            <p className="mt-6 text-lg leading-9 text-slate-300">
              React、TypeScript、Next.js、実践開発まで。参考書の目次をもとに、父が娘に説明できる順番へ並べ直しました。
              まずは画面の変化を見て、あとからコードの意味を追います。
            </p>
          </div>
          <MangaImage
            alt="娘がノートパソコンを見ながらReactについて質問し、父が画面の部品箱だと説明する漫画"
            priority
            src="/images/manga/why-react-intro.webp"
          />
        </section>

        <section className="mb-8 rounded-lg border border-white/10 bg-white/[0.04] p-5">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-comet">roadmap</p>
          <h2 className="mt-3 text-2xl font-bold text-white">この順番で読みます</h2>
          <p className="mt-3 text-base leading-8 text-slate-300">
            目次の内容を、初学者向けに「Reactの考え方」「画面を作る基本」「データと状態」「実践開発」の4段階に整理しました。
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-4">
            {["考え方", "部品化", "状態管理", "実践開発"].map((label, index) => (
              <div className="rounded-md border border-white/10 bg-slate-950/70 p-3" key={label}>
                <p className="font-mono text-xs text-slate-500">STEP {index + 1}</p>
                <p className="mt-2 font-bold text-white">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 pb-10 sm:grid-cols-2">
          {reactIntroArticles.map((article) => (
            <Link
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-coral/50 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-coral"
              href={`/posts/react-intro/${article.slug}`}
              key={article.slug}
            >
              <p className="font-mono text-xs text-slate-500">LESSON {String(article.order).padStart(2, "0")}</p>
              <h2 className="mt-3 text-xl font-bold leading-8 text-white">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{article.conclusion}</p>
            </Link>
          ))}
        </section>

        <section className="border-t border-white/10 py-10">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">references</p>
          <h2 className="mt-3 text-2xl font-bold text-white">参考にした目次</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {reactIntroSources.map((source) => (
              <a
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-comet/50 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-comet"
                href={source.url}
                key={source.title}
              >
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
