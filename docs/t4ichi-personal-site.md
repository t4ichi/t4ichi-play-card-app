# t4ichi個人サイト ドキュメント

## 概要
t4ichiの個人サイトです。自己紹介とラーメン遍歴を紹介するWebアプリケーションです。

## 機能要件

### 1. 自己紹介ページ（/）
- t4ichiの自己紹介を英語で表示
- GitHubへのリンクを配置
- `/ramens`ページへの導線を設置（SVGRを使用したコンポーネントリンク）

### 2. ラーメン一覧ページ（/ramens）
- MicroCMSからラーメンデータをAPI経由で取得
- ラーメンの一覧を表示
- 各ラーメンの詳細情報を表示

## 技術仕様

### アーキテクチャ
- **フレームワーク**: Next.js 15 + TypeScript
- **スタイリング**: Tailwind CSS
- **CMS**: MicroCMS（ラーメンデータ管理）
- **API Client**: Orval（OpenAPI仕様から自動生成）
- **バリデーション**: Zod
- **アイコン管理**: SVGR

### ディレクトリ構成
```
src/
├── app/              # Next.js App Router
│   ├── page.tsx      # ホームページ（自己紹介）
│   └── ramens/       # ラーメン関連ページ
├── features/         # 機能別モジュール
│   └── ramen/        # ラーメン機能
├── components/       # 共有コンポーネント
└── lib/orval/        # API Client（Orval生成）
```

## API仕様

### エンドポイント
- **ベースURL**: `https://t4ichi.microcms.io/api/v1`
- **認証**: X-MICROCMS-API-KEY ヘッダー

### ラーメン一覧取得
```
GET /ramens
```

#### クエリパラメータ
- `limit`: 取得件数上限（1-100、デフォルト: 10）
- `offset`: 取得開始位置（デフォルト: 0）
- `orders`: ソート順（例: "-createdAt"）
- `q`: 検索クエリ
- `fields`: 取得フィールド指定
- `filters`: フィルター条件

#### レスポンス
```typescript
{
  contents: Ramen[],
  totalCount: number,
  offset: number,
  limit: number
}
```

### ラーメン詳細取得
```
GET /ramens/{id}
```

### ラーメンデータ構造
```typescript
{
  id: string,
  title: string,
  description?: string,
  images?: MediaItem[],
  visitDate?: string,
  tags?: ('ラーメン' | '油そば' | 'つけ麺' | '家系' | ...)[],
  googleMapUrl?: string,
  tabelogUrl?: string,
  rating?: number,
  price?: number,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string
}
```

## デザインシステム

### アイコン・絵文字
- **ソース**: [Microsoft Fluent UI Emoji](https://github.com/microsoft/fluentui-emoji)
- **ツール**: SVGR を使用してReactコンポーネント化

### デザイン参考サイト
- **主要参考**: [catnose.me](https://catnose.me/) - 個人サイトのデザイン
- **追加参考**: 
  - [Zenn](https://zenn.dev/)
  - [sizu.me](https://sizu.me/home)

## 実装状況

### 現在の実装
- ✅ MicroCMS API連携の基本実装
- ✅ Orvalによる型安全なAPI Client生成
- ✅ ラーメンデータ取得機能
- ✅ SVGRによるアイコン管理

### 実装予定
- 🔄 自己紹介ページのUI実装
- 🔄 ラーメン一覧ページのUI実装
- 🔄 レスポンシブデザイン対応
- 🔄 GitHubリンクの実装
- 🔄 ナビゲーション実装

## 開発・運用

### 開発コマンド
```bash
pnpm dev        # 開発サーバー起動
pnpm build      # プロダクションビルド
pnpm lint       # Biomeリント
pnpm test       # テスト実行
```

### 環境変数
```
MICROCMS_API_KEY=<MicroCMS APIキー>
```

## 注意事項
- UTF-8文字コードで統一
- CLAUDE.mdの開発規約に準拠
- Orval生成コードは直接使用せず、features層でラップ
- コンポーネントは名前付きエクスポートを使用（page.tsx、layout.tsx除く）
