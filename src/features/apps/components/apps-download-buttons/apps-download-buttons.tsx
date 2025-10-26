import Image from "next/image";
import type React from "react";
import { DOWNLOAD_LABELS } from "../../constants/apps-links";
import type { DownloadLink } from "../../types/apps";

export type AppsDownloadButtonsProps = {
  appStoreUrl?: string;
  playStoreUrl?: string;
  className?: string;
};

export const AppsDownloadButtons: React.FC<AppsDownloadButtonsProps> = ({
  appStoreUrl,
  playStoreUrl,
  className = "",
}) => {
  const downloadLinks: DownloadLink[] = [];

  if (appStoreUrl) {
    downloadLinks.push({
      platform: "app-store",
      url: appStoreUrl,
      label: DOWNLOAD_LABELS["app-store"],
    });
  }

  if (playStoreUrl) {
    downloadLinks.push({
      platform: "play-store",
      url: playStoreUrl,
      label: DOWNLOAD_LABELS["play-store"],
    });
  }

  if (downloadLinks.length === 0) {
    return null;
  }

  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}
    >
      {downloadLinks.map((link) => (
        <DownloadButton key={link.platform} {...link} />
      ))}
    </div>
  );
};

type DownloadButtonProps = DownloadLink;

const DownloadButton: React.FC<DownloadButtonProps> = ({
  platform,
  url,
  label,
}) => {
  // App Store公式バッジを使用
  if (platform === "app-store") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:opacity-80 transition-opacity"
      >
        <Image
          src="/images/badges/app-store-badge-jp.svg"
          alt={label}
          width={200}
          height={60}
          className="h-12 w-auto"
        />
      </a>
    );
  }

  // 他のプラットフォーム用のフォールバック（現在は使用しない）
  const baseStyles =
    "inline-flex items-center px-6 py-3 font-medium rounded-lg border-2 transition-colors";

  const buttonStyles =
    platform === "play-store"
      ? `${baseStyles} bg-green-600 text-white border-green-600 hover:bg-background hover:text-green-600`
      : `${baseStyles} bg-muted-foreground text-background border-muted-foreground hover:bg-background hover:text-muted-foreground`;

  const getIcon = () => {
    if (platform === "play-store") {
      return (
        <svg
          className="w-6 h-6 mr-3"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="img"
          aria-label="Google Play"
        >
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
      );
    }
    return <span className="mr-3">📱</span>;
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonStyles}
    >
      {getIcon()}
      {label}
    </a>
  );
};
