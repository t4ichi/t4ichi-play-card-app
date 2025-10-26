# サブドメイン分離の記録

**日付**: 2025-10-11
**目的**: SEO改善のため、3つの機能を別サブドメインに分離

## 分離構成

| サイト | URL | リポジトリ | 内容 |
|--------|-----|------------|------|
| **ポートフォリオ** | https://t4ichi.dev | t4ichi-blog-app (このリポジトリ) | Web Developer Portfolio |
| **ラーメン** | https://ramens.t4ichi.dev | t4ichi-ramens | ラーメン食べ歩き記録 |
| **アプリLP** | https://apps.t4ichi.dev | t4ichi-apps | iOSアプリ紹介ページ |

## 主な変更内容

### このリポジトリ (t4ichi-blog-app)
- ✅ ラーメン・アプリ機能を削除
- ✅ ポートフォリオ専用メタデータに最適化
- ✅ 301リダイレクト実装 (`src/middleware.ts`)
  - `/ramens/*` → `https://ramens.t4ichi.dev/*`
  - `/apps/*` → `https://apps.t4ichi.dev/*`

### SEO改善効果
- 重複コンテンツ問題解決 (182ページ → 0ページ)
- サイト目的の明確化
- 各サイト独立したSEO評価

## デプロイ

### Cloudflare Pages
- **プロジェクト名**: `t4ichi-blog-app`
- **カスタムドメイン**: `t4ichi.dev`
- **環境変数**: 不要

### GitHub Secrets
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## 関連リンク
- [t4ichi-ramens リポジトリ](https://github.com/t4ichi/t4ichi-ramens)
- [t4ichi-apps リポジトリ](https://github.com/t4ichi/t4ichi-apps)
