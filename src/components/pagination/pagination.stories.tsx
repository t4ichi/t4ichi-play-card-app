import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ページネーションコンポーネント。URLのクエリパラメータ(page)を直接操作します。",
      },
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/ramens",
        query: {},
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      description: "現在のページ番号",
      control: { type: "number", min: 1 },
    },
    totalPages: {
      description: "総ページ数",
      control: { type: "number", min: 1 },
    },
    totalCount: {
      description: "総件数",
      control: { type: "number", min: 0 },
    },
    limit: {
      description: "1ページあたりの表示件数",
      control: { type: "number", min: 1 },
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
  args: {
    currentPage: 1,
    totalPages: 10,
    totalCount: 100,
    limit: 10,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    totalCount: 100,
    limit: 10,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    totalCount: 100,
    limit: 10,
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 15,
    totalPages: 50,
    totalCount: 500,
    limit: 10,
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
    totalCount: 25,
    limit: 10,
  },
};

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
    totalCount: 5,
    limit: 10,
  },
};
