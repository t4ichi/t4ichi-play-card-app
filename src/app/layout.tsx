import { env } from "@/config/env";
import { SiteFooter } from "@/features/site/components/site-footer";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "トランプ引くだけ - 無料カード抽選アプリ",
    template: "%s | トランプ引くだけ",
  },
  description:
    "【iOS無料】ワンタップでトランプを1枚引くシンプルなカード抽選アプリ。パーティー・飲み会・罰ゲーム決め・順番決めに最適。",
  authors: [{ name: "Ito Taichi" }],
  keywords: [
    "トランプ引くだけ",
    "カード抽選アプリ",
    "パーティーゲーム",
    "罰ゲーム決め",
    "順番決めアプリ",
    "飲み会ゲーム",
    "iOS",
    "無料アプリ",
  ],
  openGraph: {
    title: "トランプ引くだけ - 無料カード抽選アプリ",
    description:
      "【iOS無料】ワンタップでトランプを1枚引くシンプルなカード抽選アプリ。パーティー・飲み会・罰ゲーム決め・順番決めに最適。",
    type: "website",
    locale: "ja_JP",
    siteName: "トランプ引くだけ",
  },
  twitter: {
    card: "summary_large_image",
    title: "トランプ引くだけ - 無料カード抽選アプリ",
    description:
      "【iOS無料】ワンタップでトランプを1枚引くシンプルなカード抽選アプリ。パーティー・飲み会・罰ゲーム決め・順番決めに最適。",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(env.SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Google Tag Manager requires inline script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NJT2BNZT');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJT2BNZT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
