import Image from "next/image";
import type React from "react";

export type AppsHeroProps = {
  name: string;
  subtitle: string;
  description: string;
  icon?: string;
  iconImage?: string;
  children?: React.ReactNode;
  className?: string;
};

export const AppsHero: React.FC<AppsHeroProps> = ({
  name,
  subtitle,
  description,
  icon,
  iconImage,
  children,
  className = "",
}) => {
  return (
    <section
      className={`relative min-h-[600px] bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        {(icon || iconImage) && (
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-white border border-slate-200 rounded-3xl shadow-lg flex items-center justify-center">
              {iconImage ? (
                <Image
                  src={iconImage}
                  alt={`${name} icon`}
                  width={96}
                  height={96}
                  className="rounded-2xl"
                />
              ) : (
                <span className="text-6xl">{icon}</span>
              )}
            </div>
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          {name}
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 font-medium mb-8 leading-relaxed">
          {subtitle}
        </p>

        <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
          {description}
        </p>

        {children && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};
