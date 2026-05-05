export type ReactIntroArticle = {
  conclusion: string;
  demo?: "effect" | "form" | "list" | "profile" | "state";
  intro: string;
  lesson: string;
  next?: string;
  order: number;
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
};

export const reactIntroSources = [
  {
    title: "改訂新版 これからはじめるReact実践入門",
    url: "https://www.sbcr.jp/product/4815635947/",
    note: "React 19以降、Next.js 15以降、モダンJavaScript、TypeScript、Next.jsによるアプリ開発を扱う入門書。",
  },
  {
    title: "TypeScriptとReact/Next.jsでつくる実践Webアプリケーション開発",
    url: "https://gihyo.jp/dp/ebook/2022/978-4-297-12917-0",
    note: "TypeScript、React/Next.js基礎、Hooks、Context、Atomic Design、Storybook、テスト、リリース改善を扱う実践書。",
  },
];

export const reactIntroArticles: ReactIntroArticle[] = [
  {
    slug: "why-react",
    order: 1,
    title: "なぜReactが選ばれるのか",
    intro:
      "React入門の最初の問いは、「なぜReactなのか」です。流行っているからではなく、画面を部品として考えられるところに強さがあります。",
    conclusion:
      "Reactは、画面を小さな部品に分け、値の変化に合わせて表示を作り直すための道具です。",
    lesson: "Reactは、画面を作るための部品箱です。",
    demo: "profile",
    next: "mental-model",
    sections: [
      {
        title: "Reactは画面を部品で考える",
        body: [
          "ボタン、カード、入力欄、一覧。Web画面は、小さな部品の集まりです。Reactはその部品をコンポーネントとして作ります。",
          "部品に分けると、作る範囲、直す範囲、使い回す範囲が小さくなります。大きな画面でも、父の頭が少しだけ散らかりにくくなります。",
        ],
      },
      {
        title: "Reactは値の変化に強い",
        body: [
          "Webアプリでは、ログイン状態、入力中の文字、カートの個数、読み込み中かどうかなど、値がどんどん変わります。",
          "Reactは、値が変わったら、その値を使う画面をもう一度作る、という考え方で画面を更新します。",
        ],
        code: {
          filename: "Reactの大まかな考え方",
          value: `
値が変わる
  ↓
Reactが部品をもう一度計算する
  ↓
画面が新しい表示になる
          `,
        },
      },
    ],
  },
  {
    slug: "mental-model",
    order: 2,
    title: "Reactの頭の中を見る",
    intro:
      "Reactを難しく感じる理由は、画面の裏で何が起きているか見えにくいからです。まずは、Reactの頭の中を図として見ます。",
    conclusion:
      "Reactは「現在の値」をもとにコンポーネントを計算し、その結果を画面に出します。",
    lesson: "state、props、再描画、表示結果の流れを見ます。",
    demo: "state",
    next: "jsx",
    sections: [
      {
        title: "画面は結果である",
        body: [
          "Reactでは、画面は手で直接書き換えるものというより、「現在の値から計算された結果」です。",
          "countが0なら0回と表示され、countが1なら1回と表示されます。表示だけを直すのではなく、元になる値を変えます。",
        ],
      },
      {
        title: "再描画は怖くない",
        body: [
          "再描画とは、コンポーネントをもう一度呼び直して、新しい画面を作ることです。",
          "全部を手作業で作り直すわけではありません。Reactが差分を見て、必要な表示に更新してくれます。",
        ],
      },
    ],
  },
  {
    slug: "jsx",
    order: 3,
    title: "JSXは画面の設計図",
    intro:
      "JSXはHTMLに似ていますが、JavaScriptの中に書ける画面の設計図です。Reactでは、このJSXでコンポーネントの見た目を書きます。",
    conclusion:
      "JSXは、JavaScriptの値を画面に混ぜ込める、React用の見た目の書き方です。",
    lesson: "JSXの中で値が表示に変わる様子を見ます。",
    demo: "profile",
    next: "components",
    sections: [
      {
        title: "HTMLっぽいけれどJavaScriptの中にいる",
        body: [
          "JSXはHTMLに似ていますが、JavaScriptの式を波かっこで差し込めます。",
          "たとえば{name}と書くと、nameという値が画面に出ます。ここがReactの直感的なところです。",
        ],
        code: {
          filename: "Greeting.tsx",
          value: `
const name = "娘";

export function Greeting() {
  return <p>こんにちは、{name}さん。</p>;
}
          `,
        },
      },
      {
        title: "classではなくclassName",
        body: [
          "JSXでは、HTMLのclass属性をclassNameと書きます。JavaScriptのclassという言葉とぶつからないようにするためです。",
          "細かい違いはいくつかありますが、最初は「HTMLに似ているけれど、JavaScriptの中にいる」と覚えると十分です。",
        ],
      },
    ],
  },
  {
    slug: "components",
    order: 4,
    title: "コンポーネントとは何か",
    intro:
      "Reactの中心はコンポーネントです。難しく聞こえますが、まずは「画面の部品」と考えれば大丈夫です。",
    conclusion: "コンポーネントは、見た目と役割をひとまとめにした画面の部品です。",
    lesson: "同じ形の画面を何度も作るなら、部品にすると楽になります。",
    demo: "profile",
    next: "props",
    sections: [
      {
        title: "関数が画面を返す",
        body: [
          "Reactのコンポーネントは、基本的には関数です。普通の関数と違うのは、文字や数字ではなく、画面の形を返すところです。",
          "コンポーネント名は大文字で始めます。大文字なら自作部品、小文字ならHTMLタグ、と見分けやすくなります。",
        ],
        code: {
          filename: "Greeting.tsx",
          value: `
function Greeting() {
  return <p>こんにちは</p>;
}

export default function Page() {
  return <Greeting />;
}
          `,
        },
      },
      {
        title: "分けすぎない",
        body: [
          "コンポーネントは便利ですが、最初から細かく分けすぎると逆に読みにくくなります。",
          "同じ見た目を何度も使う、役割がはっきりしている、名前を付けると読みやすい。そんなときに分けると自然です。",
        ],
      },
    ],
  },
  {
    slug: "props",
    order: 5,
    title: "propsで部品に情報を渡す",
    intro:
      "同じカードを何度も使いたい。でも名前や説明文は変えたい。そんなときに使うのがpropsです。",
    conclusion: "propsは、親から子のコンポーネントへ渡す設定値です。",
    lesson: "propsは、部品に貼るラベルのようなものです。",
    demo: "profile",
    next: "state",
    sections: [
      {
        title: "同じ部品に違う中身を入れる",
        body: [
          "プロフィールカードの形は同じでも、表示する人の名前は変えたい。毎回カードを作り直すより、名前だけ外から渡す方が自然です。",
          "この外から渡す値をpropsと呼びます。propsを使うと、同じ部品を違う内容で再利用できます。",
        ],
        code: {
          filename: "ProfileCard.tsx",
          value: `
type ProfileCardProps = {
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
}
          `,
        },
      },
      {
        title: "propsは上から下へ流れる",
        body: [
          "Reactでは、親コンポーネントから子コンポーネントへ情報を渡すのが基本です。",
          "水が上から下へ流れるように考えると、どこから情報が来たのか追いやすくなります。",
        ],
      },
    ],
  },
  {
    slug: "state",
    order: 6,
    title: "stateで画面の変化を覚える",
    intro:
      "ボタンを押した回数、入力中の文字、開いているメニュー。画面の中で変わるものをReactはstateとして扱います。",
    conclusion: "stateは、コンポーネントが覚えている現在の状態です。",
    lesson: "stateは、画面の中のメモです。",
    demo: "state",
    next: "events-and-forms",
    sections: [
      {
        title: "変わる値はstateにする",
        body: [
          "ただ表示するだけの文字ならpropsで十分です。けれど、クリックで増える数字のように変化する値はstateにします。",
          "ReactではuseStateを使うと、値と、その値を変えるための関数を受け取れます。",
        ],
        code: {
          filename: "Counter.tsx",
          value: `
"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}回押した
    </button>
  );
}
          `,
        },
      },
      {
        title: "値を直接書き換えない",
        body: [
          "stateは、変える専用の関数を使って更新します。Reactに「値が変わったよ」と知らせるためです。",
          "count = count + 1 のように直接書き換えるのではなく、setCountを呼びます。",
        ],
      },
    ],
  },
  {
    slug: "events-and-forms",
    order: 7,
    title: "イベントとフォームを扱う",
    intro:
      "Reactで画面を作ると、クリック、入力、送信のようなユーザー操作を扱う場面が出てきます。",
    conclusion: "イベントはユーザー操作の合図で、フォームは入力値をstateで管理すると扱いやすくなります。",
    lesson: "入力値がstateになり、そのstateが表示に反映される様子を見ます。",
    demo: "form",
    next: "lists",
    sections: [
      {
        title: "イベントは合図",
        body: [
          "クリックされた、文字が入力された、フォームが送信された。こうしたユーザー操作をイベントと呼びます。",
          "Reactでは、onClickやonChangeに関数を渡して、操作が起きたときの処理を書きます。",
        ],
        code: {
          filename: "Button.tsx",
          value: `
function Button() {
  function handleClick() {
    alert("押されました");
  }

  return <button onClick={handleClick}>押す</button>;
}
          `,
        },
      },
      {
        title: "入力欄はstateとつなぐ",
        body: [
          "入力欄の中身をReact側で覚えたいときは、valueとonChangeを使います。",
          "入力された文字をstateに入れておくと、確認画面や検索条件など、別の場所でも使いやすくなります。",
        ],
      },
    ],
  },
  {
    slug: "lists",
    order: 8,
    title: "リストを表示する",
    intro:
      "記事一覧、商品一覧、コメント一覧。Webアプリには、同じ形の情報を並べる画面がたくさんあります。",
    conclusion: "配列をmapで回して、同じ形のコンポーネントを並べます。",
    lesson: "配列の中身が増えると、表示される項目も増える様子を見ます。",
    demo: "list",
    next: "conditional-rendering",
    sections: [
      {
        title: "配列から画面を作る",
        body: [
          "Reactでは、配列のmapを使って複数の要素を作れます。",
          "ひとつずつ手で書くより、データから表示を作る方が、増減に強くなります。",
        ],
        code: {
          filename: "TopicList.tsx",
          value: `
const topics = ["components", "props", "state"];

function TopicList() {
  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic}>{topic}</li>
      ))}
    </ul>
  );
}
          `,
        },
      },
      {
        title: "keyは名札",
        body: [
          "リストを表示するときはkeyを付けます。Reactが「どの項目がどれか」を見分けるための名札です。",
          "できれば、変わりにくいIDやslugをkeyにします。順番の番号だけに頼ると、並び替えで困ることがあります。",
        ],
      },
    ],
  },
  {
    slug: "conditional-rendering",
    order: 9,
    title: "条件によって表示を変える",
    intro:
      "ログインしているか、読み込み中か、エラーがあるか。Webアプリでは、条件によって画面を切り替える場面がよくあります。",
    conclusion: "条件分岐を使うと、今の状態に合った画面だけを表示できます。",
    lesson: "stateの値によって表示される文章が変わる様子を見ます。",
    demo: "state",
    next: "use-effect",
    sections: [
      {
        title: "ifで早めに返す",
        body: [
          "読み込み中なら読み込み中の画面、エラーならエラー画面、成功なら本来の画面。こう分けると読みやすくなります。",
          "Reactでは、returnするJSXを条件で切り替えられます。",
        ],
        code: {
          filename: "StatusView.tsx",
          value: `
function StatusView({ loading }: { loading: boolean }) {
  if (loading) {
    return <p>読み込み中です</p>;
  }

  return <p>表示できました</p>;
}
          `,
        },
      },
      {
        title: "三項演算子は短い条件に使う",
        body: [
          "短い表示切り替えなら、条件 ? A : B も使えます。",
          "ただし長くなると読みにくいので、父の寝不足コードになりそうならifで分けます。",
        ],
      },
    ],
  },
  {
    slug: "use-effect",
    order: 10,
    title: "useEffectは外の世界とつなぐ場所",
    intro:
      "Reactの画面は、クリックや入力だけでなく、時間、ブラウザ、APIなど外側の世界とも関わります。",
    conclusion: "useEffectは、Reactの外側にあるものと同期するために使います。",
    lesson: "外のタイマーが動き、stateが変わり、画面に反映される様子を見ます。",
    demo: "effect",
    next: "hooks-and-context",
    sections: [
      {
        title: "まずは使いすぎない",
        body: [
          "useEffectは便利ですが、何でも入れる場所ではありません。表示するための計算だけなら、普通に変数で書けることも多いです。",
          "タイマー、ブラウザAPI、外部データの取得のように、Reactの外側と関わるときに考えます。",
        ],
        code: {
          filename: "Timer.tsx",
          value: `
"use client";

import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(timerId);
  }, []);

  return <p>{seconds}秒</p>;
}
          `,
        },
      },
      {
        title: "後片付けを書く",
        body: [
          "タイマーやイベント登録のように、始めたものは終わるときに片付けます。useEffectのreturnに後片付けを書きます。",
          "部屋もコードも、出したものを戻すところまでが大事です。",
        ],
      },
    ],
  },
  {
    slug: "hooks-and-context",
    order: 11,
    title: "HooksとContextで共通のしくみを作る",
    intro:
      "useStateやuseEffectのように、useから始まる関数をHooksと呼びます。処理を整理したり、共通の値を渡したりできます。",
    conclusion: "HooksはReactの機能を使う入口で、Contextは深い階層へ共通の値を渡すしくみです。",
    lesson: "共通の値が複数の部品に届くイメージを見ます。",
    demo: "profile",
    next: "typescript",
    sections: [
      {
        title: "カスタムHooksで処理に名前を付ける",
        body: [
          "同じstate処理やデータ取得処理が増えてきたら、カスタムHookとして切り出せます。",
          "見た目の部品であるコンポーネントと、動きの部品であるHookを分けると、読みやすくなります。",
        ],
        code: {
          filename: "useCounter.ts",
          value: `
function useCounter() {
  const [count, setCount] = useState(0);

  return {
    count,
    increment: () => setCount((current) => current + 1),
  };
}
          `,
        },
      },
      {
        title: "Contextは使いどころを絞る",
        body: [
          "テーマ、ログインユーザー、言語設定のように、多くの場所で使う値はContextが便利です。",
          "何でもContextに入れると追いにくくなるので、本当に全体で共有したい値に絞ります。",
        ],
      },
    ],
  },
  {
    slug: "typescript",
    order: 12,
    title: "TypeScriptでReactを安全に書く",
    intro:
      "TypeScriptは、値の形を先に決めることで、間違いに早く気づくための道具です。Reactではpropsやデータの形を表すのに役立ちます。",
    conclusion: "TypeScriptは、コンポーネントに渡す値の約束をコードに残してくれます。",
    lesson: "propsの形が決まると、部品の使い方が見えやすくなります。",
    demo: "profile",
    next: "nextjs",
    sections: [
      {
        title: "propsに型を付ける",
        body: [
          "コンポーネントが何を受け取るのかを型で書くと、使う側も読む側も迷いにくくなります。",
          "nameは文字列、countは数値、onClickは関数。こうした約束をコードにできます。",
        ],
        code: {
          filename: "ProfileCard.tsx",
          value: `
type ProfileCardProps = {
  name: string;
  job: string;
};

function ProfileCard({ name, job }: ProfileCardProps) {
  return <p>{name}: {job}</p>;
}
          `,
        },
      },
      {
        title: "まず覚えたい型",
        body: [
          "最初はstring、number、boolean、配列、オブジェクト、関数の型が分かればかなり進めます。",
          "難しい型を全部覚えるより、propsとAPIデータの形を表すところから始めるのが実用的です。",
        ],
      },
    ],
  },
  {
    slug: "nextjs",
    order: 13,
    title: "Next.jsでReactをアプリにする",
    intro:
      "Reactは画面を作るライブラリです。Next.jsは、そのReactを使ってページ、ルーティング、画像、データ取得、デプロイまで扱いやすくするフレームワークです。",
    conclusion: "Next.jsは、Reactで作った部品をWebアプリとして届けるための土台です。",
    lesson: "Reactの部品がページとして配置されるイメージを見ます。",
    demo: "profile",
    next: "component-design-and-quality",
    sections: [
      {
        title: "App RouterではフォルダがURLになる",
        body: [
          "Next.jsのApp Routerでは、appフォルダの構造がページのURLになります。",
          "たとえば app/posts/react-intro/page.tsx は /posts/react-intro のページになります。",
        ],
        code: {
          filename: "app/posts/react-intro/page.tsx",
          value: `
export default function ReactIntroPage() {
  return <main>React入門</main>;
}
          `,
        },
      },
      {
        title: "Server ComponentとClient Component",
        body: [
          "Next.jsでは、サーバー側で描ける部品と、ブラウザ側で動く部品を分けて考えます。",
          "useStateやonClickのようなブラウザ上の動きが必要なら、ファイルの先頭にuse clientを書きます。",
        ],
      },
    ],
  },
  {
    slug: "component-design-and-quality",
    order: 14,
    title: "実践開発で大事になること",
    intro:
      "Reactを覚えたあとに必要になるのは、部品をどう分け、どう確認し、どう公開するかです。",
    conclusion: "実践では、コンポーネント設計、テスト、アクセシビリティ、SEO、デプロイまでがReact開発の一部になります。",
    lesson: "部品、ページ、公開までの流れを見ます。",
    demo: "list",
    sections: [
      {
        title: "部品設計は小さく始める",
        body: [
          "Atomic DesignやContainer/Presentationalの考え方は便利ですが、最初から完璧に分ける必要はありません。",
          "まずはボタン、カード、フォームのように、繰り返し出てくるものから部品にします。",
        ],
      },
      {
        title: "動くことだけでなく、届くことも大事",
        body: [
          "本番では、テスト、アクセシビリティ、SEO、ログ、セキュリティ、デプロイが大事になります。",
          "Reactは画面を作る中心ですが、Webアプリとして届けるには、その周りの品質も一緒に育てます。",
        ],
        code: {
          filename: "実践で見る観点",
          value: `
コンポーネント設計
  ↓
Storybookやテストで確認
  ↓
アクセシビリティとSEOを整える
  ↓
Vercelなどへデプロイ
          `,
        },
      },
    ],
  },
];

export function getReactIntroArticle(slug: string) {
  return reactIntroArticles.find((article) => article.slug === slug);
}
