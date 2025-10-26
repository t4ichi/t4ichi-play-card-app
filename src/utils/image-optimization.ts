/**
 * 画像URL最適化ユーティリティ
 * MicroCMSの画像API仕様に基づいた最適化
 * 参考: https://document.microcms.io/image-api/format
 */

export type MicroCMSImageFormat = "webp" | "jpg" | "png" | "json";

export type ImageOptimizationOptions = {
  width?: number;
  height?: number;
  fit?: "crop" | "fill" | "scale" | "crop-top" | "crop-bottom";
  format?: MicroCMSImageFormat;
  quality?: number;
};

/**
 * MicroCMS画像URLを最適化
 * WebPフォーマットによりJPG/PNGより20-30%のファイルサイズ削減を実現
 */
export function optimizeMicroCMSImage(
  url: string,
  options: ImageOptimizationOptions = {},
): string {
  const {
    width,
    height,
    fit = "crop",
    format = "webp",
    quality = 85,
  } = options;

  const params = new URLSearchParams();

  // サイズ指定
  if (width) params.set("w", width.toString());
  if (height) params.set("h", height.toString());

  // フィット方法
  params.set("fit", fit);

  // フォーマット（WebPを優先）
  params.set("fm", format);

  // 品質（WebPの場合は高品質でもファイルサイズが小さい）
  if (format !== "json") {
    params.set("q", quality.toString());
  }

  return `${url}?${params.toString()}`;
}

/**
 * レスポンシブ画像のsrcSetを生成
 */
export function generateSrcSet(
  url: string,
  widths: number[],
  options: Omit<ImageOptimizationOptions, "width"> = {},
): string {
  return widths
    .map((width) => {
      const optimizedUrl = optimizeMicroCMSImage(url, {
        ...options,
        width,
      });
      return `${optimizedUrl} ${width}w`;
    })
    .join(", ");
}

/**
 * WebP対応を確認してフォーマットを決定
 * 古いブラウザ用のフォールバック機能
 */
export function getOptimalImageFormat(): MicroCMSImageFormat {
  if (typeof window === "undefined") {
    // SSR時はWebPを使用
    return "webp";
  }

  // ブラウザのWebP対応を確認
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;

  try {
    // WebP対応チェック
    const webpSupported =
      canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
    return webpSupported ? "webp" : "jpg";
  } catch {
    return "jpg";
  }
}

/**
 * 最適化された画像URLを取得（自動フォーマット選択）
 */
export function getOptimizedImageUrl(
  url: string,
  options: Omit<ImageOptimizationOptions, "format"> = {},
): string {
  return optimizeMicroCMSImage(url, {
    ...options,
    format: getOptimalImageFormat(),
  });
}
