import BackhandIndexPointingUpColorDefault from "@/icons/backhand_index_pointing_up_color_default.svg";
import BarChartColor from "@/icons/bar_chart_color.svg";
import BeerMugColor from "@/icons/beer_mug_color.svg";
import GearColor from "@/icons/gear_color.svg";
import JokerColor from "@/icons/joker_color.svg";
import PartyPopperColor from "@/icons/party_popper_color.svg";
import SparklesColor from "@/icons/sparkles_color.svg";
import ThinkingFaceColor from "@/icons/thinking_face_color.svg";
import type {
  PlayCardAppFeature,
  PlayCardAppUseCase,
} from "../types/play-card-app";

export const PLAY_CARD_APP_INFO = {
  name: "トランプ引くだけ",
  subtitle: "パーティー・罰ゲーム・決定支援に最適なカード抽選アプリ",
  description:
    "ワンタップでトランプを1枚引くシンプルなカード抽選アプリ。履歴機能・美しいアニメーション付きで使いやすさを追求。",
  // App Store URLは実際のURLに変更してください
  appStoreUrl: "https://apps.apple.com/app/id6751434516",
  screenshots: [
    {
      src: "/images/01-before-draw.png",
      alt: "トランプ引くだけアプリのメイン画面 - カードを引く前の状態",
      type: "image" as const,
    },
    {
      src: "/images/02-card-drawn.png",
      alt: "カードを引いた結果画面 - 引いたカードの表示",
      type: "image" as const,
    },
    {
      src: "/images/03-drawn-cards-list.png",
      alt: "引いたカードの履歴一覧 - 過去に引いたカード履歴",
      type: "image" as const,
    },
    {
      src: "/images/app-demo.mp4",
      alt: "アプリ操作デモ動画",
      type: "video" as const,
    },
  ],
};

export const PLAY_CARD_APP_USE_CASES: PlayCardAppUseCase[] = [
  {
    title: "パーティーゲーム・抽選",
    description: "友人同士の集まりで順番決めや役割抽選に最適",
    icon: PartyPopperColor,
    examples: ["順番決め抽選", "チーム分け", "司会者決め", "カラオケ順番"],
  },
  {
    title: "罰ゲーム・飲み会",
    description: "罰ゲーム決めや余興の抽選に簡単操作",
    icon: BeerMugColor,
    examples: ["罰ゲーム抽選", "一発芸担当決め", "おごり決め", "乾杯順番"],
  },
  {
    title: "決定支援ツール",
    description: "迷った時の決定支援・ランダム選択に",
    icon: ThinkingFaceColor,
    examples: ["二択の決定", "じゃんけん代わり", "アイスブレイク", "話題作り"],
  },
  {
    title: "ゲーム・エンタメ",
    description: "カードゲームや運試しゲームに活用",
    icon: JokerColor,
    examples: [
      "ハイローゲーム",
      "インディアンポーカー",
      "運試し",
      "占い風ゲーム",
    ],
  },
];

export const PLAY_CARD_APP_FEATURES: PlayCardAppFeature[] = [
  {
    title: "シンプル操作",
    description: "ワンタップでカードを引ける直感的な操作",
    icon: BackhandIndexPointingUpColorDefault,
    details: ["複雑な設定不要", "誰でもすぐに使える", "スムーズな操作感"],
  },
  {
    title: "美しいアニメーション",
    description: "滑らかなカードフリップ演出",
    icon: SparklesColor,
    details: ["本物のカードを引く感覚", "視覚的に楽しい", "高品質な表現"],
  },
  {
    title: "便利な履歴機能",
    description: "引いたカードの履歴確認とリセット機能",
    icon: BarChartColor,
    details: ["引いたカード履歴表示", "ワンタップ全リセット", "重複確認可能"],
  },
  {
    title: "カスタマイズ設定",
    description: "ジョーカーの有無や振動など細かい設定",
    icon: GearColor,
    details: ["52枚/54枚デッキ選択", "バイブレーション切替", "個人設定保存"],
  },
];
