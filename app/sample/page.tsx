import Link from "next/link";
import { MangaImage } from "@/components/manga/manga-image";
import { OrbitDemo } from "@/components/simulations/orbit-demo";

const sections = [
  ["結論", "#answer"],
  ["昔の人", "#history"],
  ["たとえ話", "#explain"],
  ["動かす", "#simulation"],
  ["ぼやき", "#ending"],
];

const introAlt =
  "夜の部屋で娘が「月って落ちないの？」と聞き、父が「落ちてるんだよ」と答える2コマ漫画";

const outroAlt =
  "娘が「落ちながら回る？」と聞き、疲れた父が「父も回復したい」とぼやく2コマ漫画";

export default function SamplePage() {
  return (
    <main className="min-h-screen bg-night text-ink">
      <div className="border-b border-white/10 bg-slate-950/80">
        <header className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <Link
            className="text-base font-bold text-white transition hover:text-comet focus:outline-none focus:ring-2 focus:ring-comet"
            href="/"
          >
            宇宙・プログラミング・ぼやき
          </Link>
          <nav className="flex flex-wrap gap-2 text-sm text-slate-300" aria-label="記事内ナビゲーション">
            {sections.map(([label, href]) => (
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
      </div>

      <article className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] lg:items-end">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-comet">sample article</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">
              月はなぜ落ちてこないの？
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-300">
              娘に聞かれたら、少しだけ背筋が伸びる問いです。答えは「月は落ちていない」ではありません。
              むしろ、月はずっと落ちています。
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="rounded-md border border-white/10 px-3 py-2">テーマ: 宇宙</span>
              <span className="rounded-md border border-white/10 px-3 py-2">読む時間: 5分</span>
              <span className="rounded-md border border-white/10 px-3 py-2">対象: 親子で読める</span>
            </div>
          </div>

          <div>
            {/*
              導入漫画 台本:
              娘「月って落ちないの？」
              父「落ちてるんだよ」
            */}
            <MangaImage
              alt={introAlt}
              caption="最初の問いは、短く。漫画のセリフも短く。父の余裕も短く。"
              priority
              src="/images/manga/moon-orbit-intro.webp"
            />
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[180px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-6 border-l border-white/10 pl-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">contents</p>
              <nav className="mt-4 grid gap-2 text-sm text-slate-300" aria-label="目次">
                {sections.map(([label, href]) => (
                  <a className="py-1 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-comet" href={href} key={href}>
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            <section className="border-l-4 border-comet bg-white/[0.04] p-6 sm:p-7" id="answer">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-comet">simple answer</p>
              <h2 className="mt-3 text-2xl font-bold text-white">結論</h2>
              <p className="mt-4 text-lg leading-9 text-slate-300">
                月は地球に引っぱられて、落ち続けています。ただし横向きにも速く進んでいるので、
                地球にぶつからず、地球のまわりを回り続けています。
              </p>
              <p className="mt-4 text-base leading-8 text-slate-400">
                娘にひとことで言うなら、「月は落ちながら、横に進みすぎて地球をよけ続けている」です。
              </p>
            </section>

            <section className="mt-12 space-y-5" id="history">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-orbit">history</p>
              <h2 className="text-2xl font-bold text-white">昔の人は、空と地面を別世界だと思っていた</h2>
              <p className="text-base leading-8 text-slate-300">
                石は落ちる。りんごも落ちる。でも月は空に浮かんでいる。そう見えるので、
                昔の人は「地上のもの」と「空のもの」は、別々のルールで動いていると考えました。
              </p>
              <p className="text-base leading-8 text-slate-300">
                ニュートンのすごさは、難しい式そのものよりも、見方の変化にあります。
                りんごが落ちる力と、月が地球に引っぱられる力は同じではないか。そう考えたことで、
                地上と空がひとつの物語につながりました。
              </p>
            </section>

            <section className="mt-12 space-y-5" id="explain">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral">table talk</p>
              <h2 className="text-2xl font-bold text-white">家で説明するなら、ボールを投げる話でいい</h2>
              <p className="text-base leading-8 text-slate-300">
                ボールを前に投げると、ボールは前へ進みながら下へ落ちます。もっと速く投げると、
                遠くまで進んでから落ちます。ここまでは、子どもにもかなり想像しやすいはずです。
              </p>
              <p className="text-base leading-8 text-slate-300">
                もし、ものすごく速く投げられたらどうなるでしょう。地面へ落ちようとしているのに、
                その間に地球の丸みに沿って先へ進んでしまう。月の動きは、このイメージに近いです。
              </p>
              <div className="border-y border-white/10 py-5">
                <p className="text-base font-bold text-white">父メモ</p>
                <p className="mt-2 text-base leading-8 text-slate-400">
                  ここで「遠心力」や「重力加速度」を出すと、たぶん食卓の空気が落ちます。
                  まずは「落ちる」と「横に進む」の組み合わせだけで十分です。
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>

      <section className="bg-slate-950/70 px-5 py-12 sm:px-8 lg:px-10" id="simulation">
        <div className="mx-auto max-w-4xl">
          <OrbitDemo />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8 lg:px-10" id="ending">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
          <div>
            {/*
              締め漫画 台本:
              娘「落ちながら回る？」
              父「父も回復したい」
            */}
            <MangaImage
              alt={outroAlt}
              caption="理解は進んだ。父の体力は、まだ軌道投入できていない。"
              src="/images/manga/moon-orbit-outro.webp"
            />
          </div>
          <div className="border-l border-white/10 pl-5">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">next question</p>
            <h2 className="mt-3 text-2xl font-bold leading-9 text-white">次は「太陽はどうして燃え続けるの？」へ</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              ひとつ答えられると、次の「なんで？」が来ます。父の学び直しは、だいたい連載形式です。
            </p>
            <Link
              className="mt-6 inline-flex rounded-md border border-white/15 px-4 py-3 font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-comet"
              href="/"
            >
              トップへ戻る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
