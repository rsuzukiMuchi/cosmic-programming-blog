import { DialogueBlock } from "@/components/dialogue/dialogue-block";
import { OrbitDemo } from "@/components/simulations/orbit-demo";

const introLines = [
  { speaker: "daughter" as const, text: "ねえ、なんで月って落ちてこないの？" },
  { speaker: "father" as const, text: "落ちてる。たぶん今も落ちてる。父の語彙力も一緒に落ちてる。" },
  { speaker: "daughter" as const, text: "落ちてるのに、なんでぶつからないの？" },
];

const outroLines = [
  { speaker: "daughter" as const, text: "つまり、月はずっと地球に向かって落ちてるけど、横にも進んでるってこと？" },
  { speaker: "father" as const, text: "そう。説明できた気がする。寝かしつけ前の父としては、かなりの勝利。" },
];

const posts = [
  { title: "月はなぜ落ちてこないの？", href: "/sample", label: "SPACE" },
  { title: "なぜReactが選ばれるのか", href: "/posts/why-react", label: "PROGRAMMING" },
  { title: "太陽はどうして燃え続けるの？", href: "#記事", label: "NEXT" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-night">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.12),transparent_24%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <a className="text-lg font-bold text-white" href="#top">
            宇宙・プログラミング・ぼやき
          </a>
          <nav className="flex flex-wrap gap-2 text-sm text-slate-300" aria-label="メインナビゲーション">
            {["記事", "漫画", "シミュレーション", "About"].map((item) => (
              <a
                className="rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-comet"
                href={`#${item}`}
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>
        </header>

        <section className="grid min-h-[70vh] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]" id="top">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-comet">learning again for one question</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">
              いつか来る娘の「なんで？」に答えたい父の学び直しブログ
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-300">
              宇宙、科学の歴史、プログラミング、子育てのぼやき。難しい話を、家のテーブルで説明できるくらいまで小さくします。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-md bg-comet px-5 py-3 font-bold text-slate-950 transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-night focus:ring-comet"
                href="/sample"
              >
                サンプル記事を読む
              </a>
              <a
                className="rounded-md border border-white/15 px-5 py-3 font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-comet"
                href="#記事"
              >
                記事一覧を見る
              </a>
            </div>
          </div>
          <DialogueBlock lines={introLines} />
        </section>

        <section className="grid gap-4 py-8 sm:grid-cols-3" id="記事">
          {posts.map((post, index) => (
            <a
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-comet/50 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-comet"
              href={post.href}
              key={post.title}
            >
              <p className="font-mono text-xs text-slate-500">POST 0{index + 1}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-comet">{post.label}</p>
              <h2 className="mt-3 text-xl font-bold leading-8 text-white">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">問いから始めて、漫画、歴史、解説へ進む記事の見本です。</p>
            </a>
          ))}
        </section>

        <article className="mx-auto max-w-3xl py-12" id="sample">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-orbit">sample article</p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">月はなぜ落ちてこないの？</h2>
          <div className="mt-8" id="漫画">
            <DialogueBlock lines={introLines} />
          </div>

          <section className="mt-10 rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-2xl font-bold text-white">結論</h3>
            <p className="mt-4 text-lg leading-9 text-slate-300">
              月は地球に引っぱられて落ち続けています。ただし横向きにも進んでいるので、地球にぶつからず、地球のまわりを回り続けます。
            </p>
          </section>

          <section className="mt-10 space-y-5">
            <h3 className="text-2xl font-bold text-white">歴史</h3>
            <p className="text-base leading-8 text-slate-300">
              昔の人は、空の世界と地上の世界は別ものだと考えていました。けれどニュートンは、りんごが落ちる力と月を引っぱる力は同じではないか、と考えます。
            </p>
            <p className="text-base leading-8 text-slate-300">
              ここで大事なのは、名前を覚えることよりも「地上の出来事と空の出来事を、同じルールで見た」ことです。
            </p>
          </section>

          <section className="mt-10 space-y-5">
            <h3 className="text-2xl font-bold text-white">解説</h3>
            <p className="text-base leading-8 text-slate-300">
              ボールを前に投げると、ボールは前へ進みながら下へ落ちます。ものすごく速く投げられたら、地面に落ちる前に地球の丸みに沿って進み続ける。
              月もそれに近い動きをしています。
            </p>
          </section>
        </article>

        <div className="mx-auto max-w-4xl py-8" id="シミュレーション">
          <OrbitDemo />
        </div>

        <section className="mx-auto max-w-3xl py-10">
          <DialogueBlock lines={outroLines} />
        </section>

        <section className="mx-auto max-w-3xl border-t border-white/10 py-10" id="About">
          <h2 className="text-2xl font-bold text-white">About</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            専門家ではない父が、娘に説明できるところまで学び直すブログです。完璧な解説より、今日ひとつ分かることを大事にします。
          </p>
        </section>
      </div>
    </main>
  );
}
