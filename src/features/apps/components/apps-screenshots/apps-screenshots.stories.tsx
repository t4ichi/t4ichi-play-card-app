import type { Meta, StoryObj } from "@storybook/react";
import { AppsScreenshots } from "./apps-screenshots";

const meta: Meta<typeof AppsScreenshots> = {
  title: "Features/Apps/AppsScreenshots",
  component: AppsScreenshots,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "アプリのスクリーンショットを表示するコンポーネント。クリックで拡大表示（ライトボックス）が可能。",
      },
    },
  },
  argTypes: {
    screenshots: {
      description: "スクリーンショットの配列",
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

const sampleScreenshots = [
  {
    src: "https://via.placeholder.com/300x600/3b82f6/ffffff?text=Main+Screen",
    alt: "メイン画面",
    title: "シンプルなカード引き画面",
    description: "ワンタップでカードを引ける直感的なインターフェース",
  },
  {
    src: "https://via.placeholder.com/300x600/10b981/ffffff?text=Card+Drawn",
    alt: "カード表示画面",
    title: "引いたカードの表示",
    description: "美しいアニメーションでカードが表示されます",
  },
  {
    src: "https://via.placeholder.com/300x600/f59e0b/ffffff?text=Settings",
    alt: "設定画面",
    title: "カスタマイズ設定",
    description: "ジョーカーの有無や効果音の設定が可能",
  },
];

const realScreenshots = [
  {
    src: "/images/apps/play-card-app/main-screen.png",
    alt: "メイン画面",
    title: "シンプルなカード引き画面",
    description: "ワンタップでカードを引ける直感的なインターフェース",
  },
  {
    src: "/images/apps/play-card-app/card-drawn.png",
    alt: "カード表示画面",
    title: "引いたカードの表示",
    description: "美しいアニメーションでカードが表示されます",
  },
  {
    src: "/images/apps/play-card-app/settings.png",
    alt: "設定画面",
    title: "カスタマイズ設定",
    description: "ジョーカーの有無や効果音の設定が可能",
  },
];

export const Default: Story = {
  args: {
    screenshots: sampleScreenshots,
  },
};

export const RealScreenshots: Story = {
  args: {
    screenshots: realScreenshots,
    title: "実際のアプリ画面",
  },
};

export const SingleScreenshot: Story = {
  args: {
    screenshots: [sampleScreenshots[0]],
    title: "メイン機能",
  },
};

export const TwoScreenshots: Story = {
  args: {
    screenshots: sampleScreenshots.slice(0, 2),
    title: "主要機能",
  },
};

export const CustomTitle: Story = {
  args: {
    screenshots: sampleScreenshots,
    title: "アプリの使い方",
  },
};

export const WithoutDescriptions: Story = {
  args: {
    screenshots: sampleScreenshots.map(({ description, ...rest }) => rest),
    title: "シンプル表示",
  },
};

export const Mobile: Story = {
  args: {
    screenshots: sampleScreenshots,
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

export const EmptyScreenshots: Story = {
  args: {
    screenshots: [],
  },
  parameters: {
    docs: {
      description: {
        story: "スクリーンショットが空の場合は何も表示されません。",
      },
    },
  },
};
