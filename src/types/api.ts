import type { apiErrorSchema } from "@/schemas/api";
import type { z } from "zod";

/**
 * APIエラーレスポンスの型
 * 全てのfeaturesで使用される共通のエラー構造
 */
export type ApiError = z.infer<typeof apiErrorSchema>;

/**
 * 基本的なResult型
 * 成功時とエラー時の両方の状態を表現
 */
export type Result<T, E = ApiError> =
  | { ok: true; value: T }
  | { ok: false; error: E };
