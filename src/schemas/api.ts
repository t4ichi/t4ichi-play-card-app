import { z } from "zod";

/**
 * APIエラーレスポンスのスキーマ
 * 全てのfeaturesで使用される共通のエラー構造
 */
export const apiErrorSchema = z.object({
  message: z.string(),
});
