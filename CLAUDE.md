# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

このプロジェクトは **ポートフォリオサイト専用** です。
- **サブドメイン分離済み** (2025-10-11):
  - `t4ichi.dev` - ポートフォリオ (このプロジェクト)
  - `ramens.t4ichi.dev` - ラーメンサイト (別リポジトリ: t4ichi-ramens)
  - `apps.t4ichi.dev` - アプリLP (別リポジトリ: t4ichi-apps)
- **301リダイレクト実装済み**: `src/middleware.ts` で `/ramens/*` と `/apps/*` を各サブドメインにリダイレクト

## 開発コマンド

- `pnpm dev` - 開発サーバーを起動
- `pnpm build` - プロダクションビルドを実行
- `pnpm start` - プロダクションサーバーを起動
- `pnpm lint` - Biomeでリント実行
- `pnpm format` - Biomeでフォーマット実行
- `pnpm check` - Biomeでチェック・自動修正を実行
- `pnpm test` - Vitestでユニットテスト実行
- `pnpm test:coverage` - カバレッジ付きテスト実行

## アーキテクチャ概要

### プロジェクト構成

- **Next.js 15** + **TypeScript** + **Tailwind CSS** を使用したブログアプリケーション
- **MicroCMS** をヘッドレスCMSとして使用（ラーメンコンテンツ管理）
- **Orval** を使用してOpenAPI仕様からAPI Client・スキーマを自動生成
- **Zod** でスキーマバリデーション
- **Biome** でリント・フォーマット

### ディレクトリ構造（Bulletproof React準拠）

```
src/
├── app/          # Next.js App Router（アプリケーション層）
├── components/   # 共有コンポーネント
├── config/       # グローバル設定
├── features/     # 機能別モジュール
├── hooks/        # 共有カスタムフック
├── lib/          # 再利用可能ライブラリ
├── schemas/      # 共有Zodスキーマ（APIエラー、Result型等）
├── stores/       # グローバル状態管理
├── testing/      # テストユーティリティ・モック
├── types/        # 共有TypeScript型定義（API型、共通型等）
└── utils/        # 共有ユーティリティ関数
```

### 機能別モジュール構造

```
src/features/feature-name/
├── api/          # API リクエスト・hooks
├── components/   # 機能スコープのコンポーネント
├── hooks/        # 機能固有のhooks
├── stores/       # 機能の状態管理
├── types/        # 機能固有の型定義
└── utils/        # 機能固有のユーティリティ
```

### API Client生成

- `docs/openapi/openapi.yml` にMicroCMS APIの仕様を定義
- Orvalで `src/lib/orval/` 配下にfetcher・スキーマを自動生成
- カスタムfetch実装で認証・レスポンス処理を統一
- Biomeの除外設定により生成ファイルはlint対象外

### 設定ファイル

- **Biome設定**: インデント2スペース、ダブルクォート、生成ファイル除外
- **TypeScript**: `@/*` でsrcディレクトリへのパスエイリアス設定
- **Orval設定**: operationId変換により `orval` プレフィックス付きの関数名生成

## コーディング規約

### ツール設定

- **Linter/Formatter**: Biome推奨ルールに準拠
- リント・フォーマットは `pnpm check` で実行

### 命名規則

- **ファイル・ディレクトリ**: ケバブケース (`user-card.tsx`)
- **コンポーネント・型**: パスカルケース (`UserCard`)
- **変数・関数**: キャメルケース (`userName`)
- **定数**: コンスタントケース (`API_URL`)

### コンポーネント

- UIの型を含める: `UserCard`, `UserSearchForm`
- Propsは `[Component名]Props` とする
- `app/` 配下の `page.tsx`, `layout.tsx` のみデフォルトエクスポート
- それ以外は名前付きエクスポート (`export const`)

```typescript
export type UserCardProps = {
  name: string;
};

export const UserCard: React.FC<UserCardProps> = ({ name }) => (
  <div className="text-red">{name}</div>
);
```

### TypeScript

- `interface` ではなく `type` を使用
- 基本は `const`、再代入時のみ `let`
- `===` を使用（`== null` のみ許容）
- 型推論を活用、不要な型記述は避ける

### 制御構造

- アーリーリターンを使用
- ネストは3階層以下
- 配列操作は高階関数 (`map`, `filter`) を使用
- 繰り返しは `for-of` を使用（`forEach` ではなく）

### エラーハンドリング

