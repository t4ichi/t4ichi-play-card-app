/**
 * unknown型のエラーをApiError型に変換する関数
 */
export const parseApiError = (error: unknown) => {
  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return { message: error.message };
  }

  // Error インスタンスの場合
  if (error instanceof Error) {
    return { message: error.message };
  }

  // その他の場合
  return { message: "予期しないエラーが発生しました" };
};
