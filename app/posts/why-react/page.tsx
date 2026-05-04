import Link from "next/link";
import { MangaImage } from "@/components/manga/manga-image";

const introAlt =
  "娘がノートパソコンを見ながら「Reactってなに？」と聞き、父が「画面の部品箱だよ」と説明する2コマ漫画";

const outroAlt =
  "娘がReactの部品を見て「何度も使える？」と聞き、父が「父も再利用したい」とぼやく2コマ漫画";

const reasons = [
  {
    title: "画面を部品として考えられる",
    body: "ボタン、記事カード、ヘッダー、入力欄。画面に出てくる小さなまとまりを、部品として作れます。一度作った部品を何度も使えるので、大きな画面でも考えやすくなります。",
  },
  {
    title: "状態の変化に強い",
    body: "ログイン中かどうか、カートに何個入っているか、検索中かどうか。Webアプリは、状態が変わるたびに画面も変わります。Reactはその変化を扱いやすくしてくれます。",
  },
  {
    title: "使っている人が多い",
    body: "利用者が多い技術は、情報、ライブラリ、仕事、相談相手が見つかりやすいです。初心者にとっても、つまずいた時に検索しやすいのは大きな助けになります。",
  },
];

export default function WhyReactPage() {
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

        <article className="mx-auto max-w-3xl py-10 sm:py-14">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-coral">programming article 01</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-6xl">なぜReactが選ばれるのか</h1>
          <p className="mt-6 text-lg leading-9 text-slate-300">
            プログラミングを学び直そうとすると、かなり早い段階でReactという名前に出会います。
            でも、最初の疑問はこれです。なぜ、そんなにReactが選ばれるのでしょうか。
          </p>

          <div className="mt-10">
            {/*
              導入漫画 台本:
              娘「Reactってなに？」
              父「画面の部品箱だよ」
            */}
            <MangaImage alt={introAlt} priority src="/images/manga/why-react-intro.webp" />
          </div>

          <section className="mt-12 border-l-4 border-coral bg-white/[0.04] p-6">
            <h2 className="text-2xl font-bold text-white">結論</h2>
            <p className="mt-4 text-lg leading-9 text-slate-300">
              Reactが選ばれる理由は、画面を「部品の組み合わせ」として作れるからです。
              そして、その部品が増えても、変化しても、整理しながら育てやすいからです。
            </p>
          </section>

          <section className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold text-white">まず、Web画面はすぐ散らかる</h2>
            <p className="text-base leading-8 text-slate-300">
              最初は小さなページでも、ボタンを増やし、一覧を作り、フォームを足し、ログイン状態を出すうちに、
              画面の中身はすぐ複雑になります。
            </p>
            <p className="text-base leading-8 text-slate-300">
              料理で言えば、材料を全部まな板の上に広げたまま作るようなものです。最初は見えます。
              でも、家族全員分の夕食になると、どこに何があるか分からなくなります。
            </p>
          </section>

          <section className="mt-12 space-y-5">
            <h2 className="text-2xl font-bold text-white">Reactが助けてくれること</h2>
            <div className="grid gap-4">
              {reasons.map((reason, index) => (
                <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5" key={reason.title}>
                  <p className="font-mono text-xs text-slate-500">REASON {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-xl font-bold leading-8 text-white">{reason.title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-300">{reason.body}</p>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-12 space-y-5">
            <h2 className="text-2xl font-bold text-white">娘に説明するなら</h2>
            <p className="text-base leading-8 text-slate-300">
              Reactは、画面を作るための部品箱です。ボタンという部品、カードという部品、メニューという部品を作り、
              それらを組み合わせてページを作ります。
            </p>
            <p className="text-base leading-8 text-slate-300">
              レゴに近いです。ひとつひとつのブロックは小さいけれど、組み合わせると家にも車にもなります。
              Reactも、小さな部品を組み合わせて、大きなWebアプリを作ります。
            </p>
          </section>

          <section className="mt-12 border-y border-white/10 py-6">
            <h2 className="text-2xl font-bold text-white">次に学ぶとよさそうなこと</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              まずは「コンポーネント」という考え方から始めるのがよさそうです。
              画面の部品をひとつ作り、それを何度も表示する。Reactらしさは、ここから見えてきます。
            </p>
          </section>

          <div className="mt-12">
            {/*
              締め漫画 台本:
              娘「何度も使える？」
              父「父も再利用したい」
            */}
            <MangaImage
              alt={outroAlt}
              caption="部品は再利用できる。父の体力も、できれば再利用したい。"
              src="/images/manga/why-react-outro.webp"
            />
          </div>
        </article>
      </div>
    </main>
  );
}
