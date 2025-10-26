import type { AppInfo } from "@/features/apps/types/apps";
import type { ElementType } from "react";

export type PlayCardAppInfo = AppInfo & {
  // カード引きアプリ固有のプロパティがあれば追加
};

export type PlayCardAppUseCase = {
  title: string;
  description: string;
  icon: ElementType;
  examples: string[];
};

export type PlayCardAppFeature = {
  title: string;
  description: string;
  icon: ElementType;
  details?: string[];
};
