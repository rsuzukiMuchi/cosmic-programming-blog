# agents.md

## 🎯 Project Overview
このプロジェクトは、Next.jsで構築する個人ブログである。

テーマ：
「いつか来る娘の『なんで？』に答えたい父の学び直しブログ」

宇宙・科学・プログラミング・子育てを軸に、
“学び直し”と“説明する力”を目的としたコンテンツを提供する。

---

## 🧭 Core Concept

- 娘に説明するために宇宙を学び直す
- 科学の歴史をたどる（ストーリー重視）
- コードで再現する（シミュレーション）
- 漫画形式でやり取りを表現する
- 父としてのリアルな感情・ぼやきを含める

---

## 🏗 Tech Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Content: MDX
- Deploy: Vercel

---

## 📁 Directory Structure

- `/app` : ページ
- `/content/posts` : 記事（MDX）
- `/components` : UIコンポーネント
- `/public/images/manga` : 生成した漫画画像
- `/components/manga` : 漫画画像の表示コンポーネント
- `/components/simulations` : シミュレーション
- `/lib` : ロジック

---

## ✍️ Writing Style Rules（重要）

### MUST
- 読者は非専門家・親
- 記事は「問い」から始める
- 漫画パートで導入する
- ストーリー形式で進める
- 難しい言葉はかみ砕く

### Structure
1. 漫画（娘の疑問）
2. 結論（シンプル）
3. 歴史（人類の理解）
4. 解説（わかりやすく）
5. シミュレーション（必要なら）
6. 漫画（締め・ぼやき）

### AVOID
- 数式の多用
- 専門的すぎる説明
- 長い前置き

---

## 🎭 Manga (Dialogue) Rules

- 漫画パートはCSSで吹き出しを作らず、画像生成した漫画画像を使う
- 娘 👧 と父 👨 の会話は、漫画画像内のセリフとして表現する
- 画像内のセリフは短くする（1コマにつき1発言、1発言は15文字前後まで）
- セリフ文字は大きく、読みやすく、背景と十分なコントラストを付ける
- 画像生成前に、導入漫画・締め漫画それぞれの短い台本を作る
- 画像内テキストが崩れた場合は、同じ構図で再生成するか、画像編集で文字だけ差し替える
- アクセシビリティと後からの修正のため、画像内のセリフ台本はMDX内にもコメントで残す
- 画像は `/public/images/manga` に配置する
- 画像ファイル名は `{post-slug}-intro.webp` / `{post-slug}-outro.webp` を基本にする
- 記事内では漫画画像表示用コンポーネントを使う
- alt テキストには、場面説明と画像内セリフの要点を含める
- 長くしすぎない（テンポ重視）
- 導入と締めに必ず入れる

### Character Design Bible

漫画に登場する娘と父は、毎回同じ人物に見えるように固定する。
画像生成時は、以下の設定を必ずプロンプトに含める。

#### 娘
- 年齢イメージ: 5〜7歳
- 体型: 小柄、丸みのある子どもらしいシルエット
- 髪型: 黒〜こげ茶のボブ、前髪あり、少し内巻き
- 目: 大きめ、好奇心が強く見える表情
- 服装: 黄色のパーカー、白または薄い色のインナー
- 小物: 小さな星形ヘアピンを左側につける
- 性格の見え方: 「なんで？」と素直に聞く、明るい、少し得意げ

#### 父
- 年齢イメージ: 30代後半〜40代前半
- 体型: 平均的、少しだけ疲れた父親感
- 髪型: 黒〜こげ茶の短髪、自然な癖毛
- 顔: やさしい目、軽い無精ひげ、丸眼鏡
- 服装: ネイビーのカーディガン、白Tシャツ
- 小物: ノートPC、マグカップ、メモ帳のいずれか
- 性格の見え方: やさしい、学び直している、少しぼやく

