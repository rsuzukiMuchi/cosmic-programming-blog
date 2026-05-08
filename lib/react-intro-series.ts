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
  exercises: Array<{
    answer: string;
    question: string;
  }>;
  goals: string[];
  intro: string;
  lane: ReactIntroLaneId;
  lesson: string;
  textbook?: {
    build: string;
    codeReading: string[];
    next: string;
    syntax: string[];
    tryThis: string[];
  };
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
    textbook: {
      build: "ボタンを押すとイベントログが増え、画面の表示も変わる小さな教材を作ります。Reactに入る前に、ブラウザで何が起きているかを一度見える形にします。",
      syntax: [
        "HTMLは見出し、文章、ボタンなどの構造を担当します。まずは画面の骨組みとして見ます。",
        "CSSは色、余白、文字サイズなどの見た目を担当します。Reactを学ぶ時もCSSの崩れとReactの問題を分けて考えます。",
        "JavaScriptはクリックや入力に反応して値を変える担当です。Reactのイベントもこの延長にあります。",
        "DOMはブラウザが持つ画面の実体です。Reactは最終的にDOMへ表示を反映します。",
      ],
      codeReading: [
        "まず、どのHTML要素がユーザーに触られる場所なのかを見ます。今回ならbuttonです。",
        "次に、クリックされた時に呼ばれる関数を見ます。ここがイベント処理の入口です。",
        "最後に、値が変わったあと画面のどこへ表示されるかを確認します。",
      ],
      tryThis: [
        "ボタンの表示文言を「押す」から「学習する」に変えてみる。",
        "クリック回数だけでなく、最後に押した時刻も表示するならどんな値が必要か考える。",
        "HTML、CSS、JavaScriptの役割を、自分がよく見るサイトで1つずつ探す。",
      ],
      next: "次章では、JavaScriptの値そのものを学びます。Reactの画面は、この値を材料にして作られるからです。",
    },
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
    exercises: [
      {
        question: "普段見ているWebページを1つ選び、HTML、CSS、JavaScriptがそれぞれ何を担当していそうか書いてください。",
        answer: "例: HTMLは見出しやボタンなどの構造、CSSは色や余白などの見た目、JavaScriptはメニューを開く、検索する、入力に反応するなどの動きを担当しています。",
      },
      {
        question: "クリック、入力、送信のうち、イベントと呼べるものを3つ挙げてください。",
        answer: "クリック、入力、送信はいずれもイベントです。Reactでは onClick、onChange、onSubmit のような名前で受け取ります。",
      },
    ],
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
    title: "React前に押さえるJavaScript基本文法",
    intro: "Reactのコードを読もうとした時、実はReactではなくJavaScriptで止まっていることがあります。変数、関数、配列、オブジェクト、import/exportを先に整理します。",
    conclusion: "ReactのコードはJavaScriptの上にあります。変数、関数、配列、オブジェクト、条件式、import/exportが読めると、JSXやprops、stateもかなり理解しやすくなります。",
    lesson: "名前や数値を編集し、JavaScriptの値がJSXの表示に変わる様子を見ます。",
    textbook: {
      build: "名前、数値、配列、オブジェクトを用意し、それらをJSXに差し込んで表示する教材を作ります。Reactの前にJavaScriptの読み方を固めます。",
      syntax: [
        "constは再代入しない値に名前を付けるために使います。Reactのサンプルでは非常によく出ます。",
        "関数は処理に名前を付ける道具です。コンポーネントもイベントハンドラも関数です。",
        "配列は一覧表示の材料です。mapで1件ずつJSXに変換します。",
        "オブジェクトはまとまったデータです。propsやAPIレスポンスを読む時に必ず出ます。",
        "import/exportは、部品をファイル間で受け渡すために使います。",
      ],
      codeReading: [
        "最初にconstで定義された値を見ます。画面に出る材料がどこにあるか確認します。",
        "次にreturnの中のJSXを見ます。波かっこに入っている値を探します。",
        "mapが出てきたら、配列の1件がどのJSXに変わるかを追います。",
        "typeがある場合は、オブジェクトがどんな形を持つかを先に読みます。",
      ],
      tryThis: [
        "nameを別の文字列に変えて、表示がどう変わるか確認する。",
        "topics配列に新しい項目を追加して、liが増えることを確認する。",
        "Article型にdescriptionを追加し、画面にも表示してみる。",
      ],
      next: "次章では、この値をコンポーネントへ渡します。JavaScriptのオブジェクトと分割代入がprops理解につながります。",
    },
    readerGuide: {
      beginner: "まず、Reactの前にJavaScriptの値を見ます。文字、数字、配列、オブジェクトが画面の材料になることを掴みます。",
      intermediate: "中級者は、関数、分割代入、map、import/export、式と文の違いを、Reactコンポーネントの読み方につなげます。",
      handsOn: "名前と数値を編集し、同じJSXから表示が変わることを確認します。JavaScriptの値が画面に出る場所を対応させます。",
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
    exercises: [
      {
        question: "const name = '娘' を const name = '父' に変えると、<p>こんにちは、{name}さん。</p> の表示はどう変わりますか？",
        answer: "「こんにちは、娘さん。」から「こんにちは、父さん。」に変わります。JSXの {name} には変数nameの中身が入るためです。",
      },
      {
        question: "countが3のとき、count + 1 の結果を画面に出すJSXを書いてください。",
        answer: "例: <p>{count + 1}</p> と書きます。countが3なら、画面には4と表示されます。",
      },
      {
        question: "配列 const topics = ['JSX', 'props', 'state'] を <li> に変えるコードを書いてください。",
        answer: "例: {topics.map((topic) => <li key={topic}>{topic}</li>)} と書きます。mapで配列の1件ずつをJSXに変えます。",
      },
    ],
    official: "React公式Learnの「波括弧を使ってJSX内でJavaScriptを使う」を読む前の土台です。",
    next: "components-and-props",
    sections: [
      {
        title: "変数は画面の材料になる",
        body: [
          "Reactでは、画面に直接文字を書き込むより、まず値を用意し、その値をJSXに差し込みます。nameが変われば、同じJSXでも違う表示になります。",
          "これは小さな違いに見えます。でも、入力欄、検索結果、ログイン状態など、変わるものが増えるほど大事になります。画面を直接直すのではなく、画面の材料を変えるからです。",
          "初心者は、const name = '娘' のような変数が、画面に表示される材料になると見れば十分です。中級者は、その値がpropsやstateとしてどこから来るのかまで追います。",
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
        title: "関数は部品の動きに名前を付ける",
        body: [
          "Reactでは関数が何度も出てきます。コンポーネントも関数ですし、クリックされた時に呼ぶ処理も関数です。関数は、まとまった処理に名前を付けるための道具です。",
          "たとえばhandleClickという関数名を見ると、クリック時の処理だと分かります。handleChangeなら入力が変わった時の処理です。Reactでは、このようにイベントに渡す関数がよく出てきます。",
          "中級者は、関数をその場で書くのか、名前を付けて外に出すのかも見ます。処理が短ければその場でよく、長くなったら名前を付けると読みやすくなります。",
        ],
        code: {
          filename: "イベント関数の基本",
          value: `function handleClick() {
  console.log("クリックされました");
}

return <button onClick={handleClick}>押す</button>;`,
        },
      },
      {
        title: "配列は一覧表示の材料になる",
        body: [
          "記事一覧、コメント一覧、検索結果、メニュー。Web画面には同じ形を繰り返す場所がたくさんあります。Reactでは、配列をmapでJSXに変換して一覧を作ります。",
          "mapは、配列の1件ずつを別の形に変える道具です。文字列の配列をliの配列に変える。記事データの配列をArticleCardの配列に変える。これがリスト表示の基本です。",
          "ここでkeyも出てきます。keyはReactが項目を見分ける名札です。詳しくはリストの章で扱いますが、mapとkeyはセットで何度も出てくるので、早めに形に慣れておきます。",
        ],
        code: {
          filename: "配列を一覧表示にする",
          value: `const topics = ["JSX", "props", "state"];

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
        title: "オブジェクトはまとまったデータを表す",
        body: [
          "Reactでは、1つの値だけでなく、まとまったデータを扱うことが多いです。記事ならtitle、slug、descriptionを持つ。ユーザーならname、email、roleを持つ。こうしたまとまりはオブジェクトで表します。",
          "オブジェクトの値は、user.name のようにドットで取り出します。propsとして渡す時にも、オブジェクトの形を知っていると読みやすくなります。",
          "TypeScriptを使うと、このオブジェクトの形に名前を付けられます。中級者は、APIから返ってくるデータの形をtypeで表すところまで見ると、ReactとTypeScriptがつながります。",
        ],
        code: {
          filename: "オブジェクトと型",
          value: `type Article = {
  title: string;
  slug: string;
};

const article: Article = {
  title: "React入門",
  slug: "react-intro",
};

return <h1>{article.title}</h1>;`,
        },
      },
      {
        title: "分割代入はpropsを読む時によく出る",
        body: [
          "Reactのコードでは、function ProfileCard({ name, job }) のような書き方がよく出ます。これは分割代入です。propsというオブジェクトから、nameとjobだけを取り出しています。",
          "最初は少し見慣れませんが、props.name、props.jobと毎回書く代わりに、必要な値を先に取り出しているだけです。",
          "この書き方に慣れると、Reactのサンプルコードが読みやすくなります。公式ドキュメントやUIライブラリのコードにも頻繁に出てきます。",
        ],
        code: {
          filename: "propsの分割代入",
          value: `type ProfileCardProps = {
  name: string;
  job: string;
};

function ProfileCard({ name, job }: ProfileCardProps) {
  return <p>{name}: {job}</p>;
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
      {
        title: "import / export は部品をファイル間で受け渡す仕組み",
        body: [
          "Reactでは、コンポーネントを別ファイルに分けて使います。その時に出てくるのがexportとimportです。作った部品をexportし、使う側でimportします。",
          "初心者は、exportは外へ出す、importは受け取る、と覚えると十分です。中級者は、default exportとnamed exportの違い、相対パス、indexファイルでまとめる設計まで見ると、プロジェクトが大きくなっても迷いにくくなります。",
          "最初のうちは、1ファイルに全部書いても構いません。ただ、コンポーネントが増えたら、意味のある単位でファイルを分けます。ここでも大事なのは、名前を付けると読みやすいかです。",
        ],
        code: {
          filename: "import / export",
          value: `// components/ProfileCard.tsx
export function ProfileCard() {
  return <article>プロフィール</article>;
}

// app/page.tsx
import { ProfileCard } from "@/components/ProfileCard";

export default function Page() {
  return <ProfileCard />;
}`,
        },
      },
    ],
  },
  {
    slug: "components-and-props",
    order: 3,
    lane: "required-b",
    title: "コンポーネントとprops: 同じ部品に違う材料を渡す",
    intro: "同じ見た目のカードを何度も使うには？ コンポーネントを画面の部品として作り、propsで中身を変えます。",
    conclusion: "コンポーネントは画面の部品、propsは親から渡す材料です。同じ部品でも、材料を変えれば違う表示になります。",
    lesson: "親側の値を変えると、同じProfileCardの表示が変わる様子を見ます。",
    textbook: {
      build: "ProfileCardを1つ作り、娘用と父用の2回表示します。同じ部品に違うpropsを渡すことで、表示が変わることを確認します。",
      syntax: [
        "コンポーネントは大文字で始める関数として作ります。小文字だとHTMLタグとして扱われます。",
        "propsは親から子へ渡される値です。子はpropsを材料にして表示を作ります。",
        "TypeScriptではpropsの型を書くと、部品の使い方が読みやすくなります。",
        "childrenを使うと、タグの間に書いた内容を部品の中へ渡せます。",
      ],
      codeReading: [
        "まずProfileCardのprops型を見て、外から何を渡せる部品なのか確認します。",
        "次に関数の引数を見て、propsをどう受け取っているか確認します。",
        "returnの中で、propsの値がどこに表示されているかを追います。",
        "最後に呼び出し側を見て、nameやjobに何を渡しているか確認します。",
      ],
      tryThis: [
        "ProfileCardにfavoriteというpropsを追加して、好きなものを表示する。",
        "父と娘に加えて、もう1つ別のカードを表示する。",
        "jobを省略可能にしたら、型と表示をどう変えるか考える。",
      ],
      next: "次章では、外から渡すpropsではなく、部品自身が覚えるstateを扱います。",
    },
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
    exercises: [
      {
        question: "Buttonコンポーネントに label='保存' を渡し、ボタン内に表示するコードを書いてください。",
        answer: "例: function Button({ label }: { label: string }) { return <button>{label}</button>; } と書き、<Button label='保存' /> のように使います。",
      },
      {
        question: "ProfileCardを娘用と父用の2回表示するには、propsをどう変えますか？",
        answer: "例: <ProfileCard name='娘' job='なんで？係' /> と <ProfileCard name='父' job='説明係' /> のように、同じ部品に違うpropsを渡します。",
      },
      {
        question: "ProfileCardのprops型をTypeScriptで書いてください。nameとjobはどちらも文字列です。",
        answer: "例: type ProfileCardProps = { name: string; job: string; }; と書きます。",
      },
    ],
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
    title: "stateとイベント: 値が変わると画面が変わる",
    intro: "ボタンを押した回数を、Reactはどう覚えるの？ eventをきっかけにstateが変わり、再描画で画面が変わります。",
    conclusion: "stateは部品自身が覚える変化する値です。eventでsetStateを呼ぶと、Reactが新しい値から画面を作り直します。",
    lesson: "カウンターを押して、きっかけ、値、再描画、画面の4段階を追います。",
    textbook: {
      build: "増やすボタン、減らすボタン、リセットボタンを持つカウンターを作ります。イベントでstateが変わり、画面が更新される流れを見ます。",
      syntax: [
        "useStateは、現在の値と更新関数をセットで返します。const [count, setCount] の形で受け取ります。",
        "onClickには関数を渡します。onClick={handleClick} は関数を渡し、onClick={handleClick()} はその場で実行してしまいます。",
        "前の値を使う更新では、setCount((current) => current + 1) の形を使うと安全です。",
        "stateは直接代入しません。更新関数を使ってReactに知らせます。",
      ],
      codeReading: [
        "最初にuseStateの初期値を見ます。画面が最初にどう表示されるか分かります。",
        "次にボタンのonClickを見ます。どの操作でどの更新関数が呼ばれるか確認します。",
        "更新関数の中で、前の値を使っているか、固定値を入れているかを見ます。",
        "最後にJSXのどこでstateが表示されているかを確認します。",
      ],
      tryThis: [
        "初期値を0から10に変える。",
        "2ずつ増えるボタンを追加する。",
        "countが0未満にならないように減らすボタンを修正する。",
      ],
      next: "次章では、入力欄の値をstateとして持ちます。クリックだけでなく、入力イベントも扱います。",
    },
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
    exercises: [
      {
        question: "const [count, setCount] = useState(5) にすると、最初の表示はどうなりますか？",
        answer: "countの初期値が5なので、最初から「5回押した」のように表示されます。",
      },
      {
        question: "countを1減らすボタンのonClickを書いてください。",
        answer: "例: onClick={() => setCount((current) => current - 1)} と書きます。前の値currentを受け取り、1減らした値を返します。",
      },
      {
        question: "ボタンのlabelと、押した回数countは、それぞれpropsとstateのどちらに向いていますか？",
        answer: "labelは親から渡して変えることが多いのでprops向きです。countはボタンを押すたびに部品自身が覚える値なのでstate向きです。",
      },
    ],
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
    title: "フォーム: 入力欄とstateをつなぐ",
    intro: "入力した名前を、別の場所にもすぐ表示するには？ 入力欄のvalueとstateをつなぐと、画面全体で同じ値を使えます。",
    conclusion: "controlled componentは、入力欄の値をReactのstateで管理する作り方です。入力とプレビューが同じ値を見るようになります。",
    lesson: "入力欄に文字を入れ、state、プレビュー、イベントログが同時に変わる様子を見ます。",
    textbook: {
      build: "名前入力フォームを作り、入力した文字をプレビュー、文字数、送信ボタンの状態に反映します。入力欄とstateがつながる感覚を固めます。",
      syntax: [
        "inputのvalueにstateを渡すと、入力欄の表示値をReactが管理します。",
        "onChangeでevent.target.valueを読み、setNameでstateを更新します。",
        "空文字の場合の表示には、name || '名前なし' のような書き方が使えます。",
        "送信時にはDOMから探すのではなく、stateに入っている値を読みます。",
      ],
      codeReading: [
        "まずuseStateで入力値の置き場所を確認します。",
        "次にinputのvalueとonChangeを見て、入力欄とstateがつながっているか確認します。",
        "プレビュー部分で同じstateが使われている場所を探します。",
        "送信ボタンやエラー表示がある場合、どのstateから判断しているかを見ます。",
      ],
      tryThis: [
        "文字数を表示する。",
        "空文字の時だけ送信ボタンをdisabledにする。",
        "12文字を超えたら注意メッセージを表示する。",
      ],
      next: "次章では、入力値や配列の状態に応じて表示を切り替えます。条件分岐とリスト表示へ進みます。",
    },
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
    exercises: [
      {
        question: "nameが空文字なら「名前なし」と表示するJSXを書いてください。",
        answer: "例: <p>{name || '名前なし'}</p> と書きます。nameが空文字なら右側の文字が使われます。",
      },
      {
        question: "入力値nameを見出しと本文の2か所に表示してください。",
        answer: "例: <h2>{name}</h2><p>こんにちは、{name}さん。</p> のように、同じstateを複数箇所で使います。",
      },
      {
        question: "フォーム送信時に読むべき値は、DOMのinputから探すべきですか？ stateから読むべきですか？",
        answer: "controlled componentとして作っているなら、stateのnameから読みます。入力欄のvalueとstateが同期しているためです。",
      },
    ],
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
    title: "条件分岐とリスト: 条件と配列から画面を作る",
    intro: "データが空の時、読み込み中の時、項目が増えた時、Reactではどう表示を変えるの？ 条件と配列を画面に変えます。",
    conclusion: "条件付きレンダーは今の状態に合う表示を選び、list renderingは配列をmapで複数の表示に変えます。",
    lesson: "トグルで表示を切り替え、配列に項目を追加して、画面が増える様子を見ます。",
    textbook: {
      build: "学習トピック一覧を作り、項目の追加・削除、空状態、読み込み中、エラー表示を切り替えます。実アプリでよく出る状態をまとめて扱います。",
      syntax: [
        "条件付きレンダーでは、if、三項演算子、&&を使って表示を切り替えます。",
        "配列はmapでJSXの配列に変換します。一覧表示の基本です。",
        "keyはReactが項目を見分けるための名札です。できるだけ安定したidを使います。",
        "空状態、loading、error、successを分けると、実用的なUIになります。",
      ],
      codeReading: [
        "まずstatusやitemsのような状態を探します。画面の分岐条件になります。",
        "次にifや三項演算子を見て、どの条件で何を表示するか確認します。",
        "mapの中では、配列の1件がどのJSXに変わるかを見ます。",
        "keyに何を使っているかを確認し、並び替えや削除に強いか考えます。",
      ],
      tryThis: [
        "項目が0件のときだけ空メッセージを出す。",
        "項目にidを追加し、keyをidに変える。",
        "loading、error、successを切り替えるstateを追加する。",
      ],
      next: "次章では、Reactの外側の出来事と同期します。タイマーやデータ取得にはuseEffectが関わります。",
    },
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
    exercises: [
      {
        question: "items.lengthが0なら「まだ項目がありません」と表示するJSXを書いてください。",
        answer: "例: {items.length === 0 ? <p>まだ項目がありません</p> : <ItemList items={items} />} と書きます。",
      },
      {
        question: "topicsが['component', 'props', 'state'] のとき、mapで作られるliは何個ですか？",
        answer: "3個です。配列の要素が3件あるので、mapで3つのliが作られます。",
      },
      {
        question: "記事一覧のkeyには、indexとarticle.idのどちらが向いていますか？理由も書いてください。",
        answer: "article.idが向いています。削除や並び替えがあっても、同じ記事を安定して見分けられるためです。",
      },
    ],
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
    textbook: {
      build: "開始・停止できるタイマーを作ります。setIntervalで外の時間が進み、useEffectを通じてstateと画面が同期する流れを確認します。",
      syntax: [
        "useEffectは、Reactの外側と同期する時に使います。表示用の計算を何でも入れる場所ではありません。",
        "依存配列は、Effectをいつ実行し直すかを決めます。",
        "returnでcleanup関数を返すと、タイマーや購読を片付けられます。",
        "API取得ではloading、error、successを分けると画面が読みやすくなります。",
      ],
      codeReading: [
        "まずEffectの中で何と同期しているかを見ます。タイマーなのか、APIなのか、ブラウザAPIなのかを分けます。",
        "次に依存配列を見ます。どの値が変わるとEffectが実行し直されるか確認します。",
        "cleanupがあるかを確認します。外側で始めた処理を止めているかが重要です。",
      ],
      tryThis: [
        "タイマーの間隔を1秒から0.5秒に変える。",
        "停止中はsecondsを増やさないようにする。",
        "リセット時にrunningもfalseへ戻す。",
      ],
      next: "次は、state、条件分岐、リストを組み合わせて、実際によくあるUIパターンを作ります。",
    },
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
    exercises: [
      {
        question: "setIntervalで始めたタイマーを止める処理は、useEffectのどこに書きますか？",
        answer: "useEffectのreturnで返すcleanup関数に書きます。例: return () => clearInterval(timerId); です。",
      },
      {
        question: "API取得画面で必要な3つの状態 loading / error / success を、それぞれどんな表示にするか書いてください。",
        answer: "例: loadingは「読み込み中」、errorは「取得に失敗しました。再試行してください」、successは取得したデータ一覧を表示します。",
      },
    ],
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
    textbook: {
      build: "タブ、検索結果、空状態、エラー状態の小さなUIを作ります。Reactの基本概念が実際の画面でどう組み合わさるかを見ます。",
      syntax: [
        "タブUIでは、現在選ばれているタブをstateで持ちます。",
        "検索UIでは、入力値をstateで持ち、配列をfilterして表示します。",
        "モーダルやメニューでは、開いているかどうかをbooleanのstateで持つことが多いです。",
        "送信中や読み込み中は、ボタン文言やdisabled状態にも反映します。",
      ],
      codeReading: [
        "まず、そのUIが何を覚える必要があるかを探します。activeTab、query、isOpenなどです。",
        "次に、どのイベントでstateが変わるかを見ます。",
        "最後に、stateによって表示がどう分岐するかを確認します。",
      ],
      tryThis: [
        "タブを1つ追加する。",
        "検索結果が0件の時に空状態を表示する。",
        "送信中だけボタンをdisabledにする。",
      ],
      next: "次章では、Reactの部品をNext.jsのページ、URL、データ取得へつなげます。",
    },
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
    exercises: [
      {
        question: "検索結果が0件のとき、ユーザーに次の行動が伝わる文言を書いてください。",
        answer: "例: 「該当する記事はありません。キーワードを変えて検索してみてください。」のように、次にできることを添えます。",
      },
      {
        question: "タブUIで最低限必要なstate名を1つ考えてください。",
        answer: "例: activeTabです。現在どのタブが選ばれているかを覚えるために使います。",
      },
      {
        question: "送信中のボタン文言を通常時と送信中で分けてください。",
        answer: "例: 通常時は「送信する」、送信中は「送信中...」です。送信中はdisabledにすると二重送信も防げます。",
      },
    ],
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
    textbook: {
      build: "記事一覧ページと記事詳細ページを例に、Reactの部品がNext.jsのURLへ配置される流れを学びます。Client Componentが必要な場所も見分けます。",
      syntax: [
        "App Routerでは、app配下のフォルダとpage.tsxがURLに対応します。",
        "Server Componentはサーバー側で描ける部品です。stateやonClickは使いません。",
        "Client Componentはブラウザで動く部品です。useStateやイベントが必要な時に使います。",
        "metadataはページのタイトルや説明を検索エンジンやSNSに伝えるために使います。",
      ],
      codeReading: [
        "まずapp配下のファイルパスを見て、どのURLになるか確認します。",
        "次に、その部品にuseStateやonClickがあるか確認します。あればClient Component候補です。",
        "データ取得がどこで行われているかを見ます。サーバー側でよいのか、ブラウザ側が必要なのかを分けます。",
      ],
      tryThis: [
        "app/about/page.tsxを作るとしたらURLが何になるか説明する。",
        "いいねボタンを作るならClient Componentが必要か考える。",
        "記事一覧のmetadataに入れる説明文を考える。",
      ],
      next: "次章では、部品の分け方そのものを扱います。Atomic DesignやUIライブラリ比較へ進みます。",
    },
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
    exercises: [
      {
        question: "Next.js App Routerで app/about/page.tsx はどのURLになりますか？",
        answer: "/about になります。app配下のフォルダ構造がURLに対応します。",
      },
      {
        question: "useStateが必要な部品は、Server ComponentとClient Componentのどちらにしますか？",
        answer: "Client Componentにします。useStateやonClickのようなブラウザ上の操作には \"use client\" が必要です。",
      },
      {
        question: "記事APIが返すデータの型を、titleとslugを持つ形で書いてください。",
        answer: "例: type Article = { title: string; slug: string; }; と書きます。",
      },
    ],
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
    textbook: {
      build: "Button、Input、SearchForm、ArticleCard、ArticleListを例に、どの粒度で部品に分けるかを考えます。UIライブラリを使う場合との違いも比べます。",
      syntax: [
        "Atomic Designは、atoms、molecules、organisms、templates、pagesのように粒度を分ける考え方です。",
        "UIライブラリは、見た目やふるまいが整った部品を使う選択肢です。",
        "headless UIは見た目を決めすぎず、アクセシビリティやふるまいを助けます。",
        "design tokenは、色、余白、文字サイズなどのデザイン上の値を名前付きで扱う考え方です。",
      ],
      codeReading: [
        "まず部品名を見て、画面上の役割が伝わるか確認します。",
        "次にpropsを見て、外から何を変えられる部品か確認します。",
        "最後に、その部品が小さすぎないか、大きすぎないかを画面の役割で判断します。",
      ],
      tryThis: [
        "SearchFormをInputとButtonに分ける。",
        "ArticleCardに長いタイトルを渡した時の表示を考える。",
        "MUI、shadcn/ui、Tailwindのみの実装を、自由度と速さで比べる。",
      ],
      next: "次章では、作った部品をStorybookで状態ごとに確認し、壊れにくくする方法へ進みます。",
    },
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
    exercises: [
      {
        question: "Button、Input、SearchForm、ArticleCardをAtomic Designで分類してください。",
        answer: "一例として、ButtonとInputはatoms、SearchFormはmolecules、ArticleCardはmoleculesまたはorganisms寄りです。プロジェクトの粒度によって変わります。",
      },
      {
        question: "MUIとTailwindのみの実装を、完成度と自由度の2軸で比べてください。",
        answer: "MUIは完成度が高く早く作りやすい一方、見た目の自由度には制約があります。Tailwindのみは自由度が高い一方、状態やアクセシビリティを自分で設計する必要があります。",
      },
    ],
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
    textbook: {
      build: "Buttonのnormal、loading、disabled、errorのStoryを用意し、状態ごとに確認します。Storyshotsの考え方と現代的な代替も整理します。",
      syntax: [
        "Storyは、コンポーネントのある状態を切り出した見本です。",
        "Storybookは、部品をページから切り離して確認する作業台です。",
        "Storyshotsは現在では非推奨・メンテナンス終了扱いとして説明します。",
        "現代的にはtest-runner、Portable Stories、visual regression testingを検討します。",
      ],
      codeReading: [
        "まずStory名を見て、どの状態を確認しているか把握します。",
        "次にargsを見て、コンポーネントへどんなpropsを渡しているか確認します。",
        "最後に、そのStoryで何を検証したいのかを考えます。見た目、操作、アクセシビリティを分けます。",
      ],
      tryThis: [
        "ButtonにLoading Storyを追加する。",
        "空状態のArticleList Storyを考える。",
        "visual regressionで検出したい見た目の崩れを1つ書く。",
      ],
      next: "最後に、custom hookやContextなど、困りごとが見えてから使う発展的な道具へ進みます。",
    },
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
    exercises: [
      {
        question: "Buttonのdisabled状態とloading状態のStory名を考えてください。",
        answer: "例: Disabled と Loading です。Story名は状態がすぐ分かる名前にします。",
      },
      {
        question: "Storyshotsの代わりに、現在なら何を検討しますか？",
        answer: "Storybook test-runner、Portable Stories、visual regression testing などを検討します。Storyshotsは現在では非推奨・メンテナンス終了扱いとして説明します。",
      },
      {
        question: "visual regression testingで見つけやすい差分を1つ挙げてください。",
        answer: "例: ボタンの色が変わった、余白が崩れた、テキストが折り返した、アイコン位置がずれた、といった見た目の差分です。",
      },
    ],
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
    title: "カスタムHookとContext: 困りごとが見えてから使う",
    intro: "HooksやContextは最初から全部覚えるべき？ 便利な道具は、重複やprops drillingの困りごとが見えてから使います。",
    conclusion: "custom hookはロジックに名前を付けて再利用する道具、Contextは深いprops渡しを減らす道具です。必要になってから使います。",
    lesson: "useCounterを2つのUIで使い回し、Contextが必要な場面と不要な場面を見ます。",
    textbook: {
      build: "useCounterを作り、2つの別々のUIで同じロジックを使います。さらに、Contextが必要になる場面と不要な場面を比べます。",
      syntax: [
        "custom hookは、Hookを使うロジックに名前を付けて再利用する関数です。",
        "Contextは、深い階層へpropsを渡し続けるつらさを減らすための仕組みです。",
        "reducerは、複雑な状態更新をイベント名と処理に分けて整理する道具です。",
        "useMemoやuseCallbackは、困ってから使う最適化です。最初から入れる必要はありません。",
      ],
      codeReading: [
        "まずcustom hookが何を受け取り、何を返しているか見ます。",
        "次に、複数のUIで同じhookを使っているか確認します。",
        "Contextが出てきたら、本当に多くの階層で必要な値かを確認します。",
      ],
      tryThis: [
        "useCounterにdecrementを追加する。",
        "2つのカウンターの初期値を変える。",
        "テーマ色をContextに入れるべきか、propsで十分かを説明する。",
      ],
      next: "ここまで来たら、Reactの中心である『値から画面を作る』に戻ります。道具が増えても、この見方が土台です。",
    },
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
    exercises: [
      {
        question: "useCounterが返すと便利な値と関数を3つ挙げてください。",
        answer: "例: count、increment、resetです。必要ならdecrementも返せます。",
      },
      {
        question: "テーマ色を多くの部品で使う場合、Contextに入れるのは妥当ですか？",
        answer: "妥当な場合があります。多くの階層で共通して読む値ならContextが向いています。ただし、何でもContextに入れると追いにくくなります。",
      },
      {
        question: "useMemoを使う前に確認することは何ですか？",
        answer: "本当に重い計算や不要な再計算で困っているかを確認します。困っていない段階で使うと、かえってコードが読みにくくなることがあります。",
      },
    ],
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
