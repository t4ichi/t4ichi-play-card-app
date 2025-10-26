import type { Meta, StoryObj } from "@storybook/react";
import { PLAY_CARD_APP_USE_CASES } from "../../constants/play-card-app";
import { PlayCardAppUseCases } from "./play-card-app-use-cases";

const meta: Meta<typeof PlayCardAppUseCases> = {
  title: "Features/PlayCardApp/PlayCardAppUseCases",
  component: PlayCardAppUseCases,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "「カードを引くだけ」アプリの使用場面を紹介するコンポーネント。具体的な利用例とタグを表示。",
      },
    },
  },
  argTypes: {
    useCases: {
      description: "使用場面の配列",
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

export const CustomUseCases: Story = {
  args: {
    useCases: [
      {
        title: "ゲーム大会",
        description: "esports大会やボードゲーム会で使える決定ツール",
        icon: "🏆",
        examples: ["トーナメント進行", "チーム分け", "審査員選び"],
      },
      {
        title: "ビジネス会議",
        description: "会議でのアイスブレイクや意思決定支援に",
        icon: "💼",
        examples: ["発表順決め", "司会者選出", "議題決定"],
      },
    ],
    title: "ビジネスでも使える",
  },
};

export const SingleUseCase: Story = {
  args: {
    useCases: [PLAY_CARD_APP_USE_CASES[0]],
    title: "メイン用途",
  },
};

export const TwoUseCases: Story = {
  args: {
    useCases: PLAY_CARD_APP_USE_CASES.slice(0, 2),
    title: "主要な使い方",
  },
};

export const CustomTitle: Story = {
  args: {
    title: "あなたもこんな場面で使ってみませんか？",
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

export const EmptyUseCases: Story = {
  args: {
    useCases: [],
  },
  parameters: {
    docs: {
      description: {
        story: "使用場面が空の場合は何も表示されません。",
      },
    },
  },
};
