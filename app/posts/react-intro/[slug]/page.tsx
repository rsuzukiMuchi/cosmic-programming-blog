import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/code/code-block";
import { MangaImage } from "@/components/manga/manga-image";
import { ReactPlayground } from "@/components/react-intro/react-playground";
import { getReactIntroArticle, reactIntroArticles } from "@/lib/react-intro-series";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const introAlt =
  "娘がノートパソコンを見ながら「Reactってなに？」と聞き、父が「画面の部品箱だよ」と説明する2コマ漫画";

const outroAlt =
  "娘がReactの部品を見て「何度も使える？」と聞き、父が「父も再利用したい」とぼやく2コマ漫画";

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

  const nextArticle = article.next ? getReactIntroArticle(article.next) : undefined;

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
            react intro {String(article.order).padStart(2, "0")}
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-6xl">{article.title}</h1>
          <p className="mt-6 text-lg leading-9 text-slate-300">{article.intro}</p>

          <div className="mt-10">
            {/*
              React入門 共通導入漫画 台本:
              娘「Reactってなに？」
              父「画面の部品箱だよ」
            */}
            <MangaImage alt={introAlt} priority src="/images/manga/why-react-intro.webp" />
          </div>

          <section className="mt-12 border-l-4 border-coral bg-white/[0.04] p-6">
            <h2 className="text-2xl font-bold text-white">結論</h2>
            <p className="mt-4 text-lg leading-9 text-slate-300">{article.conclusion}</p>
          </section>

          {article.demo ? (
            <section className="mt-12 space-y-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral">try first</p>
                <h2 className="mt-3 text-2xl font-bold text-white">まず触ってみる</h2>
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

          <div className="mt-12">
            {/*
              React入門 共通締め漫画 台本:
              娘「何度も使える？」
              父「父も再利用したい」
            */}
            <MangaImage
              alt={outroAlt}
              caption="Reactの部品は再利用できる。父の体力も、できれば再利用したい。"
              src="/images/manga/why-react-outro.webp"
            />
          </div>

          <footer className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              className="rounded-md border border-white/15 px-4 py-3 text-center font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-comet"
              href="/posts/react-intro"
            >
              React入門一覧へ
            </Link>
            {nextArticle ? (
              <Link
                className="rounded-md bg-comet px-4 py-3 text-center font-bold text-slate-950 transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-comet"
                href={`/posts/react-intro/${nextArticle.slug}`}
              >
                次へ: {nextArticle.title}
              </Link>
            ) : null}
          </footer>
        </article>
      </div>
    </main>
  );
}
