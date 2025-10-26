import { describe, expect, it } from "vitest";
import type { Result } from "./result";

describe("Result型", () => {
  it("okがtrueの場合、valueが存在し、errorは存在しない", () => {
    const result: Result<number, string> = { ok: true, value: 123 };
    expect(result.ok).toBe(true);
    expect(result.value).toBe(123);
    // @ts-expect-error errorプロパティは存在しない
    expect(result.error).toBeUndefined();
  });

  it("okがfalseの場合、errorが存在し、valueは存在しない", () => {
    const result: Result<number, string> = { ok: false, error: "エラー発生" };
    expect(result.ok).toBe(false);
    expect(result.error).toBe("エラー発生");
    // @ts-expect-error valueプロパティは存在しない
    expect(result.value).toBeUndefined();
  });

  it("okがtrueなのにerrorプロパティを持つ場合、型エラーになる", () => {
    // @ts-expect-error errorプロパティは存在しない
    const result: Result<number, string> = { ok: true, error: "エラー" };
    expect(result.ok).toBe(true);
  });

  it("okがfalseなのにvalueプロパティを持つ場合、型エラーになる", () => {
    // @ts-expect-error valueプロパティは存在しない
    const result: Result<number, string> = { ok: false, value: 999 };
    expect(result.ok).toBe(false);
  });
});
