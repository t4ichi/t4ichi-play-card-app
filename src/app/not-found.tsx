import PawPrintsColor from "@/icons/paw_prints_color.svg";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ページが見つかりません | taichi no heya",
  description: "お探しのページは見つかりませんでした。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          {/* 404 Number */}
          <div className="text-9xl font-bold text-gray-900 leading-none select-none">
            404
          </div>

          {/* Message */}
          <div className="space-y-2">
            <p className="text-gray-600 leading-relaxed">
              このページはすでに削除されているか、URLが間違っている可能性があります。
            </p>
          </div>

          {/* Illustration Area */}
          <div className="py-12">
            <div className="flex justify-center">
              <PawPrintsColor className="w-24 h-24 opacity-70" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              トップへ戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
