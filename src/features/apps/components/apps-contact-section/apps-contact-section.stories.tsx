import type { Meta, StoryObj } from "@storybook/react";

import { AppsContactSection } from "./apps-contact-section";
import type { AppsContactSectionProps } from "./apps-contact-section";

const meta: Meta<AppsContactSectionProps> = {
  title: "Features/Apps/AppsContactSection",
  component: AppsContactSection,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      control: "text",
      description: "セクションのタイトル",
    },
    description: {
      control: "text",
      description: "説明文",
    },
    contactUrl: {
      control: "text",
      description: "お問い合わせフォームのURL",
    },
    className: {
      control: "text",
      description: "追加のCSSクラス",
    },
  },
};

export default meta;
type Story = StoryObj<AppsContactSectionProps>;

export const Default: Story = {
  args: {
    contactUrl: "https://forms.gle/3qhR5DgBS51GhyKq5",
  },
};

export const CustomContent: Story = {
  args: {
    title: "サポートが必要ですか？",
    description:
      "アプリの使い方でお困りの場合や、不具合を発見された場合は、お気軽にご連絡ください。専門スタッフが迅速に対応いたします。",
    contactUrl: "https://forms.gle/3qhR5DgBS51GhyKq5",
  },
};

export const Feedback: Story = {
  args: {
    title: "フィードバックをお聞かせください",
    description:
      "より良いアプリにするため、皆様のご意見やご要望をお聞かせください。新機能のアイデアも大歓迎です。",
    contactUrl: "https://forms.gle/3qhR5DgBS51GhyKq5",
  },
};

export const BugReport: Story = {
  args: {
    title: "バグを発見されましたか？",
    description:
      "アプリで問題が発生した場合は、詳細をお教えください。迅速に修正いたします。",
    contactUrl: "https://forms.gle/3qhR5DgBS51GhyKq5",
  },
};

export const WithCustomClass: Story = {
  args: {
    contactUrl: "https://forms.gle/3qhR5DgBS51GhyKq5",
    className: "bg-blue-50",
  },
};
