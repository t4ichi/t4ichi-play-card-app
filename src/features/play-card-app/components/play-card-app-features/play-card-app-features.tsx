import type React from "react";
import { PLAY_CARD_APP_FEATURES } from "../../constants/play-card-app";
import type { PlayCardAppFeature } from "../../types/play-card-app";

export type PlayCardAppFeaturesProps = {
  features?: PlayCardAppFeature[];
  title?: string;
  className?: string;
};

export const PlayCardAppFeatures: React.FC<PlayCardAppFeaturesProps> = ({
  features = PLAY_CARD_APP_FEATURES,
  title = "アプリの特徴",
  className = "",
}) => {
  if (features.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <FeatureDetailCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

type FeatureDetailCardProps = {
  feature: PlayCardAppFeature;
};

const FeatureDetailCard: React.FC<FeatureDetailCardProps> = ({ feature }) => {
  const Icon = feature.icon;
  return (
    <div className="group">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-16 h-16 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center group-hover:bg-slate-200 transition-colors">
          <Icon className="w-8 h-8 text-slate-600" />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {feature.title}
          </h3>

          <p className="text-slate-600 leading-relaxed mb-4">
            {feature.description}
          </p>

          {feature.details && feature.details.length > 0 && (
            <ul className="space-y-2">
              {feature.details.map((detail, index) => (
                <li key={index} className="flex items-center text-slate-600">
                  <svg
                    className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    role="img"
                    aria-label="チェックマーク"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
