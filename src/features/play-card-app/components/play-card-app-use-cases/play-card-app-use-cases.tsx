import type React from "react";
import { PLAY_CARD_APP_USE_CASES } from "../../constants/play-card-app";
import type { PlayCardAppUseCase } from "../../types/play-card-app";

export type PlayCardAppUseCasesProps = {
  useCases?: PlayCardAppUseCase[];
  title?: string;
  className?: string;
};

export const PlayCardAppUseCases: React.FC<PlayCardAppUseCasesProps> = ({
  useCases = PLAY_CARD_APP_USE_CASES,
  title = "こんな場面で活躍",
  className = "",
}) => {
  if (useCases.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            パーティーから日常まで、様々なシーンで楽しめます
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  );
};

type UseCaseCardProps = {
  useCase: PlayCardAppUseCase;
};

const UseCaseCard: React.FC<UseCaseCardProps> = ({ useCase }) => {
  const Icon = useCase.icon;
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-12 h-12" />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {useCase.title}
          </h3>

          <p className="text-slate-600 leading-relaxed mb-4">
            {useCase.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {useCase.examples.map((example, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
              >
                {example}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
