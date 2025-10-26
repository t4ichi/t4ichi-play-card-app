export type AppInfo = {
  name: string;
  subtitle: string;
  description: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  screenshots: AppScreenshot[];
  features: AppFeature[];
  useCases: AppUseCase[];
  icon?: string;
};

export type AppScreenshot = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  type?: "image" | "video";
};

export type AppFeature = {
  title: string;
  description: string;
  icon?: string;
};

export type AppUseCase = {
  title: string;
  description: string;
  icon?: string;
};

export type DownloadPlatform = "app-store" | "play-store";

export type DownloadLink = {
  platform: DownloadPlatform;
  url: string;
  label: string;
};
