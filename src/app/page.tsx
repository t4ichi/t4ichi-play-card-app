import { env } from "@/config/env";
import { AppsContactSection } from "@/features/apps/components/apps-contact-section";
import { AppsScreenshotImages } from "@/features/apps/components/apps-screenshot-images";
import { AppsScreenshotVideo } from "@/features/apps/components/apps-screenshot-video";
import { CONTACT_FORMS } from "@/features/apps/constants/contact";
import { PlayCardAppFeatures } from "@/features/play-card-app/components/play-card-app-features";
import { PlayCardAppHero } from "@/features/play-card-app/components/play-card-app-hero";
import { PlayCardAppUseCases } from "@/features/play-card-app/components/play-card-app-use-cases";
import {
  PLAY_CARD_APP_FEATURES,
  PLAY_CARD_APP_INFO,
  PLAY_CARD_APP_USE_CASES,
} from "@/features/play-card-app/constants/play-card-app";
import type { Metadata } from "next";

// Cloudflare Pages対応設定
export const runtime = "edge";

const baseUrl = env.SITE_URL;
const pageUrl = baseUrl;
const ogImageUrl = `${baseUrl}/images/01-before-draw.png`;

export const metadata: Metadata = {
  title:
    "トランプ引くだけ - 無料カード抽選アプリ | パーティーゲーム・罰ゲーム決めに最適",
  description:
    "【iOS無料】ワンタップでトランプを1枚引くシンプルなカード抽選アプリ。パーティー・飲み会・罰ゲーム決め・順番決めに最適。美しいアニメーションと履歴機能で盛り上がること間違いなし！",
  keywords: [
    "トランプ引くだけ",
    "カード抽選アプリ 無料",
    "パーティーゲーム iOS",
    "罰ゲーム決め アプリ",
    "順番決めアプリ 無料",
    "飲み会ゲーム おすすめ",
    "決定支援ツール 簡単",
    "トランプアプリ シンプル",
    "カード引きゲーム",
    "抽選アプリ ワンタップ",
    "パーティー用ゲーム",
    "宴会ゲーム 盛り上がる",
    "合コンゲーム アプリ",
    "歓送迎会 ゲーム",
    "新年会 余興",
    "忘年会 ゲーム",
    "飲み会 アプリ",
    "iOS ゲームアプリ",
    "無料 エンターテイメント",
    "カジュアルゲーム",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "トランプ引くだけ - 無料カード抽選アプリ | パーティーゲーム・罰ゲーム決めに最適",
    description:
      "【iOS無料】ワンタップでトランプを1枚引くシンプルなカード抽選アプリ。パーティー・飲み会・罰ゲーム決め・順番決めに最適。美しいアニメーションと履歴機能で盛り上がること間違いなし！",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 390,
        height: 844,
        alt: "トランプ引くだけアプリのメイン画面 - カード引きゲーム",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "トランプ引くだけ - 無料カード抽選アプリ | パーティーゲーム・罰ゲーム決めに最適",
    description:
      "【iOS無料】ワンタップでトランプを1枚引くシンプルなカード抽選アプリ。パーティー・飲み会・罰ゲーム決め・順番決めに最適。",
    images: [ogImageUrl],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "トランプ引くだけ",
  description:
    "ワンタップでトランプを1枚引く、パーティー・飲み会・罰ゲーム決めで活躍するシンプルなアプリ。直感的な操作で誰でもすぐに楽しめます。",
  applicationCategory: "GameApplication",
  operatingSystem: "iOS",
  url: pageUrl,
  downloadUrl: "https://apps.apple.com/jp/app/id6677054711",
  screenshot: [
    `${baseUrl}/images/01-before-draw.png`,
    `${baseUrl}/images/02-card-drawn.png`,
    `${baseUrl}/images/03-drawn-cards-list.png`,
  ],
  author: {
    "@type": "Person",
    name: "Ito Taichi",
    url: baseUrl,
  },
  publisher: {
    "@type": "Person",
    name: "Ito Taichi",
    url: baseUrl,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: "1",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
    availability: "https://schema.org/InStock",
  },
  image: ogImageUrl,
  keywords: [
    "トランプ",
    "カード抽選",
    "パーティーゲーム",
    "罰ゲーム",
    "飲み会",
    "無料アプリ",
    "iOS",
  ],
  datePublished: "2024-08-24",
  dateModified: new Date().toISOString(),
  inLanguage: "ja-JP",
  contentRating: "適切（All Ages）",
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "トランプ引くだけアプリのデモ動画",
  description:
    "ワンタップでトランプを1枚引くシンプルなカード抽選アプリの使い方デモ",
  thumbnailUrl: `${baseUrl}/images/01-before-draw.png`,
  uploadDate: "2024-08-24",
  duration: "PT30S",
  contentUrl: `${baseUrl}/images/app-demo.mp4`,
  embedUrl: pageUrl,
  publisher: {
    "@type": "Person",
    name: "Ito Taichi",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "トランプ引くだけアプリは無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、完全無料でご利用いただけます。App Storeから無料でダウンロードできます。",
      },
    },
    {
      "@type": "Question",
      name: "どんなシーンで使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "パーティー、飲み会、合コン、歓送迎会、忘年会、新年会などでの罰ゲーム決めや順番決めに最適です。",
      },
    },
    {
      "@type": "Question",
      name: "使い方は簡単ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ワンタップでトランプを1枚引くだけのシンプルな操作です。誰でもすぐに使えます。",
      },
    },
    {
      "@type": "Question",
      name: "履歴機能はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、引いたカードの履歴を確認できる機能があります。過去に何が出たかを振り返ることができます。",
      },
    },
  ],
};

export default function PlayCardAppPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: The JSON-LD is generated from static data and is safe.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: The JSON-LD is generated from static data and is safe.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: The JSON-LD is generated from static data and is safe.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ヒーローセクション */}
      <PlayCardAppHero
        name={PLAY_CARD_APP_INFO.name}
        subtitle={PLAY_CARD_APP_INFO.subtitle}
        description={PLAY_CARD_APP_INFO.description}
        iconImage="/images/app-icon.png"
        appStoreUrl={PLAY_CARD_APP_INFO.appStoreUrl}
      />

      {/* アプリのデモ動画 */}
      <AppsScreenshotVideo
        screenshots={PLAY_CARD_APP_INFO.screenshots}
        title=""
        className="py-20 bg-slate-50"
      />

      {/* アプリのスクリーンショット */}
      <AppsScreenshotImages
        screenshots={PLAY_CARD_APP_INFO.screenshots}
        title="アプリ画面"
        className="py-20 bg-white"
      />

      {/* 利用シーン */}
      <PlayCardAppUseCases
        useCases={PLAY_CARD_APP_USE_CASES}
        title="こんなシーンで活躍"
        className="py-20 bg-slate-50"
      />

      {/* アプリの特徴 */}
      <PlayCardAppFeatures
        features={PLAY_CARD_APP_FEATURES}
        title="アプリの特徴"
        className="py-20 bg-white"
      />

      {/* お問い合わせセクション */}
      <AppsContactSection contactUrl={CONTACT_FORMS.PLAY_CARD_APP} />
    </div>
  );
}
