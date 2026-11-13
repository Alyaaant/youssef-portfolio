# エルノビ ユッセフ | ポートフォリオ

**エルノビ ユッセフ（Youssef Elnoubi）** の経歴、実務経験、開発スキル、制作実績、価値観を紹介するポートフォリオサイトです。本人写真や写真ギャラリーは掲載せず、経歴と制作物を中心にまとめています。

## 公開サイト

- **ポートフォリオ：** https://alyaaant.github.io/youssef-portfolio/
- **5分間の自己紹介プレゼン：** https://alyaaant.github.io/youssef-portfolio/presentation.html
- **GitHub：** https://github.com/Alyaaant/youssef-portfolio
- **面接課題 NILE QUEST：** https://nile-quest-web-production.up.railway.app/
- **NILE QUEST のソースコード：** https://github.com/Alyaaant/nile-quest-web

## このサイトで伝えたいこと

「**考える。作る。確かめる。**」を大切にする、Webエンジニアとしての経験とものづくりへの姿勢を紹介しています。日本で育ち、エジプトにルーツがあること、販売・IT支援からWeb開発へ進んだ背景もまとめています。

### 主な内容

- **自己紹介：** 経歴、使用言語、興味を持ったきっかけ
- **技術：** 実務・チーム開発・個人開発・学習中の技術を区別して紹介
- **これまでの歩み：** 2020年からの職歴・学歴、現在の仕事までの年表
- **制作実績：** 社内WebアプリCREW、プロ野球関連Webシステムの担当業務、Skolivio、NOOR JAPAN、NILE QUEST
- **開発姿勢：** 要件を考え、実装し、実際の動作を検証すること
- **自己紹介プレゼン：** 5枚のスライドと発表者用メモ

## 5分間の自己紹介プレゼン

以下の5枚で説明します。

1. 自己紹介：名前、背景、言語、エンジニアとしての興味
2. 経歴：携帯販売からIT専門学校、Webエンジニアへ
3. 実務経験：社内Webアプリのチーム開発とパ・リーグ関連システム
4. 個人開発：Skolivio、NOOR JAPAN、NILE QUEST
5. 価値観・今後：考える・作る・確かめる

[自己紹介スライドを開く](https://alyaaant.github.io/youssef-portfolio/presentation.html)

スライドは左右キーや画面下の操作ボタンで切り替えられます。「話す内容」ボタンで発表メモを表示できます。

## 主な使用技術

| 区分 | 例 |
| --- | --- |
| Web・バックエンド | PHP、CakePHP、Java、Spring Boot、Node.js |
| フロントエンド | HTML、CSS、JavaScript、TypeScript、React |
| データベース | SQL、PostgreSQL、SQLite |
| インフラ・運用 | Linux、Azure、AWS、Docker、Git、GitHub |
| 開発・検証 | API・バッチの検証、ログ調査、不具合修正、GitHub Actions |

業務、個人開発、学習の経験区分はサイト上でも明記しています。技術名の記載は実際に説明できる範囲を前提とします。

## ローカルで確認する方法

Node.js 22以上を利用する場合：

```bash
git clone https://github.com/Alyaaant/youssef-portfolio.git
cd youssef-portfolio
npm run check
npm start
```

開くURL：

- ポートフォリオ： http://localhost:3000/
- プレゼン： http://localhost:3000/presentation.html

静的な構成なので、直接 `index.html` を開いて確認することもできます。

## 公開方法

GitHubリポジトリの `main` ブランチからGitHub Pagesで公開しています。更新後はGitHub Actionsの `pages build and deployment` が成功したこと、公開URLに最新の内容が反映されることを確認します。

## ソース構成

```text
youssef-portfolio/
├── index.html              # ポートフォリオ
├── styles.css              # デザイン、レスポンシブ対応
├── app.js                  # 言語・テーマ切替、演出
├── presentation.html       # 5分間の自己紹介
├── presentation.css        # プレゼンのデザイン
├── presentation.js         # プレゼン操作
├── assets/                 # ロゴ・SVG・QRなどの公開素材（本人写真なし）
├── docs/                   # 原稿、公開前チェックリスト
├── server.mjs              # ローカル確認用の簡易サーバー
└── package.json
```

## 公開上の注意

- 本人や他人の顔写真は掲載していません。
- 勤務先や顧客の非公開ソース、個人情報、認証情報を掲載しない方針です。
- 制作物の開発段階（開発中／公開中）と技術経験は事実に合わせて説明します。
- プロジェクトロゴや図案は、公式素材と混同されないように表記しています。

---

このサイトは、応募先への自己紹介や制作実績紹介のために作成したものです。