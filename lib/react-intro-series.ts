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
  manga: {
    introAlt: string;
    introScript: string[];
    outroAlt: string;
    outroScript: string[];
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
  outroAlt: "娘が画面の変化に納得し、父が学び直しの大変さを少しぼやく漫画",
  outroScript: ["娘「少し見えた！」", "父「父も再描画中」"],
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
    ],
  },
];

export function getReactIntroArticle(slug: string) {
  return reactIntroArticles.find((article) => article.slug === slug);
}

export function getReactIntroLane(id: ReactIntroLaneId) {
  return reactIntroLanes.find((lane) => lane.id === id);
}
