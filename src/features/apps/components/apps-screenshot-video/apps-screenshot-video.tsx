import type React from "react";
import type { AppScreenshot } from "../../types/apps";

export type AppsScreenshotVideoProps = {
  screenshots: AppScreenshot[];
  title?: string;
  className?: string;
};

export const AppsScreenshotVideo: React.FC<AppsScreenshotVideoProps> = ({
  screenshots,
  title = "アプリのデモ動画",
  className = "",
}) => {
  // 動画タイプのスクリーンショットのみをフィルタリング
  const videoScreenshots = screenshots.filter(
    (screenshot) => screenshot.type === "video",
  );

  if (videoScreenshots.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          {title}
        </h2>
        <div className="flex justify-center">
          {videoScreenshots.map((screenshot, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm"
            >
              <div className="aspect-[9/16] relative bg-slate-50 flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                  aria-label={screenshot.alt}
                >
                  <source
                    src={screenshot.src.replace(".mp4", ".webm")}
                    type="video/webm"
                  />
                  <source src={screenshot.src} type="video/mp4" />
                  お使いのブラウザは動画をサポートしていません。
                </video>
              </div>
              {(screenshot.title || screenshot.description) && (
                <div className="p-6">
                  {screenshot.title && (
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {screenshot.title}
                    </h3>
                  )}
                  {screenshot.description && (
                    <p className="text-slate-600 leading-relaxed">
                      {screenshot.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
