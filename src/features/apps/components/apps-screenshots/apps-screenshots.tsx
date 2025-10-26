import type React from "react";
import type { AppScreenshot } from "../../types/apps";
import { AppsScreenshotCard } from "../apps-screenshot-card";

export type AppsScreenshotsProps = {
  screenshots: AppScreenshot[];
  title?: string;
  className?: string;
};

export const AppsScreenshots: React.FC<AppsScreenshotsProps> = ({
  screenshots,
  title = "アプリの画面",
  className = "",
}) => {
  if (screenshots.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-center">
          {screenshots.map((screenshot, index) => (
            <AppsScreenshotCard key={index} screenshot={screenshot} />
          ))}
        </div>
      </div>
    </section>
  );
};
