import type { Meta, StoryObj } from "@storybook/react";

import { AppsScreenshotVideo } from "./apps-screenshot-video";
import type { AppsScreenshotVideoProps } from "./apps-screenshot-video";

const meta: Meta<AppsScreenshotVideoProps> = {
  title: "Features/Apps/AppsScreenshotVideo",
  component: AppsScreenshotVideo,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      control: "text",
      description: "セクションのタイトル",
    },
    className: {
      control: "text",
      description: "追加のCSSクラス",
    },
  },
};

export default meta;
type Story = StoryObj<AppsScreenshotVideoProps>;

const mockVideoScreenshots = [
  {
    src: "/images/apps/play-card-app/app-demo.mp4",
    alt: "アプリ操作デモ動画",
    type: "video" as const,
    title: "デモ動画",
    description: "実際の操作方法をご覧ください",
  },
];

const mockMixedScreenshots = [
  {
    src: "/images/apps/play-card-app/01-before-draw.png",
    alt: "アプリのメイン画面",
    type: "image" as const,
    title: "メイン画面",
    description: "カードを引く前の状態",
  },
  {
    src: "/images/apps/play-card-app/app-demo.mp4",
    alt: "アプリ操作デモ動画",
    type: "video" as const,
    title: "デモ動画",
    description: "実際の操作方法をご覧ください",
  },
];

export const Default: Story = {
  args: {
    screenshots: mockVideoScreenshots,
    title: "実際の操作をご覧ください",
    className: "py-20 bg-slate-50",
  },
};

export const WithMixedContent: Story = {
  args: {
    screenshots: mockMixedScreenshots,
    title: "アプリのデモ動画（画像は除外される）",
    className: "py-20 bg-white",
  },
};

export const NoVideos: Story = {
  args: {
    screenshots: [],
    title: "動画なし",
    className: "py-20 bg-slate-50",
  },
};

export const WithoutTitleAndDescription: Story = {
  args: {
    screenshots: [
      {
        src: "/images/apps/play-card-app/app-demo.mp4",
        alt: "アプリ操作デモ動画",
        type: "video" as const,
      },
    ],
    title: "タイトル・説明なしの動画",
    className: "py-20 bg-white",
  },
};

export const MultipleVideos: Story = {
  args: {
    screenshots: [
      {
        src: "/images/apps/play-card-app/app-demo.mp4",
        alt: "アプリ操作デモ動画1",
        type: "video" as const,
        title: "基本操作",
        description: "カードを引く基本的な操作",
      },
      {
        src: "/images/apps/play-card-app/app-demo.mp4",
        alt: "アプリ操作デモ動画2",
        type: "video" as const,
        title: "履歴確認",
        description: "引いたカードの履歴を確認する方法",
      },
    ],
    title: "複数の動画",
    className: "py-20 bg-slate-50",
  },
};