- `try-catch` よりも `Result<T, E>` 型を使用
- `@/utils/result` のResult型を活用
- 例外処理よりも戻り値でエラー状態を表現

```typescript
// Good
const fetchUser = async (id: string): Promise<Result<User, ErrorResponse>> => {
  const response = await apiCall(id);
  if (!response.ok) {
    return { ok: false, error: { message: "取得に失敗しました" } };
  }
  return { ok: true, value: response.data };
};
```

### 自動生成コードとの疎結合

- Orval生成のfetcher・スキーマを直接使用せず、ラッパー関数を作成
- `features/` 配下でビジネスロジックに適した抽象化を実装
- 生成コードの変更による影響を最小限に抑制

### 文字コード

- 全ファイルは **UTF-8** で出力・保存

### アーキテクチャ原則

- **機能駆動**: ほとんどのコードを `features/` フォルダ内で組織化
- **機能の独立性**: 機能間の相互依存を避ける
- **単方向コードフロー**: `shared → features → app` の依存関係
- **必要最小限**: 各機能に必要なサブフォルダのみ作成

### コンポーネント構造

```
# 共有コンポーネント
src/components/component-name/
├── index.ts           # export * from './component-name'
├── component-name.tsx # コンポーネント本体
└── component-name.stories.tsx # Storybook

# 機能固有コンポーネント
src/features/feature-name/components/component-name/
├── index.ts           # export * from './component-name'
├── component-name.tsx # コンポーネント本体
└── component-name.stories.tsx # Storybook
```

### インポート規則

- 機能間のインポートは **禁止**
- `shared` → `features` → `app` の順序を厳守

### ファイル配置ガイドライン

- **共有**: 複数機能で使用するものは `src/components/`, `src/utils/` 等
- **機能固有**: 特定機能でのみ使用するものは `src/features/[feature-name]/`
- **アプリケーション**: ルーティング・プロバイダーは `src/app/`

### テスト設定

- **ユニットテスト**: `*.test.ts`, `*.test.tsx` ファイル
- **テストランナー**: Vitest + jsdom環境
- **カバレッジ**: V8プロバイダー、HTML/JSON/テキスト形式で出力
- **現在の対象**: `src/components/`, `src/utils/cn/`, `src/types/`, `src/schemas/`
- **カバレッジレポートの読み方**:
  - ✅ **100%のファイル**: 正常にテストされている
  - ❌ **0%のファイル**: 除外されているか、テストが必要
  - 設定ファイル・自動生成ファイルの0%表示は正常（除外済み）
- **除外済み（0%表示されるが問題なし）**:
  - 設定ファイル (`*.config.*`)
  - Next.js管理ファイル (`src/app/**`)
  - 自動生成ファイル (`src/lib/**`)
  - テスト・Storybookファイル
- **カバレッジ閾値**: 各項目80%以上
- **実行**: `pnpm test` (監視モード) / `pnpm test:coverage` (カバレッジ)

### 共有型・スキーマ

- **`src/types/api.ts`**: 全featuresで使用される共通API型
  - `ApiError`: APIエラーレスポンス型（code, message）
  - `Result<T, E>`: 成功/エラーを表現する型
  - `parseApiError`: unknown型からApiError型への変換
- **`src/schemas/api.ts`**: 対応するZodスキーマ
  - `apiErrorSchema`: APIエラーのバリデーション
  - `resultSchema`: Result型のバリデーション

### カバレッジ対象の拡張

新しいテスト対象を追加する場合は、`vitest.config.ts`の`coverage.include`に追加：

```typescript
include: [
  "src/components/**/*.{ts,tsx}",
  "src/utils/cn/**/*.{ts,tsx}",
  "src/types/**/*.{ts,tsx}",
  "src/schemas/**/*.{ts,tsx}",
  "src/features/**/*.{ts,tsx}",
]
```

## インポートルール

- 基本的にorvalで生成したものは、**.zod.**か.**fetcher.**ものだけインポートすること

## デザインシステム

### アイコン・絵文字

- **ソース**: [Microsoft Fluent UI Emoji](https://github.com/microsoft/fluentui-emoji)
- **ツール**: SVGR を使用してReactコンポーネント化

### デザイン参考サイト

- **主要参考**: [catnose.me](https://catnose.me/) - 個人サイトのデザイン
- **追加参考**:
  - [Zenn](https://zenn.dev/)
  - [sizu.me](https://sizu.me/home)
