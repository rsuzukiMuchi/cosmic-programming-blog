import Link from "next/link";
import { MangaImage } from "@/components/manga/manga-image";
import { OrbitDemo } from "@/components/simulations/orbit-demo";

const introAlt =
  "夜の部屋で娘が「月って落ちないの？」と聞き、父が「落ちてるんだよ」と答える2コマ漫画";

const outroAlt =
  "娘が「落ちながら回る？」と聞き、疲れた父が「父も回復したい」とぼやく2コマ漫画";

export default function SamplePage() {
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
          <nav className="flex flex-wrap gap-2 text-sm text-slate-300" aria-label="サンプルページ内ナビゲーション">
            {[
              ["結論", "#answer"],
              ["歴史", "#history"],
              ["解説", "#explain"],
              ["実験", "#simulation"],
            ].map(([label, href]) => (
              <a
                className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-comet"
                href={href}
                key={href}
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        <article className="mx-auto max-w-3xl py-10 sm:py-14">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-comet">sample article</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-6xl">月はなぜ落ちてこないの？</h1>
          <p className="mt-6 text-lg leading-9 text-slate-300">
            娘に聞かれたら、たぶん最初に固まる問いです。でも大丈夫。まずは「月は落ちていない」のではなく、
            「落ちながら進んでいる」と考えてみます。
          </p>

          <div className="mt-10">
            {/*
              導入漫画 台本:
              娘「月って落ちないの？」
              父「落ちてるんだよ」
            */}
            <MangaImage alt={introAlt} priority src="/images/manga/moon-orbit-intro.webp" />
          </div>

          <section className="mt-12 border-l-4 border-comet bg-white/[0.04] p-6" id="answer">
            <h2 className="text-2xl font-bold text-white">結論</h2>
            <p className="mt-4 text-lg leading-9 text-slate-300">
              月は地球に引っぱられて、ずっと落ち続けています。ただし横向きにも速く進んでいるので、
              地球にぶつからず、地球のまわりを回り続けます。
            </p>
          </section>

          <section className="mt-12 space-y-5" id="history">
            <h2 className="text-2xl font-bold text-white">人類はどう考えたのか</h2>
            <p className="text-base leading-8 text-slate-300">
              昔の人にとって、空の世界と地上の世界は別々のものでした。石は落ちる。けれど月は空にある。
              だから、月には地上とは違う特別なルールがあるように見えたのです。
            </p>
            <p className="text-base leading-8 text-slate-300">
              そこにニュートンが出てきます。りんごが落ちる力と、月を地球へ引っぱる力は同じではないか。
              この見方で、空と地上がひとつのルールでつながりました。
            </p>
          </section>

          <section className="mt-12 space-y-5" id="explain">
            <h2 className="text-2xl font-bold text-white">家のテーブルで説明するなら</h2>
            <p className="text-base leading-8 text-slate-300">
              ボールを前に投げると、前へ進みながら下へ落ちます。もっと速く投げると、遠くまで進んでから落ちます。
              もしものすごく速く投げられたら、地球の丸みに沿って進み続ける。月はこのイメージに近い動きをしています。
            </p>
            <p className="text-base leading-8 text-slate-300">
              つまり、月は「落ちない特別なもの」ではありません。落ちる力と、横へ進む勢いの組み合わせで、
              ぐるぐる回っているのです。
            </p>
          </section>
        </article>

        <div className="mx-auto max-w-4xl py-4" id="simulation">
          <OrbitDemo />
        </div>

        <section className="mx-auto max-w-3xl py-12">
          {/*
            締め漫画 台本:
            娘「落ちながら回る？」
            父「父も回復したい」
          */}
          <MangaImage alt={outroAlt} caption="理解は進んだ。父の体力は、まだ軌道投入できていない。" src="/images/manga/moon-orbit-outro.webp" />
        </section>
      </div>
    </main>
  );
}