#### Shared Visual Style
- 日本語ブログ向けのやさしい漫画イラスト
- 2D digital manga / web comic style
- 線は太すぎず、表情が読みやすい
- 色はダークテーマのブログに載せても見やすい
- 背景はシンプルな室内、机、ノートPC、本棚など
- 宇宙・科学・プログラミング要素を小物で少し入れる
- 過度にアニメ調、写実調、幼すぎる表現にしない

#### Negative Prompt
- 別人に見える髪型変更
- 髪色の大きな変更
- 父の眼鏡なし
- 娘の星形ヘアピンなし
- 派手すぎる衣装
- 複雑すぎる背景
- 読みにくい文字
- 画像内の不要な英字・ロゴ・透かし

#### Reference Assets
- キャラクター設定: `/public/images/characters/README.md`
- 娘サンプル: `/public/images/characters/daughter-reference.webp`
- 父サンプル: `/public/images/characters/father-reference.webp`
- 親子サンプル: `/public/images/characters/father-daughter-reference.webp`

---

## 🧪 Simulation Policy

- 理解を助けるために使う
- 見た目より意味重視
- 軽量実装（Canvasなど）

---

## ⚛️ React Intro Article Policy

React入門記事は、単なる解説記事ではなく、
「画面で変化が見える学び直し教材」として作る。

### React Knowledge Map（理解の体系）

Reactを理解するための知識は、単発の用語ではなく、
「Webの土台 → JavaScriptの土台 → Reactの中心概念 → アプリ設計 → 周辺技術」
の順に積み上げる。

記事を書くときは、必ずどの知識領域の記事なのかを意識する。

#### 0. Webの前提知識
Reactそのものに入る前の土台。

- HTML: 画面の構造を作る
- CSS: 見た目を整える
- JavaScript: 画面に動きを付ける
- DOM: ブラウザが持つ画面の実体
- イベント: クリック、入力、送信などユーザー操作
- HTTP / API: 外部データを取得する考え方

父の言葉:
「Reactはブラウザの上で動く。だから、まずブラウザが何をしているかを少し知る。」

#### 1. JavaScript / TypeScriptの基礎
Reactのコードを読むための言語の土台。

- 変数、関数、配列、オブジェクト
- map / filter / reduce
- 分割代入
- import / export
- Promise / async / await
- TypeScriptの型
- propsやAPIレスポンスに型を付ける考え方

父の言葉:
「Reactの難しさの半分は、ReactではなくJavaScriptでつまずいていることがある。」

#### 2. Reactの中心概念
React理解の必修科目群。

- Component: 画面を部品に分ける
- JSX: JavaScriptの値を混ぜられる画面の設計図
- props: 親から子へ渡す材料
- state: 部品自身が覚える変化する値
- render: 値から画面を計算する
- re-render: 値が変わったので画面を計算し直す
- event handling: ユーザー操作を受け取る
- conditional rendering: 条件で表示を変える
- list rendering: 配列から複数の表示を作る
- key: リストの項目を見分ける名札

父の言葉:
「Reactの中心は、画面を直接いじることではなく、値から画面を作ること。」

#### 3. State設計とデータの流れ
Reactでアプリを作るときの理解の山場。

- stateをどこに置くか
- propsで値を渡す
- 子から親へイベントで知らせる
- derived state: stateにしなくてよい値
- controlled component: 入力欄とstateをつなぐ
- lifting state up: 共通の親にstateを上げる
- 単方向データフロー

父の言葉:
「どの部品が何を覚えるかを決めるのが、Reactの設計の第一歩。」

#### 4. Hooks
Reactの機能を使うための道具群。

- useState: 値を覚える
- useEffect: Reactの外側と同期する
- useRef: 表示に直接関係しない値やDOM参照を持つ
- useMemo / useCallback: 必要になってから使う最適化
- custom hooks: ロジックに名前を付けて再利用する
- hooksのルール

父の言葉:
「Hooksは魔法ではなく、Reactの機能を部品の中で使うための入口。」

