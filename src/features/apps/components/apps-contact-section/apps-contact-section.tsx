import { ExternalLink, MessageCircle } from "lucide-react";
import type React from "react";

export type AppsContactSectionProps = {
  title?: string;
  description?: string;
  contactUrl: string;
  className?: string;
};

export const AppsContactSection: React.FC<AppsContactSectionProps> = ({
  title = "お問い合わせ・サポート",
  description = "アプリに関するご質問、バグのご報告、改善のご要望など、お気軽にお聞かせください。",
  contactUrl,
  className = "",
}) => {
  return (
    <section className={`py-20 bg-slate-50 ${className}`}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          {/* アイコン */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-200 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-slate-700" />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white text-base font-medium rounded-xl hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow-lg"
          >
            お問い合わせフォームへ
            <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
