import type { Meta, StoryObj } from "@storybook/react";
import { PLAY_CARD_APP_FEATURES } from "../../constants/play-card-app";
import { PlayCardAppFeatures } from "./play-card-app-features";

const meta: Meta<typeof PlayCardAppFeatures> = {
  title: "Features/PlayCardApp/PlayCardAppFeatures",
  component: PlayCardAppFeatures,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "「カードを引くだけ」アプリの詳細機能を紹介するコンポーネント。アイコン、説明文、詳細リストを表示。",
      },
    },
  },
  argTypes: {
    features: {
      description: "機能の配列",
    },
    title: {
      description: "セクションのタイトル",
      control: "text",
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

export const TwoFeatures: Story = {
  args: {
    features: PLAY_CARD_APP_FEATURES.slice(0, 2),
    title: "コア機能",
  },
};

export const SingleFeature: Story = {
  args: {
    features: [PLAY_CARD_APP_FEATURES[0]],
    title: "メイン機能",
  },
};

export const CustomFeatures: Story = {
  args: {
    features: [
      {
        title: "オフライン対応",
        description: "インターネット接続不要で安心して使用可能",
        icon: "📶",
        details: ["データ通信量ゼロ", "圏外でも使用可能", "プライバシー保護"],
      },
      {
        title: "軽量設計",
        description: "アプリサイズも軽量でストレージを圧迫しません",
        icon: "⚡",
        details: ["高速起動", "バッテリー消費最小", "古い端末でも快適"],
      },
    ],
    title: "技術的な強み",
  },
};

export const WithoutDetails: Story = {
  args: {
    features: PLAY_CARD_APP_FEATURES.map(({ details, ...rest }) => rest),
    title: "シンプル表示",
  },
};

export const CustomTitle: Story = {
  args: {
    title: "なぜこのアプリが選ばれるのか",
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
        story: "モバイル表示では1列に表示されます。",
      },
    },
  },
};

export const EmptyFeatures: Story = {
  args: {
    features: [],
  },
  parameters: {
    docs: {
      description: {
        story: "機能が空の場合は何も表示されません。",
      },
    },
  },
};