#### 5. UIパターン
実際の画面で頻出する作り方。

- フォーム
- モーダル
- タブ
- アコーディオン
- 検索・絞り込み
- ページネーション
- ローディング表示
- エラー表示
- 空の状態
- 楽観的UI

父の言葉:
「Reactを覚えるだけでは足りない。よくある画面の型を知ると、作れるものが増える。」

#### 6. データ取得とサーバーとの関係
React単体からアプリ開発へ進む領域。

- fetch
- loading / error / success
- APIレスポンスの型
- キャッシュ
- 再取得
- Server Component / Client Component
- Server Actions
- 認証とセッション

父の言葉:
「画面だけならReact。データやURLやサーバーまで含めるとNext.jsの出番が増える。」

#### 7. Next.js
Reactを実際のWebアプリとして公開するための土台。

- App Router
- page / layout
- dynamic route
- Server Component
- Client Component
- metadata
- image optimization
- route handler
- deploy

父の言葉:
「Reactは部品を作る道具。Next.jsはその部品をWebサイトやアプリとして並べる土台。」

#### 8. コンポーネント設計
規模が大きくなったときに必要になる整理術。

- presentational / container の分離
- props設計
- children
- composition
- 状態を持つ部品と持たない部品
- 再利用しやすい粒度
- ディレクトリ構成
- design system
- Storybook
- UIライブラリの選定と比較
- Atomic Design
- compound component
- headless UI
- design token

父の言葉:
「分ければよいのではなく、名前を付けると理解しやすくなる単位で分ける。」

#### 9. 品質
公開して続けるための知識。

- TypeScriptで壊れにくくする
- ESLint / formatter
- unit test
- component test
- E2E test
- Storybookを使った状態確認
- Storybook test-runner
- visual regression testing
- Storyshotsの歴史と非推奨化
- accessibility
- performance
- SEO
- error boundary
- monitoring

父の言葉:
「動いた、で終わりにしない。あとから直せる形で残す。」

#### 10. Reactの発展領域
基礎が固まったあとに扱う。

- Context
- reducer
- state management library
- suspense
- streaming
- concurrent rendering
- animation
- form library
- data fetching library
- React Compilerなどの新しい流れ

父の言葉:
「便利な道具は、困りごとが見えてから使う。最初から全部背負わない。」

### Learning Lanes（記事群の分類）

React記事は、以下のレーンに分けて企画する。

- 必修A: Web / JavaScriptの前提
- 必修B: Reactの中心概念
- 必修C: state設計とデータの流れ
- 実践A: UIパターン
- 実践B: データ取得とNext.js
- 実践C: コンポーネント設計
- 発展A: 品質、テスト、アクセシビリティ
- 発展B: パフォーマンス、Hooks応用、状態管理

### Practical Design System Topics

React入門の後半では、コンポーネントを「作る」だけでなく、
「整理する」「共有する」「壊れていないか確認する」話も扱う。

#### Storybook
- コンポーネントをページから切り離して確認する道具として説明する
- Button、Card、Modal、Formなどを状態別に並べて見せる
- loading、error、empty、disabled、hover相当など、実運用で見落としやすい状態を確認する
- 記事では、Storybookそのものの操作画面より「なぜ部品単位で見ると理解しやすいか」を重視する

父の言葉:
「部品だけを机の上に出して、いろんな状態を見比べるための作業台。」

#### UIライブラリ比較
- shadcn/ui、MUI、Chakra UI、Radix UI、Headless UI、Tailwind CSSのみの実装などを比較対象にする
- 比較軸は、見た目の完成度、カスタマイズ性、アクセシビリティ、学習コスト、依存の重さ、デザインの自由度
- 初心者向けには「何を選べば正解か」より「どんな trade-off があるか」を説明する
- このブログでは、Reactの理解を優先する記事ではUIライブラリに頼りすぎない
- 実践記事では、UIライブラリを使うことで何が省け、何を理解しておくべきかを示す

