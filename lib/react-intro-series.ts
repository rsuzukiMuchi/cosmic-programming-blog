export type ReactIntroLaneId = "required-a" | "required-b" | "required-c" | "practice-a" | "practice-b" | "practice-c" | "advanced-a" | "advanced-b";

export type ReactIntroDemoKind =
  | "atomicDesign"
  | "componentProps"
  | "conditional"
  | "customHook"
  | "effect"
  | "event"
  | "form"
  | "jsx"
  | "list"
  | "state"
  | "storybook"
  | "storyshots"
  | "uiLibrary";

export type ReactIntroArticle = {
  conclusion: string;
  demo?: ReactIntroDemoKind;
  demoTypes: string[];
  exercises: string[];
  goals: string[];
  intro: string;
  lane: ReactIntroLaneId;
  lesson: string;
  readerGuide: {
    beginner: string;
    handsOn: string;
    intermediate: string;
  };
  manga: {
    introAlt: string;
    introScript: string[];
    introSrc: string;
    outroAlt: string;
    outroScript: string[];
    outroSrc: string;
  };
  next?: string;
  official: string;
  order: number;
  prerequisites: string[];
  sections: Array<{
    body: string[];
    code?: {
      filename?: string;
      value: string;
    };
    title: string;
  }>;
  slug: string;
  title: string;
  vocabulary: Array<{
    meaning: string;
    term: string;
  }>;
  pitfalls: string[];
};

export const reactIntroLanes: Array<{
  description: string;
  id: ReactIntroLaneId;
  label: string;
  short: string;
}> = [
  { id: "required-a", label: "必修A", short: "Web / JavaScriptの前提", description: "Reactに入る前に、ブラウザ、HTML、JavaScriptの値とイベントをそろえます。" },
  { id: "required-b", label: "必修B", short: "Reactの中心概念", description: "component、JSX、props、state、event、listを画面の変化で理解します。" },
  { id: "required-c", label: "必修C", short: "state設計とデータの流れ", description: "stateをどこに置くか、入力、条件分岐、単方向データフローを学びます。" },
  { id: "practice-a", label: "実践A", short: "UIパターン", description: "フォーム、タブ、検索、空状態など、よくある画面の型を作ります。" },
  { id: "practice-b", label: "実践B", short: "データ取得とNext.js", description: "fetch、API、Server/Client Component、Next.js App Routerへ進みます。" },
  { id: "practice-c", label: "実践C", short: "コンポーネント設計", description: "props設計、children、Atomic Design、UIライブラリ比較を扱います。" },
  { id: "advanced-a", label: "発展A", short: "品質・テスト・アクセシビリティ", description: "Storybook、test-runner、visual regression、アクセシビリティを整理します。" },
  { id: "advanced-b", label: "発展B", short: "Hooks応用・状態管理", description: "custom hook、Context、reducer、最適化を必要になってから使う順で扱います。" },
];

export const reactIntroSources = [
  {
    title: "React 公式ドキュメント Learn",
    url: "https://ja.react.dev/learn",
    note: "コンポーネント、JSX、props、条件付きレンダー、リスト、イベント、state、Effectsなどの公式ガイド。",
  },
  {
    title: "Storybook Docs",
    url: "https://storybook.js.org/docs",
    note: "コンポーネントをページから切り離して確認し、test-runnerやvisual regressionへつなげるための公式資料。",
  },
  {
    title: "Next.js App Router Docs",
    url: "https://nextjs.org/docs/app",
    note: "ReactをWebアプリとして公開するためのルーティング、Server Component、データ取得の公式資料。",
  },
];

const commonManga = {
  introAlt: "黄色いパーカーの娘がノートパソコンを見てReactの疑問を出し、丸眼鏡の父が短く答える漫画",
  introScript: ["娘「なんで動くの？」", "父「値を見るんだ」"],
  introSrc: "/images/characters/father-daughter-reference.webp",
  outroAlt: "娘が画面の変化に納得し、父が学び直しの大変さを少しぼやく漫画",
  outroScript: ["娘「少し見えた！」", "父「父も再描画中」"],
  outroSrc: "/images/characters/father-daughter-reference.webp",
};

