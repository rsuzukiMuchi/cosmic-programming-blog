import Link from "next/link";
import { MangaImage } from "@/components/manga/manga-image";
import { reactIntroArticles } from "@/lib/react-intro-series";

export const metadata = {
  title: "React入門 | 宇宙・プログラミング・ぼやき",
  description: "父が娘に説明できるところまで、Reactの基本を学び直す連載。",
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
              なぜReactが選ばれるのかから、コンポーネント、props、state、イベント、リスト、useEffectまで。
              父が娘に説明できるところまで、少しずつ学び直します。
            </p>
          </div>
          <MangaImage
            alt="娘がノートパソコンを見ながらReactについて質問し、父が画面の部品箱だと説明する漫画"
            priority
            src="/images/manga/why-react-intro.webp"
          />
        </section>

        <section className="grid gap-4 pb-14 sm:grid-cols-2">
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
      </div>
    </main>
  );
}
