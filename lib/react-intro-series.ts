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

export const reactIntroArticles: ReactIntroArticle[] = [
  {
    slug: "why-react",
    order: 1,
    title: "なぜReactが選ばれるのか",
    intro:
      "プログラミングを学び直そうとすると、かなり早い段階でReactという名前に出会います。なぜ、そんなにReactが選ばれるのでしょうか。",
    conclusion:
      "Reactが選ばれる理由は、画面を「部品の組み合わせ」として作れて、変化する画面を整理しながら育てやすいからです。",
    lesson: "Reactは、画面を作るための部品箱です。",
    demo: "profile",
    next: "components",
    sections: [
      {
        title: "Web画面はすぐ散らかる",
        body: [
          "最初は小さなページでも、ボタン、一覧、フォーム、ログイン状態を足すうちに、画面の中身はすぐ複雑になります。",
          "Reactは、その複雑さを「小さな部品」に分けて考えるための道具です。",
        ],
      },
      {
        title: "部品に分けると、考える範囲が小さくなる",
        body: [
          "ヘッダーはヘッダー、カードはカード、ボタンはボタンとして分けます。ひとつずつ見ると、やることがはっきりします。",
          "娘に説明するなら、Reactは画面用のレゴです。小さなブロックを組み合わせて、大きな画面を作ります。",
        ],
        code: {
          filename: "components/ProfileCard.tsx",
          value: `
function ProfileCard() {
  return (
    <article>
      <h2>父</h2>
      <p>宇宙を学び直す人</p>
    </article>
  );
}
          `,
        },
      },
    ],
  },
  {
    slug: "components",
    order: 2,
    title: "コンポーネントとは何か",
    intro:
      "Reactを学ぶ最初の山は、コンポーネントです。難しく聞こえますが、まずは「画面の部品」と考えれば大丈夫です。",
    conclusion: "コンポーネントは、見た目と役割をひとまとめにした画面の部品です。",
    lesson: "同じ形の画面を何度も作るなら、部品にすると楽になります。",
    demo: "profile",
    next: "props",
    sections: [
      {
        title: "関数が画面を返す",
        body: [
          "Reactのコンポーネントは、基本的には関数です。普通の関数と違うのは、文字や数字ではなく、画面の形を返すところです。",
          "この画面の形をJSXと呼びます。HTMLに似ていますが、JavaScriptの中で書ける画面の設計図です。",
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
        title: "名前は大文字で始める",
        body: [
          "Reactでは、自分で作ったコンポーネント名を大文字で始めます。小文字だとHTMLタグのように扱われます。",
          "最初は細かいルールに見えますが、「大文字なら自作部品」と覚えると十分です。",
        ],
      },
    ],
  },
  {
    slug: "props",
    order: 3,
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
          "この外から渡す値をpropsと呼びます。",
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

export default function Page() {
  return <ProfileCard name="父" job="学び直す人" />;
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
    order: 4,
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
          "父の体力は勝手に回復してほしいですが、Reactの画面はちゃんと更新の合図が必要です。",
        ],
      },
    ],
  },
  {
    slug: "events-and-forms",
    order: 5,
    title: "イベントとフォームを扱う",
    intro:
      "Reactで画面を作ると、クリック、入力、送信のようなユーザー操作を扱う場面が出てきます。",
    conclusion: "イベントはユーザー操作の合図で、フォームは入力値をstateで管理すると扱いやすくなります。",
    lesson: "ボタンを押した、文字を入れた。その合図を受け取るのがイベントです。",
    demo: "form",
    next: "lists",
    sections: [
      {
        title: "クリックされたら関数を動かす",
        body: [
          "Reactでは、ボタンにonClickを渡すと、クリックされたときの処理を書けます。",
          "HTMLに似ていますが、渡すのは文字列ではなく関数です。",
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
        code: {
          filename: "NameForm.tsx",
          value: `
"use client";

import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  );
}
          `,
        },
      },
    ],
  },
  {
    slug: "lists",
    order: 6,
    title: "リストを表示する",
    intro:
      "記事一覧、商品一覧、コメント一覧。Webアプリには、同じ形の情報を並べる画面がたくさんあります。",
    conclusion: "配列をmapで回して、同じ形のコンポーネントを並べます。",
    lesson: "リスト表示は、同じ部品を人数分ならべる作業です。",
    demo: "list",
    next: "use-effect",
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
    slug: "use-effect",
    order: 7,
    title: "useEffectは外の世界とつなぐ場所",
    intro:
      "Reactの画面は、クリックや入力だけでなく、時間、ブラウザ、APIなど外側の世界とも関わります。",
    conclusion: "useEffectは、Reactの外側にあるものと同期するために使います。",
    lesson: "useEffectは、画面の外に用事があるときの玄関です。",
    demo: "effect",
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
          "部屋もコードも、出したものを戻すところまでが大事です。父はおもちゃで毎晩学んでいます。",
        ],
      },
    ],
  },
];

export function getReactIntroArticle(slug: string) {
  return reactIntroArticles.find((article) => article.slug === slug);
}
