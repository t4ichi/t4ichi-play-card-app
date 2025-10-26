import type { Meta, StoryObj } from "@storybook/react";
import { AppsDownloadButtons } from "./apps-download-buttons";

const meta: Meta<typeof AppsDownloadButtons> = {
  title: "Features/Apps/AppsDownloadButtons",
  component: AppsDownloadButtons,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "アプリのダウンロードボタンを表示するコンポーネント。App StoreとGoogle Play Storeに対応。",
      },
    },
  },
  argTypes: {
    appStoreUrl: {
      description: "App StoreのURL",
      control: "text",
    },
    playStoreUrl: {
      description: "Google Play StoreのURL",
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

export const BothStores: Story = {
  args: {
    appStoreUrl: "https://apps.apple.com/app/sample-app",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.example.app",
  },
};

export const AppStoreOnly: Story = {
  args: {
    appStoreUrl: "https://apps.apple.com/app/sample-app",
  },
};

export const PlayStoreOnly: Story = {
  args: {
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.example.app",
  },
};

export const NoUrls: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "URLが指定されていない場合は何も表示されません。",
      },
    },
  },
};

export const WithCustomClass: Story = {
  args: {
    appStoreUrl: "https://apps.apple.com/app/sample-app",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.example.app",
    className: "bg-gray-100 p-4 rounded-lg",
  },
};

export const Mobile: Story = {
  args: {
    appStoreUrl: "https://apps.apple.com/app/sample-app",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.example.app",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "モバイル表示では縦に並んで表示されます。",
      },
    },
  },
};
