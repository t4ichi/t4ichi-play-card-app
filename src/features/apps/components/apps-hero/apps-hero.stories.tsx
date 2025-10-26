import type { Meta, StoryObj } from "@storybook/react";
import { AppsHero } from "./apps-hero";

const meta: Meta<typeof AppsHero> = {
  title: "Features/Apps/AppsHero",
  component: AppsHero,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "アプリ紹介ページのヒーローセクションコンポーネント。グラデーション背景とアプリ情報を表示します。",
      },
    },
  },
  argTypes: {
    name: {
      description: "アプリ名",
      control: "text",
    },
    subtitle: {
      description: "アプリのサブタイトル",
      control: "text",
    },
    description: {
      description: "アプリの説明文",
      control: "text",
    },
    icon: {
      description: "アプリアイコン（絵文字またはテキスト）",
      control: "text",
    },
    children: {
      description: "ダウンロードボタンなどの子要素",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "カードを引くだけ",
    subtitle: "パーティーで盛り上がる！シンプルなカード引きアプリ",
    description:
      "ワンタップでトランプを1枚引く、パーティー・飲み会・罰ゲーム決めで活躍するシンプルなアプリ。",
    icon: "🃏",
  },
};

export const WithRealIcon: Story = {
  args: {
    name: "カードを引くだけ",
    subtitle: "パーティーで盛り上がる！シンプルなカード引きアプリ",
    description:
      "ワンタップでトランプを1枚引く、パーティー・飲み会・罰ゲーム決めで活躍するシンプルなアプリ。",
    iconImage: "/images/apps/play-card-app/app-icon.png",
  },
};

export const WithDownloadButtons: Story = {
  args: {
    name: "カードを引くだけ",
    subtitle: "パーティーで盛り上がる！シンプルなカード引きアプリ",
    description:
      "ワンタップでトランプを1枚引く、パーティー・飲み会・罰ゲーム決めで活躍するシンプルなアプリ。",
    icon: "🃏",
    children: (
      <>
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
        >
          <span className="mr-2">📱</span>
          App Storeで入手
        </button>
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors"
        >
          <span className="mr-2">🤖</span>
          Google Playで手に入れよう
        </button>
      </>
    ),
  },
};

export const LongDescription: Story = {
  args: {
    name: "サンプルアプリ",
    subtitle: "これは長い説明文のテストケースです",
    description:
      "これは非常に長い説明文のサンプルです。このアプリは様々な機能を持っており、ユーザーにとって非常に便利なツールです。パフォーマンスも高く、使いやすいインターフェースを提供します。また、セキュリティにも配慮された設計となっています。",
    icon: "🚀",
  },
};

export const WithoutIcon: Story = {
  args: {
    name: "シンプルアプリ",
    subtitle: "アイコンなしのバージョン",
    description:
      "このバージョンではアイコンを表示しません。テキストのみでアプリを紹介します。",
  },
};

export const Mobile: Story = {
  args: {
    name: "カードを引くだけ",
    subtitle: "パーティーで盛り上がる！シンプルなカード引きアプリ",
    description:
      "ワンタップでトランプを1枚引く、パーティー・飲み会・罰ゲーム決めで活躍するシンプルなアプリ。",
    icon: "🃏",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
