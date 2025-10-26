import type { Meta, StoryObj } from "@storybook/react";

import { AppsScreenshotImages } from "./apps-screenshot-images";
import type { AppsScreenshotImagesProps } from "./apps-screenshot-images";

const meta: Meta<AppsScreenshotImagesProps> = {
  title: "Features/Apps/AppsScreenshotImages",
  component: AppsScreenshotImages,
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
type Story = StoryObj<AppsScreenshotImagesProps>;

const mockScreenshots = [
  {
    src: "/images/apps/play-card-app/01-before-draw.png",
    alt: "アプリのメイン画面",
    type: "image" as const,
    title: "メイン画面",
    description: "カードを引く前の状態",
  },
  {
    src: "/images/apps/play-card-app/02-card-drawn.png",
    alt: "カードが引かれた結果画面",
    type: "image" as const,
    title: "結果画面",
    description: "引いたカードが表示される",
  },
  {
    src: "/images/apps/play-card-app/03-drawn-cards-list.png",
    alt: "引いたカードの履歴一覧",
    type: "image" as const,
    title: "履歴画面",
    description: "過去に引いたカードの履歴",
  },
];

const mockScreenshotsWithVideo = [
  ...mockScreenshots,
  {
    src: "/images/apps/play-card-app/app-demo.mp4",
    alt: "アプリ操作デモ動画",
    type: "video" as const,
    title: "デモ動画",
    description: "実際の操作方法",
  },
];

export const Default: Story = {
  args: {
    screenshots: mockScreenshots,
    title: "アプリの画面",
    className: "py-20 bg-white",
  },
};

export const WithMixedContent: Story = {
  args: {
    screenshots: mockScreenshotsWithVideo,
    title: "アプリの画面（動画は除外される）",
    className: "py-20 bg-slate-50",
  },
};

export const SingleImage: Story = {
  args: {
    screenshots: [mockScreenshots[0]],
    title: "単一の画面",
    className: "py-20 bg-white",
  },
};

export const NoImages: Story = {
  args: {
    screenshots: [],
    title: "画像なし",
    className: "py-20 bg-white",
  },
};

export const WithoutTitleAndDescription: Story = {
  args: {
    screenshots: [
      {
        src: "/images/apps/play-card-app/01-before-draw.png",
        alt: "アプリのメイン画面",
        type: "image" as const,
      },
    ],
    title: "タイトル・説明なしの画面",
    className: "py-20 bg-white",
  },
};
