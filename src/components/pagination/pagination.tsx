"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  limit: number;
  className?: string;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalCount,
  limit,
  className = "",
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }
    return `?${params.toString()}`;
  };

  const handlePageChange = (page: number) => {
    router.push(createPageUrl(page));
    // ページ切り替え時にトップにスクロール
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ページ数が1以下の場合は表示しない
  if (totalPages <= 1) return null;

  // 表示するページ番号の範囲を計算
  const getVisiblePages = () => {
    const delta = 2; // 現在のページの前後に表示するページ数
    const range = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    // 最初のページを追加
    if (range.length && range[0] > 2) {
      range.unshift(1, -1); // -1は省略記号
    } else if (range.length && range[0] === 2) {
      range.unshift(1);
    } else if (!range.length || range[0] !== 1) {
      range.unshift(1);
    }

    // 最後のページを追加
    if (range.length && range[range.length - 1] < totalPages - 1) {
      range.push(-1, totalPages); // -1は省略記号
    } else if (range.length && range[range.length - 1] === totalPages - 1) {
      range.push(totalPages);
    } else if (!range.length || range[range.length - 1] !== totalPages) {
      range.push(totalPages);
    }

    return range;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      {/* ページネーション */}
      <div className="flex items-center space-x-1">
        {/* 前のページボタン */}
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="前のページに移動"
          className={`
            flex items-center justify-center w-10 h-10 rounded-lg border transition-colors duration-200
            ${
              currentPage === 1
                ? "border-gray-200 text-gray-400 cursor-not-allowed"
                : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
            }
          `}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* ページ番号 */}
        {visiblePages.map((page, index) => {
          if (page === -1) {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-gray-400"
              >
                ...
              </span>
            );
          }

          const isActive = page === currentPage;
          return (
            <button
              type="button"
              key={page}
              onClick={() => handlePageChange(page)}
              className={`
                w-10 h-10 rounded-lg border text-sm font-medium transition-colors duration-200
                ${
                  isActive
                    ? "bg-gray-900 text-white border-gray-900"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                }
              `}
            >
              {page}
            </button>
          );
        })}

        {/* 次のページボタン */}
        <button
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="次のページに移動"
          className={`
            flex items-center justify-center w-10 h-10 rounded-lg border transition-colors duration-200
            ${
              currentPage === totalPages
                ? "border-gray-200 text-gray-400 cursor-not-allowed"
                : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
            }
          `}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