export const reactIntroArticles: ReactIntroArticle[] = [
  {
    slug: "web-and-js-before-react",
    order: 1,
    lane: "required-a",
    title: "Reactの前に、ブラウザは何をしているの？",
    intro: "なんでボタンを押すと画面が変わるの？ Reactの前に、ブラウザ、HTML、CSS、JavaScriptの役割を小さくそろえます。",
    conclusion: "Reactはブラウザの上で動きます。だからまず、HTMLが構造、CSSが見た目、JavaScriptが動き、DOMが画面の実体だと見るのが近道です。",
    lesson: "ボタンを押すと、イベントが起き、値が変わり、画面に反映される流れを見ます。",
    readerGuide: {
      beginner: "まずはHTML、CSS、JavaScript、DOMを暗記せずに役割で分けます。Reactはその上に乗る道具だと分かれば十分です。",
      intermediate: "中級者は、ReactがDOM操作を完全に消すのではなく、DOM更新の考え方を抽象化している点まで見ると後のrender理解につながります。",
      handsOn: "ボタンを押してイベントログを見ます。クリックというきっかけが、値の更新と表示の変化へつながる順番を確認します。",
    },
    demo: "event",
    demoTypes: ["ボタン", "イベントログ", "DOM表示の変化"],
    prerequisites: ["Webページを見たことがある", "HTMLタグを少し見たことがある"],
    goals: ["HTML、CSS、JavaScriptの役割を分けて言える", "イベントをユーザー操作の合図として説明できる", "Reactがブラウザの上で動くと分かる"],
    vocabulary: [
      { term: "HTML", meaning: "画面の骨組み。見出し、文章、ボタンなどの置き場所。" },
      { term: "DOM", meaning: "ブラウザが持っている画面の実体。JavaScriptが触れる画面の木。" },
      { term: "イベント", meaning: "クリックや入力の合図。画面が変わるきっかけ。" },
    ],
    manga: commonManga,
    pitfalls: ["Reactだけ覚えればWebが全部分かると思う: ReactはUIを作る道具で、ブラウザの土台の上にあります。", "DOMを最初から細かく覚えようとする: まずは画面の実体という感覚で十分です。"],
    exercises: ["よく見るページからHTMLの役割、CSSの役割、JavaScriptの役割を1つずつ探す", "クリック、入力、送信のうち、今日見たイベントを3つ書く"],
    official: "React公式Learnに入る前の前提です。公式のイベントやstateの章を読む準備になります。",
    next: "javascript-values-and-jsx",
    sections: [
      {
        title: "Reactはブラウザの代わりではない",
        body: [
          "Reactは画面を作るためのライブラリです。ただし、Reactが直接スクリーンに絵を描いているわけではありません。最後に画面を表示するのはブラウザです。",
          "父の言葉で言うと、ブラウザは食卓、HTMLは皿、CSSは盛り付け、JavaScriptは手を動かす係です。Reactは、その手順を部品として整理する道具です。",
        ],
      },
      {
        title: "イベントが画面変化の入口になる",
        body: [
          "ボタンを押す、文字を入れる、フォームを送る。こうした操作がイベントです。Reactでも、画面が変わる最初のきっかけはイベントであることが多いです。",
          "この連載では、きっかけ、値、再描画、画面の順に見ます。最初にこの順番だけ持っておくと、あとでstateやpropsが出ても迷いにくくなります。",
        ],
        code: {
          filename: "ブラウザで起きている大まかな流れ",
          value: `クリックする
  ↓
イベントが起きる
  ↓
JavaScriptが値を変える
  ↓
画面の表示が変わる`,
        },
      },
      {
        title: "DOMを直接触る世界と、Reactで考える世界",
        body: [
          "JavaScriptだけで画面を変える時は、まずDOMの中から対象を探します。document.querySelectorでボタンや表示場所を取り、textContentを書き換えるような流れです。これはブラウザの仕組みを理解するうえでは大事ですが、画面が大きくなると「どこを探して、どこを書き換えるか」が増えていきます。",
          "Reactでは、考える中心をDOMの場所から値へ移します。クリックされたらcountという値を増やす。そのcountを使っている表示はReactが作り直す。つまり、作業の主語が「DOMを探す」から「値を変える」に変わります。",
          "中級者向けに言うと、ReactはDOMを消す道具ではありません。DOM更新を宣言的なUIの形へ寄せる道具です。最後はブラウザのDOMに反映されますが、開発者が毎回DOMの差し替え手順を書く必要を減らします。",
        ],
        code: {
          filename: "DOMを直接触る考え方",
          value: `const button = document.querySelector("button");
const output = document.querySelector("#output");

let count = 0;

button?.addEventListener("click", () => {
  count += 1;
  output.textContent = String(count) + "回押した";
});`,
        },
      },
      {
        title: "Reactに入る前に知っておきたい線引き",
        body: [
          "HTML、CSS、JavaScript、DOM、イベントを完璧にしてからReactへ進む必要はありません。ただし、役割の線引きは必要です。HTMLは構造、CSSは見た目、JavaScriptは動き、DOMはブラウザ上の画面の実体です。",
          "この線引きがあると、Reactでつまずいた時に原因を分けられます。タグの書き方で迷っているのか、CSSで崩れているのか、JavaScriptの配列操作で止まっているのか、Reactのstateで迷っているのか。切り分けられるだけで、学習はかなり楽になります。",
          "父として娘に説明するなら、Reactは「画面を作る係を整理する道具」です。ブラウザという舞台の上で、部品と値を使って、変化する画面を作りやすくしてくれます。",
        ],
      },
    ],
  },
  {
    slug: "javascript-values-and-jsx",
    order: 2,
    lane: "required-a",
    title: "JSXの前に、JavaScriptの値を見る",
    intro: "JSXの波かっこには何を入れられるの？ Reactでつまずく前に、文字、数字、配列、条件式を画面の材料として見ます。",
    conclusion: "JSXの中に入るのは、画面に出せるJavaScriptの値です。変数、計算結果、条件式、配列の変換を先に見ておくとReactが読みやすくなります。",
    lesson: "名前や数値を編集し、波かっこの中の値が表示に変わる様子を見ます。",
    readerGuide: {
      beginner: "JSXをHTMLの暗記として見ず、JavaScriptの値を画面に差し込む書き方として見ます。波かっこは値を入れる窓です。",
      intermediate: "中級者は、JSXがテンプレート文字列ではなくReact要素を表す構文である点、式と文の違い、配列変換との相性を押さえます。",
      handsOn: "名前と数値を編集し、同じJSXから表示が変わることを確認します。値が変わる場所と表示される場所を対応させます。",
    },
    demo: "jsx",
    demoTypes: ["入力欄", "値プレビュー", "コードハイライト"],
    prerequisites: ["変数という言葉を聞いたことがある"],
    goals: ["値と式を画面の材料として見られる", "JSXの波かっこに値を書く意味が分かる", "配列をmapで表示に変える準備ができる"],
    vocabulary: [
      { term: "値", meaning: "文字、数字、true/false、配列など、画面の材料になるもの。" },
      { term: "式", meaning: "最後に値になるJavaScript。name、count + 1、条件 ? A : B など。" },
      { term: "map", meaning: "配列の1件ずつを、別の形に変える道具。" },
    ],
    manga: commonManga,
    pitfalls: ["if文をJSXの波かっこの中にそのまま書こうとする: 波かっこには値になる式を入れます。", "JavaScriptの基礎不足をReactの難しさだと思う: 半分はJavaScriptで迷っているだけのことがあります。"],
    exercises: ["const name = '娘' を '父' に変えると表示がどう変わるか説明する", "count + 1 の結果を画面に出すJSXを書く"],
    official: "React公式Learnの「波括弧を使ってJSX内でJavaScriptを使う」を読む前の土台です。",
    next: "components-and-props",
    sections: [
      {
        title: "Reactの画面は値から作る",
        body: [
          "Reactでは、画面に直接文字を書き込むより、値を用意して、その値をJSXに差し込みます。nameが変われば、同じJSXでも違う表示になります。",
          "これは小さな違いに見えます。でも、入力欄、検索結果、ログイン状態など、変わるものが増えるほど大事になります。",
        ],
        code: {
          filename: "Greeting.tsx",
          value: `const name = "娘";

export function Greeting() {
  return <p>こんにちは、{name}さん。</p>;
}`,
        },
      },
      {
        title: "波かっこの中には「値になるもの」を入れる",
        body: [
          "JSXの波かっこには、JavaScriptの式を入れます。式とは、最終的に値になるものです。name、count + 1、isLoggedIn ? 'ようこそ' : 'ログインしてください' のようなものです。",
          "逆に、if文やfor文はそのまま波かっこの中に置けません。条件で表示を変えたいなら、returnの前でifを使うか、JSXの中では三項演算子や&&を使います。配列ならmapでJSXの配列へ変換します。",
          "ここで大事なのは、JSXをHTMLの暗記問題にしないことです。JSXはJavaScriptの値を画面へ接続する場所です。値、式、配列変換が見えると、Reactのコードはかなり読みやすくなります。",
        ],
        code: {
          filename: "式をJSXへ差し込む",
          value: `const count = 3;
const status = count > 0 ? "学習中" : "まだこれから";
const topics = ["JSX", "props", "state"];

return (
  <section>
    <p>{status}: {count}個</p>
    <ul>
      {topics.map((topic) => (
        <li key={topic}>{topic}</li>
      ))}
    </ul>
  </section>
);`,
        },
      },
      {
        title: "初心者はclassName、中級者は境界を意識する",
        body: [
          "JSXにはHTMLと少し違う名前があります。classはclassName、forはhtmlForです。これはJavaScriptの予約語やDOMプロパティとの関係があるためです。最初は、エラーが出たらHTMLと違う名前がある、と覚えれば十分です。",
          "中級者はもう一歩進んで、JSXがReact要素を作るための構文であることを意識します。見た目はHTMLに似ていますが、JavaScriptの式として扱われ、コンポーネントの戻り値になります。",
          "この理解があると、なぜreturnで1つの親要素が必要なのか、なぜmapの中でkeyが必要なのか、なぜ条件分岐の書き方がHTMLと違うのかがつながります。",
        ],
      },
    ],
  },
  {
    slug: "components-and-props",
    order: 3,
    lane: "required-b",
    title: "componentとprops: 同じ部品に違う材料を渡す",
    intro: "同じ見た目のカードを何度も使うには？ コンポーネントを画面の部品として作り、propsで中身を変えます。",
    conclusion: "コンポーネントは画面の部品、propsは親から渡す材料です。同じ部品でも、材料を変えれば違う表示になります。",
    lesson: "親側の値を変えると、同じProfileCardの表示が変わる様子を見ます。",
    readerGuide: {
      beginner: "コンポーネントは画面の部品、propsは部品に渡す材料です。同じカードに別の名前を渡す、という感覚を先に掴みます。",
      intermediate: "中級者は、propsを部品の公開インターフェースとして見ます。何をpropsにし、何を内部に閉じるかが設計の入口です。",
      handsOn: "娘と父を切り替えて、同じProfileCardがpropsだけで違う表示になることを見ます。コードの呼び出し側と表示側を追います。",
    },
    demo: "componentProps",
    demoTypes: ["編集ボタン", "props切り替え", "同一部品の複数表示"],
    prerequisites: ["JSXで値を表示できる"],
    goals: ["コンポーネントを画面の部品として説明できる", "propsは親から子へ渡す材料だと分かる", "同じ部品を違う中身で再利用できる"],
    vocabulary: [
      { term: "component", meaning: "画面の部品。名前を付けて何度も使えるまとまり。" },
      { term: "props", meaning: "親から子へ渡す材料。部品の中身を外から変える値。" },
      { term: "親子", meaning: "呼び出す側が親、呼び出される部品が子。" },
    ],
    manga: commonManga,
    pitfalls: ["propsを子側で書き換えようとする: propsは受け取った材料として扱います。", "何でもpropsに詰める: 部品の役割が大きくなりすぎた合図かもしれません。"],
    exercises: ["Buttonにlabelを渡して表示を変える", "ProfileCardを父用と娘用の2回表示する", "propsの型をtypeで書いてみる"],
    official: "公式Learnの「最初のコンポーネント」「コンポーネントにpropsを渡す」に対応します。",
    next: "render-state-and-events",
    sections: [
      {
        title: "関数が画面を返す",
        body: [
          "Reactのコンポーネントは、基本的には関数です。引数としてpropsを受け取り、JSXを返します。",
          "父の言葉で言うと、コンポーネントは弁当箱、propsは中身のおかずです。同じ箱でも、中身を変えれば別の弁当になります。",
        ],
        code: {
          filename: "ProfileCard.tsx",
          value: `type ProfileCardProps = {
  name: string;
  job: string;
};

function ProfileCard({ name, job }: ProfileCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{job}</p>
    </article>
  );
}`,
        },
      },
      {
        title: "propsは部品の使い方を決める契約",
        body: [
          "propsは、親から子へ渡す材料です。ただの値の受け渡しに見えますが、実務ではコンポーネントの使い方を決める契約になります。ButtonにlabelとonClickを渡すのか、childrenを渡すのか。Cardにtitleだけ渡すのか、自由な本文を渡せるようにするのか。ここで部品の扱いやすさが決まります。",
          "初心者のうちは、propsは部品の中身を変えるための値、と見れば十分です。中級者は、propsが増えすぎていないか、役割が広がりすぎていないか、型で使い方が伝わるかを見ます。",
          "propsは子から勝手に書き換えません。子は受け取った材料で表示を作ります。変えたい時は、親が別のpropsを渡すか、子からイベントで親へ知らせます。この流れがReactの単方向データフローにつながります。",
        ],
        code: {
          filename: "props設計の入口",
          value: `type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
};

function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  return (
    <button data-variant={variant} onClick={onClick}>
      {children}
    </button>
  );
}`,
        },
      },
      {
        title: "分ける基準は、名前を付けると読みやすいか",
        body: [
          "コンポーネントは小さく分ければ分けるほど良い、というものではありません。分けた結果、名前で意味が伝わり、再利用や確認がしやすくなるなら分ける価値があります。",
          "たとえばProfileCard、ArticleCard、SearchFormのような名前は、画面上の役割が分かります。一方で、ただdivを1つ包んだだけの部品を増やすと、読む場所が増えるだけになることもあります。",
          "この判断は後半のAtomic DesignやStorybookにもつながります。まずは、画面を部品として見る。次に、部品の外から変えたいものをpropsにする。この順番で十分です。",
        ],
      },
    ],
  },
  {
    slug: "render-state-and-events",
    order: 4,
    lane: "required-b",
    title: "stateとevent: 値が変わると画面が変わる",
    intro: "ボタンを押した回数を、Reactはどう覚えるの？ eventをきっかけにstateが変わり、再描画で画面が変わります。",
    conclusion: "stateは部品自身が覚える変化する値です。eventでsetStateを呼ぶと、Reactが新しい値から画面を作り直します。",
    lesson: "カウンターを押して、きっかけ、値、再描画、画面の4段階を追います。",
    readerGuide: {
      beginner: "stateは画面の記憶です。ボタンを押した回数のように、ユーザー操作で変わるものをReactに覚えてもらいます。",
      intermediate: "中級者は、直接代入ではなく更新関数を使う理由、前のstateを使う更新、再描画がどの単位で起きるかを見ます。",
      handsOn: "増やす・リセットを押し、イベントログと変更前後を見ます。setCountが呼び鈴になってReactへ更新を知らせる流れを確認します。",
    },
    demo: "state",
    demoTypes: ["ボタン", "リセット", "イベントログ", "前後比較"],
    prerequisites: ["componentとpropsの基本"],
    goals: ["stateを部品が覚える値として説明できる", "eventが更新のきっかけだと分かる", "再描画を値から画面を作り直すこととして理解する"],
    vocabulary: [
      { term: "state", meaning: "部品自身が覚える現在の値。変わると画面も変わる。" },
      { term: "setState", meaning: "Reactに値が変わったと知らせる呼び鈴。" },
      { term: "render", meaning: "値から画面を計算すること。" },
    ],
    manga: commonManga,
    pitfalls: ["count = count + 1 と直接書く: Reactに更新が伝わりません。", "再描画を怖がりすぎる: 入門ではReactの普通の動きとして受け止めます。"],
    exercises: ["初期値を5にしたら最初の表示がどうなるか考える", "減らすボタンとリセットボタンを追加する設計を書く", "stateとpropsになりそうな値を分ける"],
    official: "公式Learnの「State: コンポーネントのメモリ」「イベントへの応答」「レンダーとコミット」に対応します。",
    next: "forms-and-controlled-components",
    sections: [
      {
        title: "画面を直接書き換えない",
        body: [
          "Reactでは、表示されている文字を探して書き換えるのではなく、元になるstateを変えます。するとReactがその値を使って画面をもう一度作ります。",
          "この考え方が分かると、入力、条件分岐、リスト、データ取得まで同じ目で見られます。",
        ],
        code: {
          filename: "Counter.tsx",
          value: `"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((current) => current + 1)}>
      {count}回押した
    </button>
  );
}`,
        },
      },
      {
        title: "setStateはReactへの更新の合図",
        body: [
          "count = count + 1 のように直接代入しても、Reactは画面を更新すべきだと分かりません。Reactに更新を知らせるためにsetCountを使います。setCountは、値を変えるだけでなく、Reactに次の表示を作る合図を送ります。",
          "前の値を使って更新する時は、setCount((current) => current + 1) の形が安全です。今見えているcountをそのまま使うと、複数の更新や非同期の流れで古い値に引っかかることがあります。",
          "中級者は、state更新が即座に変数を書き換える命令ではなく、次のrenderを予約する操作だと見ます。この見方があると、ログを出した時に古い値が見える理由や、更新をまとめて扱う挙動が理解しやすくなります。",
        ],
        code: {
          filename: "前の値を使う更新",
          value: `setCount((current) => current + 1);
setCount((current) => current + 1);

// 前の値を受け取るので、2回分の更新として考えやすい`,
        },
      },
      {
        title: "再描画は失敗ではなくReactの基本動作",
        body: [
          "再描画という言葉は、最初は重そうに聞こえます。でもReactでは、値が変わったらコンポーネントをもう一度実行し、新しい表示を作るのが基本です。これは避けるべき失敗ではありません。",
          "もちろん、大きな画面や重い計算では最適化が必要になることもあります。ただし入門段階でmemo、useMemo、useCallbackから入ると、中心の理解がぼやけます。まずは値が変わる、コンポーネントが再実行される、表示が変わる、という順番を体に入れます。",
          "父の言葉で言うと、Reactは毎回『今の材料なら、どんな画面？』と聞き直します。材料が変わっていない部分まで手で直す必要はありません。",
        ],
      },
    ],
  },
  {
    slug: "forms-and-controlled-components",
    order: 5,
    lane: "required-c",
    title: "form: 入力欄とstateをつなぐ",
    intro: "入力した名前を、別の場所にもすぐ表示するには？ 入力欄のvalueとstateをつなぐと、画面全体で同じ値を使えます。",
    conclusion: "controlled componentは、入力欄の値をReactのstateで管理する作り方です。入力とプレビューが同じ値を見るようになります。",
    lesson: "入力欄に文字を入れ、state、プレビュー、イベントログが同時に変わる様子を見ます。",
    readerGuide: {
      beginner: "入力欄もReactの画面の一部です。valueとonChangeをstateにつなぐと、入力した文字を別の場所にも出せます。",
      intermediate: "中級者は、入力欄をcontrolledにする利点と負担、バリデーション、送信中状態、フォームライブラリを使う判断につなげます。",
      handsOn: "名前を入力し、state表示、プレビュー、イベントログが同じ値を見ていることを確認します。空文字の表示も試します。",
    },
    demo: "form",
    demoTypes: ["入力欄", "プレビュー", "イベントログ", "リセット"],
    prerequisites: ["stateとeventの基本"],
    goals: ["controlled componentを入力欄とstateの同期として説明できる", "onChangeで入力値をstateに入れられる", "同じstateを複数表示で使えると分かる"],
    vocabulary: [
      { term: "controlled component", meaning: "入力欄の値をReactのstateで持つ作り方。" },
      { term: "onChange", meaning: "入力が変わった時の合図。" },
      { term: "単方向データフロー", meaning: "値が上から下へ流れ、変更はイベントで知らせる考え方。" },
    ],
    manga: commonManga,
    pitfalls: ["valueだけを書いてonChangeを書かない: 入力できない欄になります。", "入力欄ごとに値の置き場所が散らばる: どの部品が覚えるかを先に決めます。"],
    exercises: ["空文字なら「名前なし」と表示する", "入力値を見出しと本文の2か所に出す", "送信時に何をstateから読むか説明する"],
    official: "公式Learnの「stateを用いて入力に反応する」「state構造の選択」に対応します。",
    next: "conditional-and-list-rendering",
    sections: [
      {
        title: "入力欄も画面の一部",
        body: [
          "入力欄はユーザーが直接触る場所です。だからReactの外側に見えますが、valueをstateにつなぐと、Reactの値として扱えます。",
          "父の言葉で言うと、入力欄は娘のメモ、stateは父のノートです。同じ内容を見ていれば、あとから説明しやすくなります。",
        ],
        code: {
          filename: "NameForm.tsx",
          value: `const [name, setName] = useState("");

return (
  <>
    <input value={name} onChange={(event) => setName(event.target.value)} />
    <p>こんにちは、{name || "名前なし"}さん。</p>
  </>
);`,
        },
      },
      {
        title: "controlled componentで何がうれしいのか",
        body: [
          "入力欄の値をstateに入れると、同じ値をいろいろな場所で使えます。プレビューに出す、送信ボタンの有効/無効を切り替える、文字数を数える、エラーメッセージを出す。入力欄が画面の他の部分とつながります。",
          "一方で、すべての入力をstateで細かく管理するとコードは増えます。だから実務では、React Hook Formのようなフォームライブラリを使うこともあります。ただし、ライブラリを使う前に、valueとonChangeとstateの関係は必ず理解しておきたい土台です。",
          "初心者は『入力した文字がstateになる』ことを掴みます。中級者は『フォーム全体の状態、バリデーション、送信中、エラー表示をどう設計するか』へ進みます。",
        ],
        code: {
          filename: "入力値から派生する表示",
          value: `const [name, setName] = useState("");
const isTooLong = name.length > 12;

return (
  <>
    <input value={name} onChange={(event) => setName(event.target.value)} />
    <p>{name.length}文字</p>
    {isTooLong ? <p>少し長いかもしれません</p> : null}
  </>
);`,
        },
      },
      {
        title: "stateをどこに置くかが設計になる",
        body: [
          "入力欄の値をその部品だけで使うなら、その部品にstateを置けば十分です。でも、検索フォームの入力値を記事一覧にも使いたいなら、共通の親にstateを置く必要が出てきます。",
          "これがlifting state upです。子ども同士で直接値を渡すのではなく、共通の親が値を持ち、propsで渡します。子が変更したい時は、イベントで親に知らせます。",
          "この章はフォームの話ですが、実はReact設計の大事な入口でもあります。どの部品が何を覚えるか。どの値をpropsで渡すか。ここが整理できると、画面が大きくなっても迷いにくくなります。",
        ],
      },
    ],
  },
  {
    slug: "conditional-and-list-rendering",
    order: 6,
    lane: "required-c",
    title: "conditionalとlist: 条件と配列から画面を作る",
    intro: "データが空の時、読み込み中の時、項目が増えた時、Reactではどう表示を変えるの？ 条件と配列を画面に変えます。",
    conclusion: "条件付きレンダーは今の状態に合う表示を選び、list renderingは配列をmapで複数の表示に変えます。",
    lesson: "トグルで表示を切り替え、配列に項目を追加して、画面が増える様子を見ます。",
    readerGuide: {
      beginner: "条件は表示の分岐、配列は同じ形の繰り返しです。読み込み中、空、成功、エラーを画面の状態として分けます。",
      intermediate: "中級者は、keyの安定性、index keyの危険、条件分岐の読みやすさ、データ構造とUI構造の対応を見ます。",
      handsOn: "項目を追加・削除し、mapで表示数が変わる様子を見ます。空状態やkey表示も確認します。",
    },
    demo: "list",
    demoTypes: ["トグル", "追加/削除", "空状態", "key表示"],
    prerequisites: ["JSXの値", "stateの基本"],
    goals: ["条件で表示を切り替えられる", "配列をmapで表示に変えられる", "keyを項目の名札として説明できる"],
    vocabulary: [
      { term: "conditional rendering", meaning: "条件によって表示するJSXを変えること。" },
      { term: "list rendering", meaning: "配列から複数の表示を作ること。" },
      { term: "key", meaning: "Reactがリスト項目を見分ける名札。" },
    ],
    manga: commonManga,
    pitfalls: ["keyを書かない: Reactがどの項目か見分けにくくなります。", "三項演算子を深く重ねる: 読みにくい時はifで分けます。"],
    exercises: ["items.lengthが0なら空メッセージを表示する", "topics配列に1件追加した時にliが何個になるか数える", "keyに使える値を考える"],
    official: "公式Learnの「条件付きレンダー」「リストのレンダー」に対応します。",
    next: "use-effect-and-fetch",
    sections: [
      {
        title: "画面はいつも同じとは限らない",
        body: [
          "Webアプリでは、読み込み中、エラー、空、成功のように、同じ場所でも出すものが変わります。Reactでは、状態を見て返すJSXを変えます。",
          "配列はmapで1件ずつJSXに変えます。記事一覧、コメント一覧、検索結果はこの考え方の延長です。",
        ],
        code: {
          filename: "TopicList.tsx",
          value: `const topics = ["component", "props", "state"];

return (
  <ul>
    {topics.map((topic) => (
      <li key={topic}>{topic}</li>
    ))}
  </ul>
);`,
        },
      },
      {
        title: "条件分岐はUIの状態設計そのもの",
        body: [
          "条件付きレンダーは、ただifを書く話ではありません。画面が今どんな状態なのかを整理する話です。読み込み中なのか、失敗したのか、データが空なのか、成功したのか。それぞれでユーザーに見せるべきものは違います。",
          "初心者は、まず条件で表示が変わることを理解します。中級者は、条件が増えた時に読みやすい構造へ分けること、状態名を分かりやすくすること、表示漏れを防ぐことを見ます。",
          "成功状態だけを作ると、実際のアプリで困ります。検索結果が0件の時、APIが失敗した時、送信中の時。Reactの条件分岐は、そうした現実の揺れを画面に出すための道具です。",
        ],
        code: {
          filename: "状態を先に分ける",
          value: `if (status === "loading") {
  return <p>読み込み中です</p>;
}

if (status === "error") {
  return <p>うまく読めませんでした</p>;
}

if (items.length === 0) {
  return <p>まだ項目がありません</p>;
}

return <ItemList items={items} />;`,
        },
      },
      {
        title: "keyはReactへの名札",
        body: [
          "mapでリストを表示する時、Reactはそれぞれの項目を見分ける必要があります。そのためにkeyを付けます。keyは画面に表示するためのものではなく、Reactが項目を追跡するための名札です。",
          "indexをkeyにする例をよく見ますが、並び替えや削除があるリストでは問題になることがあります。項目そのものにidがあるなら、idをkeyに使う方が安定します。",
          "中級者は、keyを警告消しとして見ないことが大事です。keyはReactが前回のリストと今回のリストを対応させるための情報です。フォーム入力を持つリスト、並び替えるリストでは特に効いてきます。",
        ],
        code: {
          filename: "idをkeyにする",
          value: `const articles = [
  { id: "react-state", title: "stateを理解する" },
  { id: "react-props", title: "propsを理解する" },
];

return (
  <ul>
    {articles.map((article) => (
      <li key={article.id}>{article.title}</li>
    ))}
  </ul>
);`,
        },
      },
    ],
  },
  {
    slug: "use-effect-and-fetch",
    order: 7,
    lane: "practice-b",
    title: "useEffect: Reactの外側と同期する",
    intro: "タイマーやAPIのようなReactの外側の出来事はどこに書くの？ useEffectは外の世界と画面を同期する入口です。",
    conclusion: "useEffectは、時間、ブラウザAPI、データ取得など、Reactの外側と同期する必要がある時に使います。",
    lesson: "タイマー開始/停止で、外の時間、state、画面表示がつながる様子を見ます。",
    readerGuide: {
      beginner: "useEffectは何でも入れる場所ではなく、Reactの外側とつながる場所です。タイマーやAPIのような外部の出来事を扱います。",
      intermediate: "中級者は、依存配列、cleanup、不要なEffect、fetchのloading/error/success、Server Componentとの役割分担まで見ます。",
      handsOn: "タイマーを開始・停止し、secondsが変わることとcleanupの必要性を確認します。止めたときに外の処理を片付ける感覚を掴みます。",
    },
    demo: "effect",
    demoTypes: ["開始/停止", "秒数state", "cleanup表示"],
    prerequisites: ["state", "再描画", "イベント"],
    goals: ["useEffectを外の世界との同期として説明できる", "cleanupが必要な理由を知る", "何でもuseEffectに入れない感覚を持つ"],
    vocabulary: [
      { term: "useEffect", meaning: "Reactの外側と同期するためのHook。" },
      { term: "cleanup", meaning: "タイマーや購読を片付ける処理。" },
      { term: "fetch", meaning: "外部データを取りに行くブラウザの機能。" },
    ],
    manga: commonManga,
    pitfalls: ["表示用の計算までuseEffectに入れる: stateから計算できる値は普通の変数でよいことがあります。", "タイマーを片付けない: 画面を離れても処理が残る原因になります。"],
    exercises: ["タイマーを止める処理がどこにあるか探す", "API取得のloading/error/successを3つの状態で考える"],
    official: "公式Learnの「エフェクトと同期」「エフェクトは必要ないかもしれない」に対応します。",
    next: "ui-patterns",
    sections: [
      {
        title: "外の出来事はReactの都合だけでは動かない",
        body: [
          "タイマーはReactの外で時間を刻みます。APIもネットワークの向こう側から返ってきます。こうしたものと画面を合わせる時にuseEffectを考えます。",
          "ただし、useEffectは便利な物置ではありません。Reactの値だけで出せる表示は、まず普通に計算します。",
        ],
        code: {
          filename: "Timer.tsx",
          value: `useEffect(() => {
  const timerId = window.setInterval(() => {
    setSeconds((current) => current + 1);
  }, 1000);

  return () => window.clearInterval(timerId);
}, []);`,
        },
      },
      {
        title: "Effectが必要な時と、いらない時",
        body: [
          "useEffectは、Reactの外側と同期する時に使います。タイマー、ブラウザAPI、購読、外部ウィジェット、クライアント側でのデータ取得などです。逆に、propsやstateから計算できるだけの値なら、Effectに入れる必要はありません。",
          "たとえばfullName = firstName + lastNameのような値は、stateにしてEffectで更新するより、render中に計算すれば十分です。Effectを使うほど、更新の流れは追いにくくなります。",
          "中級者は、Effectを『あとから何かする場所』ではなく『Reactの外側と同期する境界』として見ます。この境界の意識があると、不要なEffect、無限ループ、cleanup漏れを避けやすくなります。",
        ],
        code: {
          filename: "Effectにしなくてよい例",
          value: `function Profile({ firstName, lastName }: Props) {
  const fullName = firstName + " " + lastName;

  return <p>{fullName}</p>;
}`,
        },
      },
      {
        title: "データ取得ではloading、error、successを分ける",
        body: [
          "APIからデータを取る時、画面はいきなり成功状態にはなりません。読み込み中、失敗、成功、空状態を考えます。これはUIパターンの章ともつながります。",
          "Next.jsを使う場合、データ取得をServer Component側で行う選択肢もあります。だからReactだけのuseEffect fetchを唯一の正解にしないことが大事です。",
          "この章では、useEffectを理解するためにタイマーを扱います。実務では、データ取得の場所、キャッシュ、再取得、エラー表示まで含めて設計します。useEffectはその中の一つの選択肢です。",
        ],
      },
    ],
  },
  {
    slug: "ui-patterns",
    order: 8,
    lane: "practice-a",
    title: "UIパターン: よくある画面の型を作る",
    intro: "Reactを覚えたのに画面が作れないのはなぜ？ フォーム、タブ、検索、空状態のような型を知ると手が動きます。",
    conclusion: "UIパターンは、state、event、conditional、listを組み合わせたよくある形です。型を知ると作れる画面が増えます。",
    lesson: "ログイン中/ログアウト中を切り替え、空状態と成功状態の表示を見ます。",
    readerGuide: {
      beginner: "フォーム、タブ、検索、空状態は、Reactの基本概念の組み合わせです。新しい魔法ではなく、stateと条件分岐の応用として見ます。",
      intermediate: "中級者は、成功状態だけでなくloading、error、empty、disabled、送信中などの状態設計をUI品質として扱います。",
      handsOn: "状態を切り替えて、同じ場所に別のUIが出ることを見ます。実アプリで忘れやすい空状態と失敗状態も確認します。",
    },
    demo: "conditional",
    demoTypes: ["トグル", "空状態", "エラー表示"],
    prerequisites: ["state", "conditional rendering", "list rendering"],
    goals: ["よくある画面をReact概念の組み合わせとして見られる", "空状態、loading、errorを忘れず考えられる", "小さく閉じた教材としてUIを作れる"],
    vocabulary: [
      { term: "空状態", meaning: "表示するデータがない時の画面。" },
      { term: "loading", meaning: "処理中で、まだ結果が出ていない状態。" },
      { term: "error", meaning: "失敗した時に、次に何をすればよいか伝える状態。" },
    ],
    manga: commonManga,
    pitfalls: ["成功時の画面だけ作る: 実際のアプリでは空、待ち、失敗も起きます。", "説明文で埋める: 操作結果で分かる画面にします。"],
    exercises: ["検索結果が0件の表示を書く", "タブUIで必要なstateを考える", "送信中のボタン文言を考える"],
    official: "React公式の基礎を、実際のUIパターンへ応用する章です。",
    next: "nextjs-and-data",
    sections: [
      {
        title: "型を知ると迷いが減る",
        body: [
          "フォーム、モーダル、タブ、検索、ページネーション。名前のあるUIは、だいたい必要なstateとeventの形があります。",
          "まず小さく作り、触って、壊れないことを確認します。作り込みすぎず、読者が変化を見られることを優先します。",
        ],
      },
      {
        title: "UIパターンはReact概念の組み合わせ",
        body: [
          "タブUIは、選択中のタブをstateで持ち、クリックeventで切り替え、条件付きレンダーで表示を変えます。検索UIは、入力値をstateで持ち、配列をfilterし、mapで結果を表示します。モーダルは、開いているかどうかをstateで持ち、閉じるeventを用意します。",
          "つまり、UIパターンは新しいReact用語の集まりではありません。これまで学んだcomponent、props、state、event、conditional、listを組み合わせた型です。",
          "初心者は型を真似て作れば十分です。中級者は、その型にどんな状態が必要か、アクセシビリティで何を満たすべきか、ライブラリに任せるべき複雑さはどこかを判断します。",
        ],
        code: {
          filename: "タブUIの最小構造",
          value: `const [activeTab, setActiveTab] = useState("preview");

return (
  <>
    <button onClick={() => setActiveTab("preview")}>Preview</button>
    <button onClick={() => setActiveTab("code")}>Code</button>

    {activeTab === "preview" ? <Preview /> : <Code />}
  </>
);`,
        },
      },
      {
        title: "空状態とエラー状態まで作ると、画面は急に実用的になる",
        body: [
          "学習コードでは成功状態だけを作りがちです。でも実際の画面では、データがない、通信に失敗した、入力が足りない、送信中で押せない、という状態がよくあります。",
          "空状態は、ただ『ありません』と出すだけではなく、次に何をすればよいかを伝える場所です。エラー状態も、怖い赤文字を出すだけでなく、再試行できるのか、入力を直せばよいのかを伝えます。",
          "この視点は中級者への入口です。Reactのコードを書けるだけでなく、状態ごとの体験を設計できると、作れるUIの品質が上がります。",
        ],
      },
    ],
  },
  {
    slug: "nextjs-and-data",
    order: 9,
    lane: "practice-b",
    title: "Next.jsとデータ取得: ReactをWebアプリにする",
    intro: "ReactとNext.jsは何が違うの？ Reactは部品、Next.jsはURLやサーバーまで含めたWebアプリの土台です。",
    conclusion: "ReactはUI部品を作る道具で、Next.jsはその部品をページ、URL、データ取得、公開へつなげる土台です。",
    lesson: "Server ComponentとClient Componentの役割を切り替えて見ます。",
    readerGuide: {
      beginner: "ReactとNext.jsを同じものにせず、Reactは部品、Next.jsはページやURLまで含めた土台として分けます。",
      intermediate: "中級者は、Server ComponentとClient Component、データ取得の場所、use clientの境界、キャッシュの見通しまで意識します。",
      handsOn: "役割切り替えの教材を見ながら、stateやeventが必要な部品はブラウザ側、読むだけの部品はサーバー側に置ける感覚を掴みます。",
    },
    demo: "conditional",
    demoTypes: ["役割切り替え", "loading/error/success"],
    prerequisites: ["Reactの中心概念", "useEffectの位置づけ"],
    goals: ["ReactとNext.jsの役割の違いを説明できる", "Server ComponentとClient Componentをざっくり分けられる", "データ取得のloading/error/successを考えられる"],
    vocabulary: [
      { term: "App Router", meaning: "Next.jsでフォルダとファイルをURLにつなげる仕組み。" },
      { term: "Server Component", meaning: "サーバー側で描けるReact部品。" },
      { term: "Client Component", meaning: "ブラウザで動き、stateやeventを使えるReact部品。" },
    ],
    manga: commonManga,
    pitfalls: ["全部にuse clientを書く: stateやeventが必要な場所に絞ります。", "データ取得と表示を一気に複雑にする: loading/error/successを先に分けます。"],
    exercises: ["app/about/page.tsxがどのURLになるか考える", "useStateが必要な部品を見分ける", "APIレスポンスの型を言葉で書く"],
    official: "Next.js App Router Docsのpage/layout、Server/Client Component、データ取得に対応します。",
    next: "component-design-atomic-ui-library",
    sections: [
      {
        title: "Reactの部品をページに置く",
        body: [
          "Reactだけでも部品は作れます。ただ、URLを作り、サーバーで描き、画像やmetadataを整え、Vercelに出すところまで考えるとNext.jsの出番です。",
          "父の言葉で言うと、Reactは家具、Next.jsは家の間取りです。家具だけでは住所がありません。",
        ],
      },
      {
        title: "Server ComponentとClient Componentを分けて考える",
        body: [
          "Next.js App Routerでは、何もしなければServer Componentとして扱われます。サーバー側で描ける部品は、ブラウザへ送るJavaScriptを減らしやすくなります。一方で、useStateやonClickのようなブラウザ上の操作が必要な部品にはuse clientが必要です。",
          "初心者は、stateやeventが必要な場所だけClient Component、と覚えると入りやすいです。中級者は、データ取得、キャッシュ、認証、フォーム送信、Server Actionsとの境界まで見ると設計の見通しが良くなります。",
          "全部にuse clientを書くと、Reactだけで作る感覚には近づきますが、Next.jsの良さを減らすことがあります。逆に、何でもサーバーへ寄せると、操作できるUIが作れません。境界を見つけるのが実践です。",
        ],
        code: {
          filename: "Client Componentが必要な例",
          value: `"use client";

import { useState } from "react";

export function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked((current) => !current)}>
      {liked ? "いいね済み" : "いいね"}
    </button>
  );
}`,
        },
      },
      {
        title: "React記事の連載としてNext.jsを扱う理由",
        body: [
          "Reactを理解するだけなら、Next.jsは必須ではありません。でもWebアプリとして公開し、URLを持ち、記事一覧や詳細ページを作り、画像やmetadataを扱うなら、Next.jsは自然な次のステップになります。",
          "このブログ自体もNext.jsで動いています。だから読者にとって、学んだReactの部品がページとして配置され、Vercelで公開される流れまで見せられます。",
          "中級者向けには、Next.jsをReactの代替ではなく、Reactをアプリにするためのフレームワークとして位置づけます。役割の違いを分けるほど、学習順序も実装判断もはっきりします。",
        ],
      },
    ],
  },
  {
    slug: "component-design-atomic-ui-library",
    order: 10,
    lane: "practice-c",
    title: "コンポーネント設計: Atomic DesignとUIライブラリ",
    intro: "部品は小さく分ければ正解なの？ Atomic DesignとUIライブラリ比較を、初心者が迷わない範囲で整理します。",
    conclusion: "コンポーネント設計は、名前を付けると理解しやすくなる単位で分けることです。Atomic DesignやUIライブラリは、そのための道具です。",
    lesson: "Button、SearchForm、ArticleCard、ArticleListを並べ、分け方とUIライブラリのtrade-offを見ます。",
    readerGuide: {
      beginner: "部品は小さくすれば正解ではありません。名前を付けると読みやすくなる単位で分ける、という基準を持ちます。",
      intermediate: "中級者は、Atomic Design、compound component、headless UI、design token、UIライブラリの依存コストを比較します。",
      handsOn: "atoms、molecules、organismsを切り替え、ButtonやSearchFormがどの粒度に当たるかを見ます。UIライブラリ比較も触ります。",
    },
    demo: "atomicDesign",
    demoTypes: ["部品階層", "ライブラリ比較", "props設計"],
    prerequisites: ["component", "props", "UIパターン"],
    goals: ["Atomic DesignをReact部品分割の考え方として説明できる", "UIライブラリの利点と代償を比較できる", "過剰設計を避ける感覚を持つ"],
    vocabulary: [
      { term: "Atomic Design", meaning: "部品を小さいものから大きい画面へ組み立てて考える方法。" },
      { term: "UIライブラリ", meaning: "ボタンやモーダルなどの既製部品を使える道具。" },
      { term: "headless UI", meaning: "見た目を決めすぎず、ふるまいを助ける部品。" },
    ],
    manga: commonManga,
    pitfalls: ["ネジ1本まで名前を付ける: 小さなブログでは過剰設計になります。", "UIライブラリで仕組みを全部飛ばす: 何を省けて、何を理解すべきかを見ます。"],
    exercises: ["Button、Input、SearchForm、ArticleCardをatoms/moleculesに分けてみる", "shadcn/ui、MUI、Tailwindのみの実装を比較軸で見る"],
    official: "React公式のcompositionの考え方と、実践書で扱われるAtomic Design、UIライブラリ比較に対応します。",
    next: "storybook-and-visual-tests",
    sections: [
      {
        title: "家具を自作するか、既製品を買うか",
        body: [
          "UIライブラリは便利です。アクセシビリティや複雑な状態をかなり肩代わりしてくれます。一方で、見た目の自由度、依存の重さ、学習コストもあります。",
          "このブログのReact理解記事では、仕組みを見るために頼りすぎません。実践記事では、何を省けるかを明示して使います。",
        ],
      },
      {
        title: "Atomic Designは分類表であって、法律ではない",
        body: [
          "Atomic Designは、atoms、molecules、organisms、templates、pagesのように、部品を小さいものから大きいものへ整理する考え方です。ButtonやInputはatoms、SearchFormはmolecules、ArticleListはorganismsのように見られます。",
          "ただし、すべてを無理にAtomic Designへ当てはめる必要はありません。小さなブログで階層を細かくしすぎると、実装より分類に時間を使ってしまいます。",
          "大事なのは、部品の粒度を話し合う言葉を持つことです。ButtonとArticleCardが同じ階層で語られていると混乱します。Atomic Designは、その混乱を減らすための地図として使います。",
        ],
        code: {
          filename: "ブログUIをAtomic Designで見る",
          value: `atoms:
  Button
  Input

molecules:
  SearchForm
  TagFilter

organisms:
  ArticleCardList
  HeaderNavigation

pages:
  ReactIntroIndexPage`,
        },
      },
      {
        title: "UIライブラリ比較は正解探しではなくtrade-offを見る",
        body: [
          "MUIは完成度が高く、業務UIを早く作りやすいです。shadcn/uiはコードを手元に持ちやすく、Tailwindとの相性も良いです。Radix UIやHeadless UIは、見た目を決めすぎず、アクセシブルなふるまいを助けます。Tailwindだけで作ると自由度は高いですが、状態やアクセシビリティを自分で見る必要があります。",
          "初心者は、UIライブラリを使うとReactの仕組みが見えにくくなることがあります。だから基礎記事では、まず自分で小さく作ります。実践記事では、複雑なUIを安全に作るためにライブラリを使う判断を扱います。",
          "中級者は、見た目の完成度、カスタマイズ性、アクセシビリティ、依存の重さ、チームの学習コストを比較します。正解はプロジェクトごとに変わります。",
        ],
      },
    ],
  },
  {
    slug: "storybook-and-visual-tests",
    order: 11,
    lane: "advanced-a",
    title: "StorybookとStoryshots: 部品を机の上で見る",
    intro: "ページ全体を開かないと部品を確認できないの？ Storybookは部品だけを並べて、状態ごとに見比べる作業台です。",
    conclusion: "Storybookは部品の状態を確認する作業台です。Storyshotsは現在では非推奨・メンテナンス終了扱いとして、test-runnerやvisual regressionへつなげます。",
    lesson: "Buttonのnormal、loading、disabled、error相当を切り替え、どの確認方法が何を見つけるか比べます。",
    readerGuide: {
      beginner: "Storybookはページから部品だけを取り出して見る作業台です。まずは通常、loading、disabled、errorを並べる価値を見ます。",
      intermediate: "中級者は、Storybook test-runner、Portable Stories、visual regression、Storyshotsの非推奨化を品質戦略として整理します。",
      handsOn: "Storyを切り替えて、同じButtonでも状態によって確認観点が変わることを見ます。差分検知と正しさの判断を分けます。",
    },
    demo: "storybook",
    demoTypes: ["状態切り替え", "Storybook", "test-runner", "visual regression"],
    prerequisites: ["props", "状態", "コンポーネント設計"],
    goals: ["Storybookを部品確認の作業台として説明できる", "Storyshotsの歴史と現在の扱いを理解する", "test-runnerとvisual regressionの役割を分けられる"],
    vocabulary: [
      { term: "Story", meaning: "部品のある状態を1つ切り出した見本。" },
      { term: "Storyshots", meaning: "Storyをスナップショット化する旧来の考え方。現在は非推奨・メンテナンス終了扱い。" },
      { term: "visual regression", meaning: "前の見た目と今の見た目を画像で比べ、差分に気づく仕組み。" },
    ],
    manga: commonManga,
    pitfalls: ["スナップショットが正しさを判断すると思う: 差分には気づけますが、良いUIかは人間が見ます。", "通常状態だけStoryにする: loading、error、empty、disabledも並べます。"],
    exercises: ["ButtonのdisabledとloadingのStory名を考える", "Storyshotsの代わりに何を使うか説明する", "visual regressionで見つかる差分を1つ考える"],
    official: "Storybook Docsのtest-runner、Portable Stories、visual testingの考え方につながります。",
    next: "custom-hooks-context-quality",
    sections: [
      {
        title: "前に撮った写真と今の写真を見比べる",
        body: [
          "Storyshotsは、Storybookの各Storyをスナップショットテストする考え方として広まりました。ただし現在のStorybookでは非推奨・メンテナンス終了扱いとして説明するのが現実的です。",
          "現代的には、Storybook test-runner、Portable Stories、visual regression testingを使い分けます。差分に気づく道具と、正しい体験かを判断する目は別です。",
        ],
      },
      {
        title: "Storybookは部品の状態を並べる作業台",
        body: [
          "Storybookの価値は、ページ全体を開かなくてもコンポーネントの状態を確認できることです。Buttonならnormal、loading、disabled、error。Cardなら画像あり、画像なし、長いタイトル、空の説明文。状態を並べると、見落としが減ります。",
          "初心者にとっては、Storybookは少し大げさに見えるかもしれません。でも、部品をページから切り離して見る感覚はReactの理解にも役立ちます。コンポーネントは入力propsによって見た目が変わる、という事実が目で分かるからです。",
          "中級者は、Storybookをデザインシステム、レビュー、アクセシビリティ確認、visual regressionへつなげます。部品を作るだけでなく、壊れていないことを確認する場所として扱います。",
        ],
        code: {
          filename: "Button.stories.tsx",
          value: `export const Normal = {
  args: { children: "保存" },
};

export const Loading = {
  args: { children: "保存中", disabled: true },
};

export const Disabled = {
  args: { children: "保存", disabled: true },
};`,
        },
      },
      {
        title: "Snapshotは正しさではなく差分を知らせる",
        body: [
          "Snapshot testingは、前回の出力と今回の出力を比べる考え方です。差分が出れば、何かが変わったことに気づけます。ただし、その差分が良い変更なのか悪い変更なのかは、人間が判断します。",
          "Storyshotsはこの考え方をStorybookに持ち込んだものとして知られていますが、現在は非推奨・メンテナンス終了扱いとして説明します。今から学ぶなら、Storybook test-runnerやvisual regression testingを現代的な選択肢として見る方が実用的です。",
          "父の言葉で言うと、Snapshotは前の写真と今の写真を並べる道具です。写真が違うことは分かります。でも、どちらが良い写真かは見て判断します。",
        ],
      },
    ],
  },
  {
    slug: "custom-hooks-context-quality",
    order: 12,
    lane: "advanced-b",
    title: "custom hookとContext: 困りごとが見えてから使う",
    intro: "HooksやContextは最初から全部覚えるべき？ 便利な道具は、重複やprops drillingの困りごとが見えてから使います。",
    conclusion: "custom hookはロジックに名前を付けて再利用する道具、Contextは深いprops渡しを減らす道具です。必要になってから使います。",
    lesson: "useCounterを2つのUIで使い回し、Contextが必要な場面と不要な場面を見ます。",
    readerGuide: {
      beginner: "custom hookやContextは最初から覚える全部入りセットではありません。重複やpropsの受け渡しで困ってから使う道具です。",
      intermediate: "中級者は、ロジック再利用、props drilling、reducer、Context分割、useMemo/useCallbackの使いどころを判断軸として見ます。",
      handsOn: "2つのカウンターで同じuseCounterを使い回し、UIは別でもロジックを共有できることを確認します。",
    },
    demo: "customHook",
    demoTypes: ["複数UI", "custom hook", "Context判断"],
    prerequisites: ["useState", "props", "コンポーネント設計"],
    goals: ["custom hookをロジックの再利用として説明できる", "Contextを共通値の配達ルートとして理解する", "useMemo/useCallbackなどの最適化は後でよいと分かる"],
    vocabulary: [
      { term: "custom hook", meaning: "Hookを使う処理に名前を付け、複数部品で使い回す関数。" },
      { term: "props drilling", meaning: "途中の部品を何段も通してpropsを渡し続けること。" },
      { term: "reducer", meaning: "複雑な状態更新を、イベント名と処理に分けて整理する道具。" },
    ],
    manga: commonManga,
    pitfalls: ["早すぎる抽象化: まず重複や困りごとが見えてから切り出します。", "何でもContextに入れる: 追いにくくなるので本当に共有したい値に絞ります。"],
    exercises: ["useCounterが返す値と関数を考える", "テーマ色をContextに入れるべきか判断する", "useMemoを使う前に普通の再描画で困っているか確認する"],
    official: "公式Learnの「カスタムHookでロジックを再利用する」「Contextで深く値を渡す」に対応します。",
    sections: [
      {
        title: "便利な道具は、困ってから持つ",
        body: [
          "custom hook、Context、reducer、useMemo、useCallback。名前だけ先に並ぶと、Reactは急に難しく見えます。でも多くは、困りごとに名前を付けた道具です。",
          "この連載の最後では、基礎で見た値、画面、部品の関係に戻ります。道具が増えても、Reactの中心は値から画面を作ることです。",
        ],
      },
      {
        title: "custom hookはロジックに名前を付ける",
        body: [
          "複数のコンポーネントで同じstate更新やEffectを使うようになったら、custom hookを考えます。useCounter、useLocalStorage、useDebouncedValueのように、動きに名前を付けて再利用できます。",
          "custom hookは見た目を返すものではなく、ロジックを返すことが多いです。count、increment、resetのような値と関数を返し、UI側はそれを使って自由に表示します。",
          "初心者は、custom hookを早く作る必要はありません。中級者は、同じ処理が増えた時に『これは部品ではなくロジックとして切り出せるか』を考えます。",
        ],
        code: {
          filename: "useCounter.ts",
          value: `function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  return {
    count,
    increment: () => setCount((current) => current + 1),
    reset: () => setCount(initialValue),
  };
}`,
        },
      },
      {
        title: "Contextは共有値の配達ルート",
        body: [
          "Contextは、深い階層へpropsを何段も渡すのがつらくなった時に使う道具です。テーマ、ログインユーザー、言語設定のように、多くの場所で読む共通値に向いています。",
          "ただし、何でもContextに入れると追いにくくなります。どこから値が来たのか、どこで変わるのかが見えにくくなるからです。まずpropsで渡して困りごとを確認し、それからContextを検討します。",
          "useMemoやuseCallbackも同じです。最初から使う合言葉ではなく、再描画や参照の変化で実際に困った時の道具です。Reactの発展領域は、基礎の困りごとに対する答えとして学ぶと理解しやすくなります。",
        ],
      },
    ],
  },
];

export function getReactIntroArticle(slug: string) {
  return reactIntroArticles.find((article) => article.slug === slug);
}

export function getReactIntroLane(id: ReactIntroLaneId) {
  return reactIntroLanes.find((lane) => lane.id === id);
}
