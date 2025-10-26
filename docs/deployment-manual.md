# Next.js + Cloudflare Pages デプロイマニュアル

このマニュアルでは、Next.js 15アプリケーションをCloudflare Pagesに自動デプロイする方法を説明します。

## 前提条件

- Node.js 18.17以上
- pnpm 9以上
- GitHubアカウント
- Cloudflareアカウント

## 1. プロジェクト構成

### 必要なファイル構成

```
project-root/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions設定
├── next.config.ts              # Next.js設定
├── wrangler.toml              # Cloudflare設定
├── package.json               # デプロイスクリプト
└── src/
    └── config/
        └── env.ts             # 環境変数設定
```

## 2. 設定ファイル

### next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // モダンブラウザターゲット設定
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // パッケージ最適化
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // 画像最適化設定
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-image-domain.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },

  // Cloudflare Pages対応
  serverExternalPackages: ["async_hooks"],
};

export default nextConfig;
```

### wrangler.toml

```toml
name = "your-project-name"
compatibility_date = "2024-06-15"
compatibility_flags = ["nodejs_compat_v2"]

pages_build_output_dir = ".vercel/output/static"

[env.production.vars]
NODE_ENV = "production"

[env.preview.vars]
NODE_ENV = "preview"
```

### package.json (スクリプト部分)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "biome lint",
    "format": "biome format",
    "check": "biome check --write",
    "test": "vitest",
    "test:coverage": "vitest run --coverage",
    "pages:build": "npx @cloudflare/next-on-pages",
    "preview": "npm run pages:build && wrangler pages dev .vercel/output/static",
    "deploy": "npm run pages:build && wrangler pages deploy .vercel/output/static --project-name=your-project-name"
  },
  "devDependencies": {
    "@cloudflare/next-on-pages": "^1.13.12",
    "wrangler": "^4.20.0"
  }
}
```

## 3. GitHub Actions設定

### .github/workflows/deploy.yml

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy to Cloudflare Pages

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 10

      - name: Get pnpm store directory
        shell: bash
        run: |
          echo "STORE_PATH=$(pnpm store path --silent)" >> $GITHUB_ENV

      - name: Setup pnpm cache
        uses: actions/cache@v4
        with:
          path: ${{ env.STORE_PATH }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build project for Cloudflare Pages
        run: pnpm pages:build
        env:
          # 必要に応じて環境変数を追加
          NODE_ENV: production

      - name: Deploy to Cloudflare Pages
        run: npx wrangler pages deploy .vercel/output/static --project-name=your-project-name
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

## 4. 環境変数設定

### TypeScript環境変数バリデーション (src/config/env.ts)

```typescript
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // サーバーサイドの環境変数を定義
    DATABASE_URL: z.string().url().optional(),
    API_KEY: z.string().min(1).optional(),
  },

  client: {
    // クライアントサイドの環境変数（NEXT_PUBLIC_プレフィックス必須）
    // NEXT_PUBLIC_API_URL: z.string().url(),
  },

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    API_KEY: process.env.API_KEY,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
```

## 5. セットアップ手順

### 1. Cloudflareアカウントセットアップ

1. [Cloudflare](https://cloudflare.com)でアカウント作成
2. APIトークンの作成:
   - Cloudflare Dashboard → My Profile → API Tokens
   - Create Token → Custom token
   - 権限: Zone:Zone:Read, Zone:Zone Settings:Edit, Zone:Zone:Edit

### 2. GitHubシークレット設定

GitHubリポジトリ → Settings → Secrets and variables → Actions

必要なシークレット:
- `CLOUDFLARE_API_TOKEN`: CloudflareのAPIトークン
- `CLOUDFLARE_ACCOUNT_ID`: CloudflareのアカウントID

### 3. プロジェクト作成

```bash
# 新しいNext.jsプロジェクトを作成
npx create-next-app@latest my-app --typescript --tailwind --eslint

# 必要なパッケージをインストール
pnpm add @t3-oss/env-nextjs zod
pnpm add -D @cloudflare/next-on-pages wrangler
```

### 4. ファイル設定

1. 上記の設定ファイルを作成
2. `wrangler.toml`のプロジェクト名を変更
3. `deploy.yml`のプロジェクト名を変更
4. `package.json`のデプロイスクリプトを更新

## 6. デプロイ実行

### 自動デプロイ
```bash
# mainブランチにプッシュすると自動デプロイ
git push origin main
```

### 手動デプロイ
```bash
# ローカル環境でのビルド&デプロイ
pnpm run deploy
```

### プレビュー
```bash
# ローカルでCloudflare環境をプレビュー
pnpm run preview
```

## 7. トラブルシューティング

### よくある問題と解決方法

1. **Node.js Compatibility Error**
   - `wrangler.toml`に`compatibility_flags = ["nodejs_compat_v2"]`を追加

2. **ビルドエラー**
   - Node.jsバージョンを確認（18.17以上）
   - 依存関係を再インストール: `pnpm install`

3. **環境変数が認識されない**
   - GitHubシークレットが正しく設定されているか確認
   - 環境変数名のスペルチェック

4. **Edge Runtimeエラー**
   - 使用ライブラリがEdge Runtime対応か確認
   - Server Componentsでのみ使用する処理は`server-only`で分離

## 8. ベストプラクティス

### パフォーマンス最適化
- モダンブラウザターゲット設定
- 画像最適化設定
- パッケージ最適化

### セキュリティ
- 環境変数の適切な管理
- APIキーの秘匿化
- TypeScriptでの型安全性

### CI/CD
- プルリクエストでのプレビューデプロイ
- 自動テスト実行
- キャッシュ最適化

## 9. 監視とメンテナンス

### デプロイ後の確認項目
- [ ] アプリケーションが正常に表示される
- [ ] APIエンドポイントが正常に動作する
- [ ] 画像最適化が機能している
- [ ] モバイル表示が適切
- [ ] ページ読み込み速度が良好

### 定期的なメンテナンス
- 依存関係の更新
- セキュリティパッチの適用
- パフォーマンス監視
- ログの確認

## 10. 参考リンク

- [Cloudflare Pages - Next.js Guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [@cloudflare/next-on-pages](https://github.com/cloudflare/next-on-pages)
- [Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler/)
- [Next.js 15 Documentation](https://nextjs.org/docs)

---

このマニュアルに従って設定することで、Next.js 15アプリケーションをCloudflare Pagesに自動デプロイできます。