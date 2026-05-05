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

const articleExtras: Record<
  string,
  {
    build: string;
    exercises: string[];
    goals: string[];
    official: string;
    pitfalls: string[];
  }
> = {
  "why-react": {
    build: "ボタン、カード、一覧を別々の部品として見分ける小さな画面を作ります。",
    goals: ["Reactを選ぶ理由を「流行」ではなく「画面を整理する力」として説明できる", "コンポーネント、props、stateが何を担当するか大まかに言える", "Reactは画面を直接いじるのではなく、値から表示を作ると理解する"],
    official: "React公式Learnの入口では、コンポーネント、JSX、props、stateなどを順番に学ぶ構成になっています。この連載も、その流れを親子向けに噛み砕きます。",
    pitfalls: ["ReactをWebサイト全部入りの道具だと思う: Reactは主にUIを作るライブラリです。ルーティングやサーバー処理はNext.jsなどと組み合わせます。", "最初から設計を完璧にしようとする: まずは小さな部品を作り、必要になったら分けます。"],
    exercises: ["普段見るWeb画面から、ボタン、カード、フォーム、一覧を3つ探す", "その画面をReactのコンポーネント名にすると何になるか書く", "Reactを一言で説明するなら何と言うか、自分の言葉で書く"],
  },
  "mental-model": {
    build: "countという値が変わり、Reactがもう一度画面を作り直す流れを、図解で追います。",
    goals: ["stateが変わると再描画が起きると説明できる", "画面は現在の値から作られる結果だと理解する", "Reactがすべてを手作業で書き換えているわけではないと分かる"],
    official: "公式Learnの「State: コンポーネントのメモリ」や「レンダーとコミット」の考え方に近い内容です。",
    pitfalls: ["画面の文字だけを直そうとする: Reactでは表示の元になる値を変えます。", "再描画を重いものとして怖がる: まずはReactの基本動作として受け止めます。最適化は後で十分です。"],
    exercises: ["countが0から1になると、画面のどこが変わるか説明する", "値、コンポーネント、表示結果の3つを矢印でつなぐ", "自分のアプリでstateになりそうなものを3つ挙げる"],
  },
  jsx: {
    build: "名前を変えると表示も変わる、あいさつカードを作ります。",
    goals: ["JSXがHTMLそのものではなくJavaScriptの中の画面表現だと分かる", "波かっこで値を表示に差し込める", "classNameなどHTMLとの違いを少し知る"],
    official: "公式Learnの「マークアップをJSXで書く」「波括弧を使ってJSX内でJavaScriptを使う」に対応します。",
    pitfalls: ["JSXを文字列テンプレートだと思う: JSXはReactが理解する画面の設計図です。", "returnの中に複数要素をそのまま並べる: ひとつの親要素かFragmentで包みます。"],
    exercises: ["const name = '父' を '娘' に変えたら表示がどう変わるか考える", "h1とpを含む自己紹介カードをJSXで書く", "classをclassNameに直す練習をする"],
  },
  components: {
    build: "GreetingとProfileCardを作り、ページの中で何度も呼び出します。",
    goals: ["コンポーネントを画面の部品として説明できる", "関数がJSXを返す形に慣れる", "いつ部品に分けるとよいか判断できる"],
    official: "公式Learnの「最初のコンポーネント」「コンポーネントのインポートとエクスポート」に近い内容です。",
    pitfalls: ["小文字でコンポーネント名を書いてしまう: 自作コンポーネントは大文字で始めます。", "何でも細かく分けすぎる: 名前を付けると読みやすくなる単位で分けます。"],
    exercises: ["Header、ArticleCard、Footerという3つの部品名を考える", "Greetingを2回表示するコードを書く", "いまのページからコンポーネントに分けられそうな場所を探す"],
  },
  props: {
    build: "同じProfileCardに、父と娘の違うデータを渡して表示を変えます。",
    goals: ["propsは親から子へ渡す値だと説明できる", "同じ部品を違う中身で再利用できると分かる", "propsにTypeScriptの型を付ける意味が分かる"],
    official: "公式Learnの「コンポーネントにpropsを渡す」に対応します。",
    pitfalls: ["子コンポーネント側でpropsを書き換えようとする: propsは受け取る値として扱います。", "propsが増えすぎる: 役割が大きくなりすぎたサインかもしれません。"],
    exercises: ["ProfileCardにnameとjobを渡す", "Buttonにlabelを渡して表示を変える", "propsの型をtypeで書いてみる"],
  },
  state: {
    build: "カウンターを作り、countの箱が変わると表示も変わる流れを見ます。",
    goals: ["stateはコンポーネントが覚える値だと説明できる", "setState系の関数で更新する理由が分かる", "直接代入ではなく更新関数を使う感覚を持つ"],
    official: "公式Learnの「State: コンポーネントのメモリ」「state内のオブジェクトの更新」に進む前の土台です。",
    pitfalls: ["count = count + 1 と直接書く: Reactに更新を知らせられません。", "前の値を使う更新で古い値に引っかかる: 必要に応じて setCount(current => current + 1) を使います。"],
    exercises: ["countの初期値を5にしたら最初の表示がどうなるか考える", "増やすボタンと戻すボタンを設計する", "stateになりそうな値とpropsでよさそうな値を分ける"],
  },
  "events-and-forms": {
    build: "名前入力欄とプレビューを作り、入力値がstateになって表示に反映される流れを見ます。",
    goals: ["onClickとonChangeがユーザー操作の合図だと分かる", "フォームのvalueとstateをつなぐ意味が分かる", "入力値を別の表示に使えると理解する"],
    official: "公式Learnの「イベントへの応答」「stateを用いて入力に反応する」に対応します。",
    pitfalls: ["onClick={handleClick()} と書く: すぐ実行されてしまいます。関数そのものを渡します。", "inputのvalueだけ書いてonChangeを書かない: 入力できないフォームになります。"],
    exercises: ["入力欄の値をh2にも表示する", "空文字なら「名前なし」と表示する", "送信ボタンを押した時の処理を言葉で設計する"],
  },
  lists: {
    build: "学習トピックの配列をmapでリスト表示します。",
    goals: ["配列から画面を作る感覚を持つ", "mapが1件ずつJSXへ変換する処理だと分かる", "keyが項目を見分ける名札だと理解する"],
    official: "公式Learnの「リストのレンダー」に対応します。",
    pitfalls: ["keyを書かない: Reactが項目を見分けにくくなります。", "とりあえずindexをkeyにする: 並び替えや削除があるリストでは避けたいです。"],
    exercises: ["topics配列にuseEffectを追加する", "記事タイトルの配列からカード一覧を作る", "keyに使えそうな値を考える"],
  },
  "conditional-rendering": {
    build: "読み込み中、成功、エラーの3つの状態で表示を切り替えます。",
    goals: ["条件によって返すJSXを変えられる", "loadingやerrorのような状態を画面に反映できる", "長い条件分岐は読みやすく分けると分かる"],
    official: "公式Learnの「条件付きレンダー」に対応します。",
    pitfalls: ["三項演算子を深くネストする: 読みにくくなったらifで分けます。", "条件を表示側だけでごまかす: 元になる状態を整理します。"],
    exercises: ["loadingがtrueなら読み込み中を表示する", "items.lengthが0なら空メッセージを表示する", "ログイン済み/未ログインの表示を考える"],
  },
  "use-effect": {
    build: "タイマーを作り、外の時間がstateを通じて画面に反映される流れを見ます。",
    goals: ["useEffectは外の世界と同期する場所だと分かる", "タイマーやAPI取得など、Reactの外側の処理を意識できる", "後片付けが必要な処理を見分けられる"],
    official: "公式Learnの「エフェクトと同期」「エフェクトは必要ないかもしれない」に関わる内容です。",
    pitfalls: ["何でもuseEffectに入れる: 表示用の計算だけなら普通の変数でよいことがあります。", "後片付けを書かない: タイマーやイベント購読が残り続ける原因になります。"],
    exercises: ["1秒ごとに増える値がどこで更新されるか説明する", "タイマーを止める処理を考える", "useEffectを使わなくてよい処理を1つ探す"],
  },
  "hooks-and-context": {
    build: "カウンター処理をuseCounterに切り出し、複数の部品から使える形を考えます。",
    goals: ["HooksはReactの機能を使う入口だと分かる", "カスタムHookで処理に名前を付けられる", "Contextは共通値の配達ルートだと理解する"],
    official: "公式LearnのHooks関連トピックと、Contextで深く値を渡す考え方につながります。",
    pitfalls: ["カスタムHookを早く作りすぎる: まず重複や役割が見えてからで十分です。", "何でもContextに入れる: 追いにくくなるので本当に共通の値に絞ります。"],
    exercises: ["useCounterという名前から何を返すか想像する", "テーマ色をContextで渡すならどこで使うか考える", "見た目の部品と動きのHookを分ける例を書く"],
  },
  typescript: {
    build: "ProfileCardのpropsに型を付け、間違った値を渡しにくくします。",
    goals: ["TypeScriptは値の形を約束する道具だと分かる", "propsの型を読める", "APIデータの形を型にする意味が分かる"],
    official: "React公式Learn自体はJavaScript中心ですが、実践書ではTypeScriptと組み合わせて安全に開発する流れが重視されています。",
    pitfalls: ["anyで全部逃げる: 最初は楽でも、後で何が入るか分からなくなります。", "難しい型から覚えようとする: propsとAPIレスポンスの型からで十分です。"],
    exercises: ["name: string、age: numberの型を書く", "ButtonPropsにlabelとonClickを追加する", "配列の型 string[] を使ってみる"],
  },
  nextjs: {
    build: "Reactの部品をNext.jsのページとして配置し、URLで見られる形にします。",
    goals: ["ReactとNext.jsの役割の違いを説明できる", "App RouterではフォルダがURLになると分かる", "Server ComponentとClient Componentの違いをざっくり理解する"],
    official: "参考書の目次でもNext.jsによるアプリ開発が扱われています。このブログ自体もNext.js App Routerで作っています。",
    pitfalls: ["ReactとNext.jsを同じものだと思う: ReactはUI、Next.jsはアプリの土台です。", "全部にuse clientを書く: まずサーバーで描けるものはサーバー側に置きます。"],
    exercises: ["app/about/page.tsx がどのURLになるか考える", "useStateが必要な部品にだけuse clientを書く", "記事一覧ページの部品分けを考える"],
  },
  "component-design-and-quality": {
    build: "記事カード、ボタン、フォームを部品に分け、公開前に見る観点を整理します。",
    goals: ["実践開発では設計と品質もReact開発の一部だと分かる", "テスト、Storybook、アクセシビリティ、SEOの役割を知る", "小さく作って確認する流れを持つ"],
    official: "公式Learnで基礎を押さえたあと、実践書の目次にある設計、テスト、リリース改善へ進む位置づけです。",
    pitfalls: ["最初から大規模設計を持ち込む: 小さく作り、必要になったら整理します。", "見た目だけ確認する: キーボード操作、読み上げ、エラー状態も見ます。"],
    exercises: ["今あるページからButton、Card、Layoutを探す", "1つのコンポーネントにテストしたい条件を3つ書く", "公開前チェックリストを自分用に作る"],
  },
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

  const nextArticle = article.next ? getReactIntroArticle(article.next) : undefined;
  const extra = articleExtras[article.slug];
  const readingMinutes = article.order <= 3 ? 12 : 8;

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
          <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-400">
            <span className="rounded-md border border-white/10 px-3 py-2">React入門</span>
            <span className="rounded-md border border-white/10 px-3 py-2">LESSON {String(article.order).padStart(2, "0")}</span>
            <span className="rounded-md border border-white/10 px-3 py-2">読了目安 {readingMinutes}分</span>
            <span className="rounded-md border border-white/10 px-3 py-2">読む + 見る</span>
          </div>

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

          {extra ? (
            <section className="mt-12 grid gap-4">
              <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-comet">today's goal</p>
                <h2 className="mt-3 text-2xl font-bold text-white">今日できるようになること</h2>
                <ul className="mt-4 grid gap-2">
                  {extra.goals.map((goal) => (
                    <li className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-base leading-7 text-slate-300" key={goal}>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-coral/30 bg-rose-400/10 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral">what we build</p>
                <h2 className="mt-3 text-2xl font-bold text-white">この記事で作るもの</h2>
                <p className="mt-3 text-base leading-8 text-slate-300">{extra.build}</p>
              </div>
            </section>
          ) : null}

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

          {extra ? (
            <>
              <section className="mt-12 rounded-lg border border-orbit/30 bg-yellow-300/10 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-orbit">chapter summary</p>
                <h2 className="mt-3 text-2xl font-bold text-white">この章のまとめ</h2>
                <p className="mt-4 text-base leading-8 text-slate-300">{article.conclusion}</p>
                <p className="mt-3 text-base leading-8 text-slate-300">{article.lesson}</p>
              </section>

              <section className="mt-12 space-y-5">
                <h2 className="text-2xl font-bold text-white">よくあるつまずき</h2>
                <div className="grid gap-3">
                  {extra.pitfalls.map((pitfall) => (
                    <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4" key={pitfall}>
                      <p className="text-base leading-8 text-slate-300">{pitfall}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12 space-y-5">
                <h2 className="text-2xl font-bold text-white">小さな練習問題</h2>
                <ol className="grid list-decimal gap-3 pl-5">
                  {extra.exercises.map((exercise) => (
                    <li className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-base leading-8 text-slate-300" key={exercise}>
                      {exercise}
                    </li>
                  ))}
                </ol>
              </section>

              <section className="mt-12 border-y border-white/10 py-6">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">official docs connection</p>
                <h2 className="mt-3 text-2xl font-bold text-white">React公式ではどこにあたるか</h2>
                <p className="mt-4 text-base leading-8 text-slate-300">{extra.official}</p>
                <a
                  className="mt-5 inline-flex rounded-md border border-white/15 px-4 py-3 font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-comet"
                  href="https://ja.react.dev/learn"
                >
                  React公式 Learn を見る
                </a>
              </section>
            </>
          ) : null}

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
