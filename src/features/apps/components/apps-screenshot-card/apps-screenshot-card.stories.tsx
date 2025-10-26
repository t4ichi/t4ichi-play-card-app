import type { Meta, StoryObj } from "@storybook/react";
import { AppsScreenshotCard } from "./apps-screenshot-card";

const meta = {
  title: "Features/Apps/AppsScreenshotCard",
  component: AppsScreenshotCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    screenshot: {
      description: "スクリーンショットの情報",
    },
  },
} satisfies Meta<typeof AppsScreenshotCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    screenshot: {
      src: "/images/apps/play-card-app/app-demo.mp4",
      alt: "アプリ操作デモ動画",
      type: "video" as const,
    },
  },
};

export const WithoutDescription: Story = {
  args: {
    screenshot: {
      src: "/images/apps/play-card-app/app-demo.mp4",
      alt: "アプリ操作デモ動画",
      title: "実際のアプリ操作",
      type: "video" as const,
    },
  },
};

export const VideoWithDescription: Story = {
  args: {
    screenshot: {
      src: "/images/apps/play-card-app/app-demo.mp4",
      alt: "アプリ操作デモ動画",
      title: "実際のアプリ操作",
      description:
        "カード引きから履歴表示まで、実際のアプリ操作を動画でご確認いただけます",
      type: "video" as const,
    },
  },
};
