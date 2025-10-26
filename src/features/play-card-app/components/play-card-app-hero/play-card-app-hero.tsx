import { AppsDownloadButtons } from "@/features/apps/components/apps-download-buttons";
import { AppsHero } from "@/features/apps/components/apps-hero";
import type React from "react";
import { PLAY_CARD_APP_INFO } from "../../constants/play-card-app";

export type PlayCardAppHeroProps = {
  name?: string;
  subtitle?: string;
  description?: string;
  iconImage?: string;
  appStoreUrl?: string;
  showDownloadButtons?: boolean;
  className?: string;
};

export const PlayCardAppHero: React.FC<PlayCardAppHeroProps> = ({
  name = PLAY_CARD_APP_INFO.name,
  subtitle = PLAY_CARD_APP_INFO.subtitle,
  description = PLAY_CARD_APP_INFO.description,
  iconImage = "/images/apps/play-card-app/app-icon.png",
  appStoreUrl = PLAY_CARD_APP_INFO.appStoreUrl,
  showDownloadButtons = true,
  className = "",
}) => {
  return (
    <AppsHero
      name={name}
      subtitle={subtitle}
      description={description}
      iconImage={iconImage}
      className={className}
    >
      {showDownloadButtons && <AppsDownloadButtons appStoreUrl={appStoreUrl} />}
    </AppsHero>
  );
};
