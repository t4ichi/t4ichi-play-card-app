import { env } from "@/config/env";
import GitHubIcon from "@/icons/github.svg";
import SteamingBowlColor from "@/icons/steaming_bowl_color.svg";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const baseUrl = env.SITE_URL;

export const metadata: Metadata = {
  title: "Ito Taichi | Web Developer",
  description:
    "Web developer specializing in modern web technologies. Personal website and portfolio.",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Ito Taichi | Web Developer",
    description:
      "Web developer specializing in modern web technologies. Personal website and portfolio.",
    url: baseUrl,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ito Taichi | Web Developer",
    description:
      "Web developer specializing in modern web technologies. Personal website and portfolio.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <main className="space-y-12">
          {/* Profile Section */}
          <section className="text-center">
            <div className="w-32 h-32 mx-auto mb-6">
              <Image
                src="https://github.com/t4ichi.png"
                alt="Ito Taichi"
                width={128}
                height={128}
                priority
                className="w-full h-full rounded-full object-cover border-4 border-blue-200"
              />
            </div>

            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Ito Taichi
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Web developer
            </p>
          </section>

          {/* Navigation Cards */}
          <section className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {/* Ramen Link */}
            <a
              href="https://ramens.t4ichi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-4 bg-white border-2 border-gray-100 rounded-2xl hover:border-orange-200 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors duration-200">
                <SteamingBowlColor className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-orange-700">
                Ramen
              </span>
            </a>

            {/* Play Card App Link */}
            <Link
              href="/apps/play-card-app"
              className="group flex flex-col items-center p-4 bg-white border-2 border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-200">
                <span className="text-2xl">🃏</span>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                Card App
              </span>
            </Link>

            {/* GitHub Link */}
            <a
              href="https://github.com/t4ichi"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-4 bg-white border-2 border-gray-100 rounded-2xl hover:border-gray-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors duration-200">
                <GitHubIcon className="w-6 h-6 text-gray-700" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                GitHub
              </span>
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}