父の言葉:
「家具を自作するか、既製品を買うか。どちらも悪くないが、仕組みを知らないと直せない。」

#### Atomic Design
- atoms / molecules / organisms / templates / pages を、Reactコンポーネント分割の考え方として紹介する
- ただし、すべてをAtomic Designに無理に当てはめない
- 小さなブログや学習用コードでは、過剰設計になりやすい点も説明する
- 記事では、Button、Input、SearchForm、ArticleCard、ArticleListのような具体例で見せる

父の言葉:
「部品を小さく分ける考え方。ただし、ネジ1本まで名前を付けると片付けが大変。」

#### Storyshots / Snapshot Testing
- Storyshotsは、Storybookの各Storyをスナップショットテストする考え方として紹介できる
- ただし、現在のStorybookではStoryshotsは非推奨・メンテナンス終了扱いとして説明する
- 現代的な選択肢として、Storybook test-runner、Portable Stories、visual regression testingを紹介する
- Snapshotは「差分に気づく」には便利だが、「正しいUIか」を自動で判断するものではないと説明する

父の言葉:
「前に撮った写真と今の写真を見比べる仕組み。違いは見つかるが、どちらが良いかは人間が見る。」

### Dependency Rules

- JSXより前に、JavaScriptの式と値を説明する
- propsより前に、コンポーネントを説明する
- stateより前に、renderの考え方を説明する
- useEffectより前に、stateと再描画を説明する
- Contextより前に、props drillingを説明する
- useMemo / useCallbackより前に、通常の再描画を説明する
- Next.jsより前に、ReactとWebアプリの役割の違いを説明する
- テストより前に、コンポーネントの入出力を説明する
- Storybookより前に、コンポーネントのpropsと状態を説明する
- Atomic Designより前に、コンポーネント分割の基本を説明する
- UIライブラリ比較より前に、HTML要素、props、アクセシビリティの基礎を説明する
- Storyshotsより前に、snapshot testingとStorybookの役割を説明する

### Goal
- 読者がReact用語を暗記する前に、画面・値・コンポーネントの関係を直感的に掴めること
- 父が娘に説明できるくらい、言葉を短く、例を具体的にすること
- 公式React Learnや入門書の構成を参考にしつつ、このブログ向けに再構成すること

### MUST
- 記事は「問い」から始める
- 導入に漫画画像を入れる
- 結論を先に出す
- 結論の直後に「読むための地図」を置く
- 専門用語は必ず父の言葉に言い換える
- state / props / JSX / component などは、画面上の変化とセットで説明する
- サンプルコードは、どの行が何を変えているか分かるようにする
- 文章だけで説明せず、視覚的な流れを入れる
- 章末に「まとめ」「よくあるつまずき」「小さな練習問題」を置く

### Article Structure
1. 漫画（娘の疑問）
2. 問い
3. 結論
4. まず、この地図だけ持って読む
5. 用語を父の言葉に直す
6. 画面の変化を見る
7. 本文解説
8. サンプルコード
9. よくあるつまずき
10. 小さな練習問題
11. React公式ではどこにあたるか
12. 漫画（締め・ぼやき）

### Visual Explanation Rules
- 「きっかけ → 値 → 再描画 → 画面」の順で見せる
- stateの説明では、値が変わる前後を必ず表示する
- propsの説明では、同じコンポーネントに違う材料を渡す例を使う
- JSXの説明では、波かっこ内の値が画面に出る様子を見せる
- listの説明では、配列がmapで複数表示に変わる様子を見せる
- useEffectの説明では、Reactの外側の出来事と画面の同期を分けて説明する

### Interactive Learning Policy

React記事では、読者が画面上で操作できる小さな教材をできるだけ入れる。
「読む → 押す → 変わる → 理解する」の流れを作る。

