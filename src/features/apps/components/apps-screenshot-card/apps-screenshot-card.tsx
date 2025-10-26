import Image from "next/image";
import type React from "react";
import type { AppScreenshot } from "../../types/apps";

export type AppsScreenshotCardProps = {
  screenshot: AppScreenshot;
};

export const AppsScreenshotCard: React.FC<AppsScreenshotCardProps> = ({
  screenshot,
}) => {
  const isVideo = screenshot.type === "video";

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
      <div className="aspect-[9/16] relative bg-slate-50 flex items-center justify-center">
        {isVideo ? (
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
        ) : (
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
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
  );
};
