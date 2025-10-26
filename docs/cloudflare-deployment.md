# Cloudflare Pagesデプロイガイド

このプロジェクトをCloudflare Pagesにデプロイするためのガイドです。

## 前提条件

1. **Cloudflareアカウント**: [Cloudflare](https://cloudflare.com)でアカウントを作成
2. **Wrangler CLI**: Cloudflareの公式CLIツール
   ```bash
   npm install -g wrangler
   ```
3. **GitHubリポジトリ**: プロジェクトをGitHubにプッシュ済み

## セットアップ手順

### 1. Wranglerでログイン

**初回設定時**:
```bash
wrangler login
```

**CI/CD環境の場合**:
1. Cloudflareで[APIトークン](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/)を作成
2. 環境変数を設定:
   ```bash
   export CLOUDFLARE_API_TOKEN=your-api-token
   ```

### 2. 環境変数の設定

Cloudflare Pagesで以下の環境変数を設定する必要があります：

- `MICROCMS_API_KEY`: MicroCMSのAPIキー
- `MICROCMS_SERVICE_DOMAIN`: MicroCMSのサービスドメイン

#### Cloudflare Dashboardで設定する場合：

1. Cloudflare Dashboard → Pages → プロジェクト → Settings → Environment variables
2. 上記の環境変数を追加

#### Wranglerで設定する場合：

```bash
# 本番環境用
wrangler pages secret put MICROCMS_API_KEY
wrangler pages secret put MICROCMS_SERVICE_DOMAIN

# プレビュー環境用
wrangler pages secret put MICROCMS_API_KEY --env preview
wrangler pages secret put MICROCMS_SERVICE_DOMAIN --env preview
```

### 3. ビルドとデプロイ

#### ローカルでビルド&デプロイ

```bash
# ビルド
pnpm run pages:build

# デプロイ
pnpm run deploy
```

#### GitHubからの自動デプロイ（推奨）

1. Cloudflare Dashboard → Pages → Create a project
2. Connect to Git を選択
3. GitHubリポジトリを選択
4. ビルド設定：
   - **Framework preset**: Next.js
   - **Build command**: `npx @cloudflare/next-on-pages`
   - **Build output directory**: `.vercel/output/static`
   - **Root directory**: `/` (プロジェクトルート)
   - **Environment variables**: `MICROCMS_API_KEY`、`MICROCMS_SERVICE_DOMAIN`を設定

5. **互換性フラグ設定**（重要）:
   - プロジェクト作成後、Settings → Functions → Compatibility flags
   - **Production environment**に`nodejs_compat`を追加
   - **Preview environment**にも`nodejs_compat`を追加

#### 手動デプロイ（ローカル）

**前提**: `wrangler login`でログイン済み

```bash
# ビルド&デプロイ
pnpm run deploy

# または段階的に実行
pnpm run pages:build
wrangler pages deploy .vercel/output/static
```

## プロジェクト固有の設定

### next.config.ts

```typescript
// Cloudflare Pages対応設定を追加済み
experimental: {
  runtime: 'experimental-edge',
},
output: 'standalone',
```

### wrangler.toml

```toml
name = "t4ichi-blog-app"
compatibility_date = "2024-06-15"
compatibility_flags = ["nodejs_compat"]

pages_build_output_dir = ".vercel/output/static"
```

### package.json scripts

```json
{
  "pages:build": "npx @cloudflare/next-on-pages",
  "preview": "npm run pages:build && wrangler pages dev .vercel/output/static",
  "deploy": "npm run pages:build && wrangler pages deploy .vercel/output/static"
}
```

## ローカルプレビュー

本番環境と同じ環境でローカルテストを行う場合：

```bash
pnpm run preview
```

## トラブルシューティング

### 1. ビルドエラーが発生する場合

- Node.jsのバージョンを確認（18.17以上推奨）
- 依存関係を再インストール: `pnpm install`

### 2. 環境変数が認識されない場合

- Cloudflare Dashboardで環境変数が正しく設定されているか確認
- プレビュー環境と本番環境の両方に設定が必要

### 3. Edge Runtimeエラーが発生する場合

- 使用しているライブラリがEdge Runtimeに対応しているか確認
- `server-only`を使用しているファイルが適切に分離されているか確認

### 4. Node.js Compatibility Errorが発生する場合

- Cloudflare Dashboard → Pages → プロジェクト → Settings → Functions → Compatibility flags
- `nodejs_compat`フラグが**Production**と**Preview**の両方に設定されているか確認
- または`wrangler.toml`に`compatibility_flags = ["nodejs_compat"]`を追加

## 注意事項

1. **Server-only関数**: MicroCMS APIの呼び出しは`server-only`を使用して適切に分離済み
2. **Image Optimization**: MicroCMSの画像APIを使用してCloudflareで最適化
3. **Edge Runtime**: 一部の Node.js APIが使用できない場合があります

## デプロイ後の確認

1. アプリケーションが正常に表示されるか
2. 検索機能が動作するか
3. ページネーションが動作するか
4. モバイル表示が適切か
5. MicroCMSからのデータ取得ができているか

## カスタムドメインの設定

Cloudflare Pagesでカスタムドメインを使用する場合：

1. Cloudflare Dashboard → Pages → プロジェクト → Custom domains
2. ドメインを追加してDNS設定を行う

## 参考リンク

- [Cloudflare Pages - Next.js SSR Guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/get-started/)
- [@cloudflare/next-on-pages Documentation](https://github.com/cloudflare/next-on-pages)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/cli-wrangler/)