#### MUST
- 概念説明だけで終わらせず、可能な限り実行できるUIを置く
- ボタン、入力欄、選択肢、編集欄など、読者が触れる場所を作る
- 操作した結果、どのstate / props / JSX / eventが変わったのかを画面上で見せる
- イベント発火時は「何が起きたか」をログやステップ表示で見せる
- コードの該当行と画面の変化を対応させる
- 読者の操作で壊れないよう、教材は小さく閉じた状態にする

#### Interaction Patterns
- 実行ボタン: サンプルコードの流れを1ステップずつ進める
- 編集ボタン: 表示名、数値、配列要素などを変え、画面反映を見る
- リセットボタン: 初期状態に戻し、何度も試せるようにする
- 入力欄: controlled componentとして、入力値とstateの同期を見る
- トグル: conditional renderingで表示が切り替わる様子を見る
- 追加/削除ボタン: list renderingとkeyの意味を見る
- イベントログ: onClick / onChange / onSubmit が発火した順番を見る
- コードハイライト: 操作に関係する行だけ光らせる

#### Examples by Concept
- component: 同じ部品を複数回表示し、propsで中身を変える
- props: 親側の値を編集し、子コンポーネントの表示が変わる様子を見る
- state: ボタンでcountを変え、変更前後と再描画を表示する
- event: ボタンを押すとイベントログに「onClick発火」と出す
- form: 入力欄に文字を入れると、stateとプレビューが同時に変わる
- conditional rendering: トグルでログイン中/ログアウト中の表示を切り替える
- list: 配列に項目を追加し、mapで表示が増える様子を見る
- useEffect: タイマー開始/停止ボタンで、外の時間とstateの同期を見る
- custom hook: 同じロジックを複数UIで使い回す様子を見る

#### UX Rules
- 操作できる教材には、何を触ればよいかを短く示す
- ただし長い説明文で埋めない。操作結果を見れば分かる作りにする
- ボタンや入力欄はモバイルでも押しやすくする
- 自動再生する教材には、手動ステップ操作も用意する
- prefers-reduced-motion を尊重する
- 失敗状態や空状態も、必要に応じて操作で見せる

### Writing Rules
- 「Reactとは〇〇です」で終わらせず、「だから何が楽になるか」まで書く
- 1段落は長くしすぎない
- 初心者が混乱しやすい言葉は、直後に言い換える
- たとえ話は使ってよいが、コード上の事実に必ず戻す
- 難しいAPI名を先に並べない
- 最適化、設計論、周辺ライブラリは基礎の後に回す

### AVOID
- 公式ドキュメントの目次をそのままなぞるだけ
- 用語説明だけで画面変化がない記事
- 動かないコード片だけを並べる
- 「Reactは便利です」で理由が終わる説明
- memo / useMemo / useCallback などの最適化から入ること
- TypeScriptの高度な型から入ること

### Success Criteria
- 読者が「値が変わると画面が変わる」を説明できる
- 読者がコンポーネントを「画面の部品」として見られる
- 読者がpropsとstateを混同しにくくなる
- 記事を読んだ後、公式React Learnの該当ページを読みやすくなる

---

## 🎨 UI/UX Guidelines

- ダークテーマ
- シンプル・可読性重視
- 余白多め
- 漫画パートは目立たせる

---

## 🧠 Development Rules

- 小さく作る
- すぐ動かす
- 作り込みすぎない

---

## 🚀 MVP Scope

- トップページ
- 記事一覧
- 記事詳細（MDX + 漫画）
- Aboutページ

---

## ❌ Anti-Patterns

- UIに時間かけすぎ
- 機能増やしすぎ
- 完璧主義

---

## ✅ Success Criteria

- 記事が書ける
- 読みやすい
- 継続できる

---

## 💬 Tone & Voice

- 優しい
- 少しユーモア
- 父視点
- 上から目線NG

---

## 🧭 Final Principle

👉 娘に説明できること
👉 読者が面白いと思うこと

この2つを最優先とする
