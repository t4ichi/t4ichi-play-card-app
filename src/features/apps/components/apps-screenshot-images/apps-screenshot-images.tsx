import Image from "next/image";
import type React from "react";
import type { AppScreenshot } from "../../types/apps";

export type AppsScreenshotImagesProps = {
  screenshots: AppScreenshot[];
  title?: string;
  className?: string;
};

export const AppsScreenshotImages: React.FC<AppsScreenshotImagesProps> = ({
  screenshots,
  title = "アプリの画面",
  className = "",
}) => {
  // 画像タイプのスクリーンショットのみをフィルタリング
  const imageScreenshots = screenshots.filter(
    (screenshot) => screenshot.type === "image",
  );

  if (imageScreenshots.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {imageScreenshots.map((screenshot, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm w-full"
            >
              <div className="aspect-[9/16] relative bg-slate-50 flex items-center justify-center">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
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
