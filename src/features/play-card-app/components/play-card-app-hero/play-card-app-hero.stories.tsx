import type { Meta, StoryObj } from "@storybook/react";
import { PlayCardAppHero } from "./play-card-app-hero";

const meta: Meta<typeof PlayCardAppHero> = {
  title: "Features/PlayCardApp/PlayCardAppHero",
  component: PlayCardAppHero,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "「カードを引くだけ」アプリ専用のヒーローセクションコンポーネント。アプリ情報とダウンロードボタンを表示。",
      },
    },
  },
  argTypes: {
    showDownloadButtons: {
      description: "ダウンロードボタンの表示/非表示",
      control: "boolean",
    },
    className: {
      description: "追加のCSSクラス",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithoutDownloadButtons: Story = {
  args: {
    showDownloadButtons: false,
  },
  parameters: {
    docs: {
      description: {
        story: "ダウンロードボタンを非表示にしたバージョン。",
      },
    },
  },
};

export const WithCustomClass: Story = {
  args: {
    className: "border-b-4 border-blue-500",
  },
  parameters: {
    docs: {
      description: {
        story: "カスタムCSSクラスを適用したバージョン。",
      },
    },
  },
};

export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "モバイル表示でのレイアウト確認。",
      },
    },
  },
};
