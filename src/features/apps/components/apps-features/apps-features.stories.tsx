import type { Meta, StoryObj } from "@storybook/react";
import { AppsFeatures } from "./apps-features";

const meta: Meta<typeof AppsFeatures> = {
  title: "Features/Apps/AppsFeatures",
  component: AppsFeatures,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "アプリの主要機能を表示するコンポーネント。アイコン、タイトル、説明をカード形式で表示。",
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

const sampleFeatures = [
  {
    title: "シンプル操作",
    description: "ワンタップでカードを引ける直感的な操作",
    icon: "👆",
  },
  {
    title: "美しいアニメーション",
    description: "リアルなカードフリップアニメーション",
    icon: "✨",
  },
  {
    title: "便利な機能",
    description: "履歴や残りカードの確認が可能",
    icon: "📊",
  },
  {
    title: "カスタマイズ",
    description: "ジョーカーの有無や効果音の設定",
    icon: "⚙️",
  },
];

export const Default: Story = {
  args: {
    features: sampleFeatures,
  },
};

export const TwoFeatures: Story = {
  args: {
    features: sampleFeatures.slice(0, 2),
    title: "コア機能",
  },
};

export const ThreeFeatures: Story = {
  args: {
    features: sampleFeatures.slice(0, 3),
    title: "主要機能",
  },
};

export const SixFeatures: Story = {
  args: {
    features: [
      ...sampleFeatures,
      {
        title: "高速動作",
        description: "最適化されたパフォーマンス",
        icon: "⚡",
      },
      {
        title: "安全設計",
        description: "全年齢対応の安心設計",
        icon: "🔒",
      },
    ],
    title: "全ての機能",
  },
};

export const CustomTitle: Story = {
  args: {
    features: sampleFeatures,
    title: "なぜこのアプリを選ぶのか？",
  },
};

export const WithoutIcons: Story = {
  args: {
    features: sampleFeatures.map(({ icon, ...rest }) => rest),
    title: "シンプル表示",
  },
};

export const Mobile: Story = {
  args: {
    features: sampleFeatures,
  },
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
