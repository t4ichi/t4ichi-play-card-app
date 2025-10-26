import type React from "react";
import type { AppFeature } from "../../types/apps";

export type AppsFeaturesProps = {
  features: AppFeature[];
  title?: string;
  className?: string;
};

export const AppsFeatures: React.FC<AppsFeaturesProps> = ({
  features,
  title = "主な機能",
  className = "",
}) => {
  if (features.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            シンプルながら便利な機能をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

type FeatureCardProps = {
  feature: AppFeature;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="text-center group">
      <div className="mb-6 flex justify-center">
        <div className="w-12 h-12 bg-muted border border-border rounded-lg flex items-center justify-center text-2xl group-hover:border-ring transition-colors">
          {feature.icon || "⭐"}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-3">
        {feature.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};
