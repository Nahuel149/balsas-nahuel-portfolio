import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Bug,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileCheck2,
  Gamepad2,
  GraduationCap,
  Github,
  Globe2,
  Languages,
  Layers3,
  Linkedin,
  Mail,
  Network,
  PenTool,
  Rocket,
  Route,
  ShieldCheck,
  ShoppingCart,
  Terminal,
  TestTubeDiagonal,
  Trophy,
} from "lucide-react";
import "./styles.css";

const links = {
  github: "https://github.com/Nahuel149/",
  linkedin: "https://www.linkedin.com/in/nahuel-balsas",
  email: "mailto:nahuelbalsas199@gmail.com",
  dunit: "https://d-unit.world",
  scoutboard: "https://github.com/Nahuel149/scoutboard-ai",
  autoresearch: "https://github.com/Nahuel149/autoresearch-rtx3070",
  copaKahl: "https://copa-kahl.onrender.com/",
  smartWifi: "https://smartwifiaccess.com/",
};

const stats = [
  ["177", "tracked D-Unit commits"],
  ["94", "deployment records"],
  ["4", "work languages"],
  ["JST", "remote-ready schedule"],
];

const focus = [
  {
    icon: Code2,
    title: "Full-stack product builds",
    text: "React, TypeScript, FastAPI, Java/Spring, dashboards, APIs, auth flows, billing, and product-facing features.",
  },
  {
    icon: ShieldCheck,
    title: "QA-minded delivery",
    text: "Playwright, Vitest, Testing Library, pytest, Jira-style bug reports, regression checks, and clear reproduction notes.",
  },
  {
    icon: Database,
    title: "Data and integrations",
    text: "MongoDB, MySQL, Meta Graph API, OpenAI, MailerLite, MercadoPago, data checks, reports, and source-backed research.",
  },
];

const proofRoutes = [
  {
    label: "Full-stack SaaS",
    title: "Start with D-Unit",
    text: "Best signal for React, FastAPI, integrations, auth, billing, deployment, and production-style debugging.",
    href: "#case-study",
    icon: Rocket,
  },
  {
    label: "QA / testing",
    title: "Read the QA range",
    text: "Best signal for bug reports, regression checks, localization QA, Playwright, pytest, and developer-ready reproduction notes.",
    href: "#qa-range",
    icon: Bug,
  },
  {
    label: "Data / AI workflows",
    title: "Open ScoutBoard",
    text: "Best signal for source tracking, validation rules, report workflows, football analytics, and public-safe TypeScript code.",
    href: links.scoutboard,
    icon: Network,
  },
  {
    label: "Writing / research",
    title: "Use the proof pack",
    text: "Best signal for source-backed summaries, AI-draft cleanup, readable Japanese samples, and careful delivery checks.",
    href: "#proof-points",
    icon: PenTool,
  },
];

const projects = [
  {
    eyebrow: "Primary case study",
    title: "D-Unit",
    role: "Full-stack SaaS developer",
    summary:
      "SaaS analytics platform for digital businesses, with dashboards, Meta integrations, AI-assisted insights, marketing automation, subscription billing, security middleware, and deployment workflows.",
    tags: ["React", "TypeScript", "FastAPI", "MongoDB", "MySQL", "AWS/EKS", "OpenAI"],
    href: links.dunit,
    cta: "View public product",
    icon: Rocket,
  },
  {
    eyebrow: "Public-safe code proof",
    title: "ScoutBoard AI",
    role: "Football research and data QA portfolio app",
    summary:
      "A self-created research operations app that turns football sample data into validation checks, analytics screens, and report-ready proof without using private client material.",
    tags: ["Next.js", "TypeScript", "Vitest", "Data QA", "Reports"],
    href: links.scoutboard,
    cta: "Open repository",
    icon: Network,
  },
  {
    eyebrow: "Live product design",
    title: "Copa Kahl",
    role: "World Cup 2026 prediction app",
    summary:
      "A deployed prode app with standings, prediction flows, rules, champions views, admin result loading, comments, sharing, and image export for tournament groups.",
    tags: ["React", "Product UX", "Game rules", "Standings", "Sharing", "Render"],
    href: links.copaKahl,
    cta: "Open live app",
    icon: Trophy,
  },
  {
    eyebrow: "QA and writing proof",
    title: "Bug reports and research samples",
    role: "Localization QA, source summaries, and rewrite work",
    summary:
      "Reusable proof for game QA, technical research, AI-draft cleanup, and client-ready documentation based on public-safe examples.",
    tags: ["Jira", "LQA", "English", "Spanish", "Japanese reading"],
    href: links.github,
    cta: "See GitHub profile",
    icon: Bug,
  },
];

const projectAtlas = [
  {
    eyebrow: "Full-stack SaaS",
    title: "D-Unit",
    type: "Private codebase, public product page",
    summary:
      "Analytics SaaS for digital businesses. I worked across dashboards, FastAPI services, Meta integrations, AI chat, billing, security middleware, tests, Docker, and AWS/EKS deployment work.",
    proof: "Public product page, private GitHub history, architecture notes, 177 tracked commits, 94 deployment records.",
    tags: ["React", "TypeScript", "FastAPI", "MongoDB", "MySQL", "OpenAI", "Meta API", "MercadoPago"],
    href: links.dunit,
    icon: Rocket,
  },
  {
    eyebrow: "Public portfolio app",
    title: "ScoutBoard AI",
    type: "Public-safe code repo",
    summary:
      "A football research and data QA app with source policies, validation rules, analytics pages, report previews, and workflow documentation.",
    proof: "Next.js app, tests, build scripts, sample data, public-safe reports, and source-tracking workflow.",
    tags: ["Next.js", "TypeScript", "Vitest", "Data QA", "Football analytics"],
    href: links.scoutboard,
    icon: Network,
  },
  {
    eyebrow: "Live sports product",
    title: "Copa Kahl",
    type: "Deployed Render app",
    summary:
      "World Cup 2026 prediction game for friends or groups, with participant standings, exact-score and knockout scoring, rules, champions views, comments, share actions, and downloadable table images.",
    proof: "Live Render deployment reviewed from public routes including table, predictions, rules, champions, admin entry, comments, sharing, and image download surfaces.",
    tags: ["React", "Render", "Tournament UX", "Scoring logic", "Admin flows", "Social sharing"],
    href: links.copaKahl,
    icon: Trophy,
  },
  {
    eyebrow: "ML experimentation",
    title: "Autoresearch RTX 3070 fork",
    type: "Public GitHub fork",
    summary:
      "Local adaptation of the autoresearch experiment setup for a Windows/RTX 3070 environment. The work is useful as evidence of AI-agent experimentation, Python setup, and research workflow curiosity.",
    proof: "Fork under Nahuel149 with local branch work.",
    tags: ["Python", "PyTorch", "LLM training", "Agent workflow", "RTX 3070"],
    href: links.autoresearch,
    icon: Cpu,
  },
  {
    eyebrow: "Remote web development",
    title: "Smart Wifi Access",
    type: "Contract work, live site",
    summary:
      "Web application work focused on performance, retention, PWA behavior, WebAssembly, server-side rendering, frontend optimization, and ecommerce usability.",
    proof: "Live product site plus resume-backed contract experience. No private client files published.",
    tags: ["PWA", "WebAssembly", "SSR", "Frontend optimization", "Ecommerce UX"],
    href: links.smartWifi,
    icon: Globe2,
  },
  {
    eyebrow: "Enterprise development",
    title: "IBM Java/Spring systems",
    type: "Professional experience",
    summary:
      "Java/Spring work for enterprise financial systems, including database tasks, JUnit/Mockito tests, functional testing, and end-to-end test work.",
    proof: "Resume-backed employment history. Client-specific internals are not public.",
    tags: ["Java", "Spring", "JUnit", "Mockito", "Financial systems"],
    href: links.linkedin,
    icon: BriefcaseBusiness,
  },
  {
    eyebrow: "Game localization QA",
    title: "Keywords Studios Tokyo",
    type: "Professional QA experience",
    summary:
      "Mobile and console localization QA with English-Spanish, Spanish-English, and Japanese source reference work. Publicly mentionable context includes PS5, iOS, Android, Jira bug reporting, regression checks, smoke tests, and build tracking.",
    proof: "NDA-safe role summary and fictional bug-report sample.",
    tags: ["LQA", "Jira", "PS5", "iOS", "Android", "Regression testing"],
    href: links.linkedin,
    icon: Gamepad2,
  },
  {
    eyebrow: "Ecommerce operator",
    title: "Electronic Commerce NB",
    type: "Self-employed business",
    summary:
      "Ran a digital-products ecommerce business with online marketing across social channels. This supports product sense, customer communication, inventory/sales thinking, and small-business operations.",
    proof: "Timeline and resume-backed self-employment history.",
    tags: ["Ecommerce", "Digital products", "Marketing", "Customer support", "Operations"],
    href: links.linkedin,
    icon: ShoppingCart,
  },
  {
    eyebrow: "Writing and QA samples",
    title: "Public-safe proof pack",
    type: "Self-created samples",
    summary:
      "NDA-safe samples for bug reports, source-backed research summaries, AI-draft cleanup, and Kyoto local-area article writing. These are samples, not client deliverables.",
    proof: "Local Markdown samples and public-safe portfolio notes.",
    tags: ["Bug reports", "Research summaries", "Japanese writing", "Editing", "Source checks"],
    href: links.github,
    icon: PenTool,
  },
];

const stack = [
  ["Frontend", "React", "TypeScript", "Vite", "Next.js", "Tailwind", "Material UI"],
  ["Backend", "Python", "FastAPI", "Java", "Spring", "REST APIs", "Webhooks"],
  ["Data", "MongoDB", "MySQL", "ETL scripts", "Analytics models", "Embedding collections"],
  ["Testing", "Playwright", "Vitest", "Testing Library", "pytest", "JUnit", "Mockito"],
  ["Ops", "Docker", "AWS", "EKS", "Kubernetes", "Health checks", "GitHub workflows"],
  ["Workflow", "Jira", "Slack", "Docs", "Remote updates", "Stakeholder notes", "Readable commits"],
];

const timeline = [
  {
    period: "2024 - 2026",
    title: "D-Unit full-stack SaaS project",
    text: "Built across frontend, backend, integrations, testing, security middleware, documentation, and deployment workflows.",
  },
  {
    period: "2023 - 2024",
    title: "Smart Wifi Access web development",
    text: "Shipped web application work around performance, PWA behavior, WebAssembly, server-side rendering, and usability.",
  },
  {
    period: "2022 - 2023",
    title: "Keywords Studios Tokyo localization QA",
    text: "Tested mobile and console games with Jira bug reports, regression checks, build tracking, and English-Spanish LQA.",
  },
  {
    period: "2019 - 2022",
    title: "IBM Java/Spring development",
    text: "Implemented enterprise software features, database tasks, unit tests, and functional/end-to-end tests for financial systems.",
  },
];

const qaFacts = [
  "Spanish and English localization QA, with Japanese source reference when needed.",
  "Publicly mentionable titles include Dead Space, Sword Art Online Variant Showdown, Exoprimal, and Street Fighter 6.",
  "Reported localization, truncation, UI overlap, placeholder, terminology, crash/log, and gameplay clarity issues.",
  "Used reproducible steps, actual/expected results, evidence, build/platform/language details, and regression notes.",
];

const caseStudyDetails = [
  {
    title: "Integration reliability",
    text: "Debugged Meta/OAuth connection states, token behavior, reconnect flows, manual sync behavior, API response handling, and entitlement mismatches.",
  },
  {
    title: "AI and reporting flow",
    text: "Built AI chat behavior around conversation history, context refresh, feedback, MongoDB-backed retrieval, report flows, and human review needs.",
  },
  {
    title: "Security and operations",
    text: "Worked with CSRF checks, security headers, gateway middleware, rate-limit records, threat alerts, cost tracking, TTL-indexed collections, and health checks.",
  },
  {
    title: "Testing discipline",
    text: "Used Vitest, Testing Library, Playwright, pytest, and regression checks around auth, billing, Meta integrations, automation, and AI chat context.",
  },
];

const operatingPrinciples = [
  "Ask early when expected behavior is unclear.",
  "Keep private client data out of public proof.",
  "Write bugs with enough detail for another person to reproduce them.",
  "Use AI as draft support, then verify sources and edit manually.",
  "Prefer small verified releases over impressive claims.",
];

const credentials = [
  {
    icon: GraduationCap,
    title: "Education",
    lines: ["University of Buenos Aires", "Bachelor's degree in Accounting / CPA track"],
  },
  {
    icon: BadgeCheck,
    title: "Certifications",
    lines: [
      "Cambridge English First Certificate Exam",
      "Certified Analytics & Data Specialist",
      "Certified Email Marketing Specialist",
      "Certified Ecommerce Marketing Specialist",
      "Certified Customer Acquisition Specialist",
    ],
  },
  {
    icon: Languages,
    title: "Languages",
    lines: ["Spanish native-level", "English fluent", "Japanese: simple conversation, stronger written work communication"],
  },
];

const japanese = {
  nav: ["実績", "プロジェクト", "技術", "経歴", "連絡先"],
  stats: ["D-Unitでのコミット", "デプロイ記録", "対応言語", "リモート対応時間"],
  hero: {
    eyebrow: "京都拠点のフルスタック開発者",
    lead: "英語・スペイン語・日本語の文書環境で、安定した開発が求められるチームに向けて、実用的なSaaS UI、バックエンドAPI、データワークフロー、QAを重視したプロダクト機能を開発しています。",
    explore: "実績を見る",
    available: "リモートおよび日本国内のプロダクト開発に対応可能です",
    signal: "フルスタック + QA + リサーチ",
  },
  intro: {
    eyebrow: "仕事のスタイル",
    title: "開発者の規律と、テスターの視点。",
  },
  focus: [
    ["フルスタックのプロダクト開発", "React、TypeScript、FastAPI、Java/Spring、ダッシュボード、API、認証、課金、ユーザー向け機能。"],
    ["QAを意識したデリバリー", "Playwright、Vitest、Testing Library、pytest、Jira形式のバグ報告、リグレッション確認、再現手順の整理。"],
    ["データと連携", "MongoDB、MySQL、Meta Graph API、OpenAI、MailerLite、MercadoPago、データ検証、レポート、根拠に基づくリサーチ。"],
  ],
  routes: [
    ["フルスタックSaaS", "まずはD-Unit", "React、FastAPI、外部連携、認証、課金、デプロイ、本番に近いデバッグの実績です。"],
    ["QA / テスト", "QAの対応範囲", "バグ報告、リグレッション、ローカライズQA、Playwright、pytest、開発者が再現できる手順です。"],
    ["データ / AIワークフロー", "ScoutBoardを開く", "情報源の管理、検証ルール、レポートフロー、サッカー分析、公開可能なTypeScriptコードです。"],
    ["ライティング / リサーチ", "サンプルを見る", "根拠に基づく要約、AI下書きの編集、読みやすい日本語サンプル、納品前の確認です。"],
  ],
  work: { eyebrow: "代表的な実績", title: "公開できる、信頼につながる仕事の記録。" },
  projects: [
    ["主なケーススタディ", "フルスタックSaaS開発者", "ダッシュボード、Meta連携、AI支援インサイト、マーケティング自動化、サブスクリプション課金、セキュリティミドルウェア、デプロイを備えたデジタル事業向け分析SaaSです。", "公開プロダクトを見る"],
    ["公開可能なコード実績", "サッカーのリサーチ・データQAポートフォリオアプリ", "サッカーのサンプルデータを検証、分析画面、レポート用の証跡に変換する自作アプリです。非公開のクライアント資料は使っていません。", "リポジトリを開く"],
    ["公開中のプロダクトデザイン", "ワールドカップ2026予想アプリ", "順位表、予想フロー、ルール、優勝者ビュー、管理者の結果入力、コメント、共有、グループ用の画像出力を備えた公開中のプロデアプリです。", "アプリを開く"],
    ["QA・ライティング実績", "ローカライズQA、ソース要約、リライト", "ゲームQA、技術リサーチ、AI下書きの編集、クライアント向けドキュメントに活用できる、再利用可能な公開サンプルです。", "GitHubプロフィールを見る"],
  ],
  atlas: { eyebrow: "プロジェクト一覧", title: "公開して話せる、より幅広い仕事。", reference: "参照" },
  atlasProjects: [
    ["フルスタックSaaS", "非公開コードベース・公開プロダクトページ", "デジタル事業者向け分析SaaS。ダッシュボード、FastAPIサービス、Meta連携、AIチャット、課金、セキュリティミドルウェア、テスト、Docker、AWS/EKSデプロイに取り組みました。", "公開プロダクトページ、非公開Git履歴、設計メモ、177件のコミット、94件のデプロイ記録。"],
    ["公開ポートフォリオアプリ", "公開可能なコードリポジトリ", "ソースポリシー、検証ルール、分析ページ、レポートプレビュー、ワークフロー文書を備えたサッカーのリサーチ・データQAアプリです。", "Next.jsアプリ、テスト、ビルドスクリプト、サンプルデータ、公開可能なレポート、ソース管理フロー。"],
    ["ライブスポーツプロダクト", "Renderにデプロイ済み", "友人やグループ向けのワールドカップ2026予想ゲーム。参加者の順位表、スコア・ノックアウト採点、ルール、優勝者ビュー、コメント、共有、テーブル画像のダウンロードを提供します。", "順位表、予想、ルール、優勝者、管理画面、コメント、共有、画像ダウンロードの公開画面を確認済みです。"],
    ["ML実験", "公開GitHubフォーク", "Windows/RTX 3070環境向けにautoresearchの実験セットアップをローカル適応したものです。AIエージェント実験、Python環境構築、リサーチワークフローへの関心を示す実績です。", "Nahuel149配下のフォークとローカルブランチ作業。"],
    ["リモートWeb開発", "契約業務・公開サイト", "パフォーマンス、PWA、WebAssembly、サーバーサイドレンダリング、フロントエンド最適化、ECの使いやすさに重点を置いたWebアプリケーション開発です。", "公開プロダクトサイトと職務経歴に基づく契約業務。非公開のクライアントファイルは公開していません。"],
    ["エンタープライズ開発", "職務経験", "エンタープライズ金融システム向けのJava/Spring開発。データベース作業、JUnit/Mockitoテスト、機能テスト、E2Eテストを含みます。", "職務経歴に基づく経験です。顧客固有の内部情報は公開していません。"],
    ["ゲームローカライズQA", "プロフェッショナルQA経験", "英日西を扱うモバイル・コンソールのローカライズQA。PS5、iOS、Android、Jiraバグ報告、リグレッション、スモークテスト、ビルド管理を含む公開可能な経験です。", "NDAに配慮した職務概要と架空のバグ報告サンプル。"],
    ["EC運営", "個人事業", "SNSを使ったオンラインマーケティングとデジタル商品ECを運営しました。プロダクト感覚、顧客対応、在庫・売上の考え方、小規模事業の運営経験につながっています。", "タイムラインと職務経歴に基づく個人事業の記録。"],
    ["ライティング・QAサンプル", "自作サンプル", "NDAに配慮したバグ報告、根拠に基づくリサーチ要約、AI下書きの編集、京都の地域記事ライティングのサンプルです。クライアント納品物ではありません。", "ローカルMarkdownのサンプルと公開可能なポートフォリオノート。"],
  ],
  caseStudy: {
    eyebrow: "ケーススタディ概要",
    title: "D-Unitで、プロダクト分析、AI支援、課金、運用をつなげました。",
    text: "Reactダッシュボード、FastAPIサービス、MongoDB/MySQLのデータフロー、MetaとMercadoPago連携、AI/RAGチャット、マーケティング自動化、ルート制御、ヘルスチェック、テストカバレッジに取り組みました。",
    cta: "D-Unitを開く",
    notes: "ビルドノート",
  },
  caseDetails: [
    ["連携の信頼性", "Meta/OAuthの接続状態、トークンの挙動、再接続フロー、手動同期、APIレスポンス処理、権限不整合のデバッグを行いました。"],
    ["AIとレポートのフロー", "会話履歴、コンテキスト更新、フィードバック、MongoDBを使った検索、レポートフロー、人によるレビューを考慮したAIチャットを構築しました。"],
    ["セキュリティと運用", "CSRFチェック、セキュリティヘッダー、ゲートウェイミドルウェア、レート制限記録、脅威アラート、コスト追跡、TTLインデックス、ヘルスチェックを扱いました。"],
    ["テストの規律", "認証、課金、Meta連携、自動化、AIチャットのコンテキストを対象に、Vitest、Testing Library、Playwright、pytest、リグレッション確認を使いました。"],
  ],
  qa: {
    eyebrow: "QAの対応範囲",
    title: "ゲームテストで、開発者が実際に使えるバグ報告の書き方を学びました。",
    text: "QAの経験は開発と並んでいます。問題が起きたときは、ユーザー状態、ビルド番号、ロケール、プラットフォーム、ログ、期待動作、リグレッションリスクを考えます。",
    facts: [
      "スペイン語・英語のローカライズQA。必要に応じて日本語ソースも参照します。",
      "公開可能な担当タイトルにはDead Space、Sword Art Online Variant Showdown、Exoprimal、Street Fighter 6があります。",
      "ローカライズ、文字切れ、UI重なり、プレースホルダー、用語、クラッシュ/ログ、ゲームプレイの分かりにくさを報告しました。",
      "再現手順、実際の結果と期待結果、証跡、ビルド/プラットフォーム/言語、リグレッションメモを含めています。",
    ],
  },
  principles: {
    eyebrow: "仕事の原則",
    title: "信頼しやすい仕事にするために意識していること。",
    items: ["期待する動作が曖昧なときは早めに確認する。", "非公開のクライアントデータを公開実績に含めない。", "他の人が再現できるだけの情報をバグ報告に入れる。", "AIは下書き支援として使い、情報源の確認と手動編集を行う。", "大きな主張より、小さく検証したリリースを優先する。"],
  },
  stack: { eyebrow: "技術スタック", title: "実際のプロダクトフローにつなげられるツール。", groups: ["フロントエンド", "バックエンド", "データ", "テスト", "運用", "ワークフロー"] },
  credentials: {
    eyebrow: "バックグラウンド",
    title: "コード以外の経験も大切です。",
    items: [
      ["学歴", ["ブエノスアイレス大学", "会計学 学士課程（CPAコース）"]],
      ["認定資格", ["ケンブリッジ英語検定 First Certificate", "認定アナリティクス・データスペシャリスト", "認定メールマーケティングスペシャリスト", "認定ECマーケティングスペシャリスト", "認定カスタマーアクイジションスペシャリスト"]],
      ["言語", ["スペイン語：ネイティブレベル", "英語：流暢", "日本語：簡単な会話、業務文書でのコミュニケーションに対応"]],
    ],
  },
  timeline: {
    eyebrow: "経験の流れ",
    title: "ソフトウェア、QA、プロダクト支援を複数の視点から。",
    items: [
      ["D-Unit フルスタックSaaSプロジェクト", "フロントエンド、バックエンド、連携、テスト、セキュリティミドルウェア、ドキュメント、デプロイのワークフローに取り組みました。"],
      ["Smart Wifi Access Web開発", "パフォーマンス、PWA、WebAssembly、サーバーサイドレンダリング、使いやすさに関するWebアプリケーション開発を提供しました。"],
      ["Keywords Studios Tokyo ローカライズQA", "Jiraバグ報告、リグレッション、ビルド管理、英西ローカライズQAでモバイル・コンソールゲームをテストしました。"],
      ["IBM Java/Spring開発", "金融システム向けに、エンタープライズ機能、データベース作業、ユニットテスト、機能/E2Eテストを実装しました。"],
    ],
  },
  proof: [
    ["リモートコミュニケーション", "分かりやすい文章での進捗共有、早めの質問、ドキュメント、GitHubワークフロー、関係者向けの要約。"],
    ["根拠に基づくライティング", "技術リサーチの要約、リライト・校正サンプル、人によるレビュー工程を含むレポート下書き。"],
    ["AIを慎重に活用", "AI支援は下書きとして扱い、最終成果物の前に情報源の確認、手動編集、納品ルールの確認を行います。"],
    ["多言語対応", "英語・スペイン語は流暢、日本語は仕様書、チケット、指示など業務文書でのコミュニケーションに対応しています。"],
  ],
  contact: {
    eyebrow: "連絡先",
    title: "実装と検証の両方が必要なプロダクトチームへ。",
    text: "フルスタック開発、バックエンド寄りのプロダクト開発、QA/デバッグ支援、データ量の多いダッシュボード、技術リサーチ、公開可能なポートフォリオ作成を得意としています。",
    email: "メール",
  },
  accessibility: { nav: "主要ナビゲーション", home: "Nahuel Balsas ホーム", language: "言語を選択", signal: "現在の仕事の概要", stats: "ポートフォリオのハイライト", routes: "実績ナビゲーター", routeTitle: "役割に合う実績を選んでください。", caseNotes: "D-Unitのビルドノート", caseDetails: "D-Unit ケーススタディ詳細", proof: "実績ポイント" },
};

const spanish = {
  nav: ["Proyectos", "Atlas", "Stack", "Experiencia", "Contacto"],
  stats: ["commits registrados en D-Unit", "registros de despliegue", "idiomas de trabajo", "horario listo para remoto"],
  hero: {
    eyebrow: "desarrollador full-stack basado en Kioto",
    lead: "Construyo interfaces SaaS prácticas, APIs de backend, flujos de datos y funcionalidades de producto con foco en QA para equipos que necesitan ejecución confiable en contextos de inglés, español y japonés escrito.",
    explore: "Ver proyectos",
    available: "Disponible para trabajo de producto remoto y en Japón",
    signal: "Full-stack + QA + investigación",
  },
  intro: { eyebrow: "Perfil de trabajo", title: "Disciplina de desarrollador con mirada de tester." },
  focus: [
    ["Productos full-stack", "React, TypeScript, FastAPI, Java/Spring, dashboards, APIs, autenticación, pagos y funcionalidades orientadas al producto."],
    ["Entrega con mentalidad de QA", "Playwright, Vitest, Testing Library, pytest, reportes de bugs estilo Jira, controles de regresión y pasos claros para reproducir problemas."],
    ["Datos e integraciones", "MongoDB, MySQL, Meta Graph API, OpenAI, MailerLite, MercadoPago, validaciones de datos, reportes e investigación respaldada por fuentes."],
  ],
  routes: [
    ["SaaS full-stack", "Empezar por D-Unit", "La mejor señal para React, FastAPI, integraciones, autenticación, pagos, despliegue y debugging de producto."],
    ["QA / testing", "Ver el alcance de QA", "La mejor señal para reportes de bugs, regresión, QA de localización, Playwright, pytest y pasos de reproducción listos para desarrollo."],
    ["Datos / flujos de IA", "Abrir ScoutBoard", "La mejor señal para seguimiento de fuentes, reglas de validación, flujos de reporte, analítica de fútbol y código TypeScript público."],
    ["Redacción / investigación", "Ver muestras", "La mejor señal para resúmenes con fuentes, edición de borradores de IA, muestras en japonés y controles de entrega cuidadosos."],
  ],
  work: { eyebrow: "Trabajo seleccionado", title: "Señales de portfolio que puedo mostrar con seguridad." },
  projects: [
    ["Caso de estudio principal", "Desarrollador SaaS full-stack", "Plataforma SaaS de analítica para negocios digitales, con dashboards, integraciones con Meta, insights asistidos por IA, automatización de marketing, facturación por suscripción, middleware de seguridad y despliegues.", "Ver producto público"],
    ["Prueba de código público", "App de portfolio para investigación de fútbol y QA de datos", "Aplicación propia que transforma datos de ejemplo de fútbol en validaciones, pantallas analíticas y evidencia para reportes sin usar material privado de clientes.", "Abrir repositorio"],
    ["Diseño de producto en vivo", "App de pronósticos del Mundial 2026", "Aplicación de prode desplegada con tablas de posiciones, flujos de pronósticos, reglas, vista de campeones, carga de resultados por administración, comentarios, compartir y exportación de imágenes.", "Abrir app"],
    ["Prueba de QA y redacción", "QA de localización, resúmenes de fuentes y edición", "Evidencia reutilizable de QA de juegos, investigación técnica, limpieza de borradores de IA y documentación para clientes basada en ejemplos seguros para publicar.", "Ver perfil de GitHub"],
  ],
  atlas: { eyebrow: "Atlas de proyectos", title: "Más del trabajo sobre el que puedo hablar públicamente.", reference: "Referencia" },
  atlasProjects: [
    ["SaaS full-stack", "Código privado, página pública del producto", "SaaS de analítica para negocios digitales. Trabajé en dashboards, servicios FastAPI, integraciones con Meta, chat con IA, pagos, middleware de seguridad, pruebas, Docker y despliegues en AWS/EKS.", "Página pública, historial privado de GitHub, notas de arquitectura, 177 commits registrados y 94 registros de despliegue."],
    ["App pública de portfolio", "Repositorio de código seguro para publicar", "App de investigación de fútbol y QA de datos con políticas de fuentes, reglas de validación, páginas de analítica, vistas previas de reportes y documentación de flujo de trabajo.", "Aplicación Next.js, pruebas, scripts de build, datos de ejemplo, reportes públicos y flujo de seguimiento de fuentes."],
    ["Producto deportivo en vivo", "App desplegada en Render", "Juego de pronósticos del Mundial 2026 para amigos o grupos, con posiciones de participantes, puntuación de marcadores y eliminatorias, reglas, vista de campeones, comentarios, compartir e imágenes descargables.", "Despliegue de Render revisado en rutas públicas de tabla, pronósticos, reglas, campeones, administración, comentarios, compartir y descarga de imágenes."],
    ["Experimentación de ML", "Fork público de GitHub", "Adaptación local de autoresearch para un entorno Windows/RTX 3070. Sirve como evidencia de experimentación con agentes de IA, configuración de Python y curiosidad por flujos de investigación.", "Fork bajo Nahuel149 con trabajo de ramas locales."],
    ["Desarrollo web remoto", "Trabajo contratado, sitio en vivo", "Trabajo de aplicación web enfocado en rendimiento, comportamiento PWA, WebAssembly, renderizado del lado del servidor, optimización de frontend y usabilidad de ecommerce.", "Sitio de producto en vivo y experiencia de contrato respaldada por CV. No se publican archivos privados de clientes."],
    ["Desarrollo empresarial", "Experiencia profesional", "Trabajo con Java/Spring para sistemas financieros empresariales, incluyendo tareas de base de datos, pruebas con JUnit/Mockito, pruebas funcionales y end-to-end.", "Experiencia laboral respaldada por CV. Los detalles específicos de clientes no son públicos."],
    ["QA de localización de juegos", "Experiencia profesional de QA", "QA de localización para juegos móviles y de consola con inglés-español, español-inglés y referencia de fuentes japonesas. Incluye PS5, iOS, Android, reportes Jira, regresión, smoke tests y seguimiento de builds.", "Resumen del rol seguro para NDA y muestra ficticia de reporte de bug."],
    ["Operador de ecommerce", "Negocio independiente", "Gestioné un negocio de ecommerce de productos digitales con marketing online en redes sociales. Esto aporta criterio de producto, comunicación con clientes, ventas e inventario, y operación de pequeños negocios.", "Cronología y experiencia independiente respaldadas por CV."],
    ["Muestras de redacción y QA", "Muestras propias", "Muestras seguras para NDA de reportes de bugs, resúmenes de investigación con fuentes, limpieza de borradores de IA y artículos locales de Kioto. Son muestras, no entregas de clientes.", "Muestras Markdown locales y notas de portfolio seguras para publicar."],
  ],
  caseStudy: {
    eyebrow: "Resumen del caso de estudio",
    title: "D-Unit conectó analítica de producto, asistencia de IA, facturación y operaciones.",
    text: "Mi trabajo abarcó dashboards en React, servicios FastAPI, flujos de datos MongoDB/MySQL, integraciones de Meta y MercadoPago, chat IA/RAG, automatización de marketing, control de rutas, health checks y cobertura de pruebas.",
    cta: "Abrir D-Unit",
    notes: "notas de build",
  },
  caseDetails: [
    ["Confiabilidad de integraciones", "Depuré estados de conexión Meta/OAuth, comportamiento de tokens, flujos de reconexión, sincronización manual, manejo de respuestas de API y desajustes de permisos."],
    ["Flujo de IA y reportes", "Construí el comportamiento de chat IA alrededor de historial de conversaciones, actualización de contexto, feedback, recuperación respaldada por MongoDB, flujos de reportes y revisión humana."],
    ["Seguridad y operaciones", "Trabajé con verificaciones CSRF, headers de seguridad, middleware de gateway, registros de rate limiting, alertas de amenazas, seguimiento de costos, colecciones con índices TTL y health checks."],
    ["Disciplina de pruebas", "Usé Vitest, Testing Library, Playwright, pytest y controles de regresión en autenticación, pagos, integraciones Meta, automatización y contexto de chat IA."],
  ],
  qa: {
    eyebrow: "Alcance de QA",
    title: "El testing de juegos me enseñó a escribir bugs que desarrollo puede usar de verdad.",
    text: "Mi experiencia de QA acompaña mi trabajo de desarrollo. Cuando algo falla, pienso en el estado de usuario, número de build, locale, plataforma, logs, comportamiento esperado y riesgo de regresión.",
    facts: [
      "QA de localización en español e inglés, con referencia de fuente japonesa cuando hace falta.",
      "Los títulos que puedo mencionar incluyen Dead Space, Sword Art Online Variant Showdown, Exoprimal y Street Fighter 6.",
      "Reporté problemas de localización, truncado, superposición de UI, placeholders, terminología, crashes/logs y claridad de gameplay.",
      "Usé pasos reproducibles, resultados reales y esperados, evidencia, detalles de build/plataforma/idioma y notas de regresión.",
    ],
  },
  principles: {
    eyebrow: "Principios de trabajo",
    title: "Cómo intento que el trabajo sea más fácil de confiar.",
    items: ["Preguntar temprano cuando el comportamiento esperado no está claro.", "Mantener datos privados de clientes fuera de la evidencia pública.", "Escribir bugs con suficiente detalle para que otra persona pueda reproducirlos.", "Usar IA como apoyo para borradores y luego verificar fuentes y editar manualmente.", "Preferir lanzamientos pequeños y verificados antes que afirmaciones grandes."],
  },
  stack: { eyebrow: "Matriz de stack", title: "Herramientas que puedo conectar en un flujo real de producto.", groups: ["Frontend", "Backend", "Datos", "Testing", "Operaciones", "Flujo de trabajo"] },
  credentials: {
    eyebrow: "Trayectoria",
    title: "Las partes fuera del código también importan.",
    items: [
      ["Educación", ["Universidad de Buenos Aires", "Licenciatura en Contabilidad / orientación CPA"]],
      ["Certificaciones", ["Cambridge English First Certificate Exam", "Especialista certificado en Analítica y Datos", "Especialista certificado en Email Marketing", "Especialista certificado en Ecommerce Marketing", "Especialista certificado en Adquisición de Clientes"]],
      ["Idiomas", ["Español nativo", "Inglés fluido", "Japonés: conversación simple y comunicación laboral escrita más sólida"]],
    ],
  },
  timeline: {
    eyebrow: "Recorrido profesional",
    title: "Software, QA y soporte de producto desde múltiples ángulos.",
    items: [
      ["Proyecto SaaS full-stack D-Unit", "Construí en frontend, backend, integraciones, pruebas, middleware de seguridad, documentación y flujos de despliegue."],
      ["Desarrollo web Smart Wifi Access", "Entregué trabajo de aplicación web sobre rendimiento, PWA, WebAssembly, renderizado del lado del servidor y usabilidad."],
      ["QA de localización en Keywords Studios Tokyo", "Probé juegos móviles y de consola con reportes Jira, regresión, seguimiento de builds y LQA inglés-español."],
      ["Desarrollo Java/Spring en IBM", "Implementé funcionalidades empresariales, tareas de base de datos, pruebas unitarias y pruebas funcionales/end-to-end para sistemas financieros."],
    ],
  },
  proof: [
    ["Comunicación remota", "Actualizaciones escritas claras, preguntas tempranas, documentación, flujo de GitHub y resúmenes listos para stakeholders."],
    ["Redacción con fuentes", "Resúmenes de investigación técnica, muestras de reescritura/corrección y borradores de reportes con puntos de revisión humana."],
    ["IA usada con cuidado", "La asistencia de IA se trata como apoyo de borrador, con verificación de fuentes, edición manual y reglas de entrega antes del resultado final."],
    ["Alcance multilingüe", "Inglés y español fluidos, más comunicación laboral escrita en japonés para especificaciones, tickets e instrucciones."],
  ],
  contact: {
    eyebrow: "Contacto",
    title: "Para equipos de producto que necesitan implementación y verificación.",
    text: "Mi mejor encaje: desarrollo full-stack, trabajo de producto orientado a backend, soporte de QA/debugging, dashboards con muchos datos, investigación técnica y trabajo de portfolio seguro para publicar.",
    email: "Email",
  },
  accessibility: { nav: "Navegación principal", home: "Inicio de Nahuel Balsas", language: "Elegir idioma", signal: "Señal actual de trabajo", stats: "Destacados del portfolio", routes: "Navegador de evidencia", routeTitle: "Elegí el recorrido que coincida con el rol.", caseNotes: "Notas de build de D-Unit", caseDetails: "Detalles del caso de estudio de D-Unit", proof: "Puntos de evidencia" },
};

function App() {
  const [language, setLanguage] = useState(() => window.localStorage.getItem("portfolio-language") || "en");
  const languageContent = language === "ja" ? japanese : language === "es" ? spanish : null;

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLocale = (nextLanguage) => {
    setLanguage(nextLanguage);
  };

  const localizedFocus = focus.map((item, index) =>
    languageContent ? { ...item, title: languageContent.focus[index][0], text: languageContent.focus[index][1] } : item,
  );
  const localizedRoutes = proofRoutes.map((item, index) =>
    languageContent
      ? { ...item, label: languageContent.routes[index][0], title: languageContent.routes[index][1], text: languageContent.routes[index][2] }
      : item,
  );
  const localizedProjects = projects.map((item, index) =>
    languageContent
      ? { ...item, eyebrow: languageContent.projects[index][0], role: languageContent.projects[index][1], summary: languageContent.projects[index][2], cta: languageContent.projects[index][3] }
      : item,
  );
  const localizedAtlas = projectAtlas.map((item, index) =>
    languageContent
      ? { ...item, eyebrow: languageContent.atlasProjects[index][0], type: languageContent.atlasProjects[index][1], summary: languageContent.atlasProjects[index][2], proof: languageContent.atlasProjects[index][3] }
      : item,
  );
  const localizedCaseDetails = caseStudyDetails.map((item, index) =>
    languageContent ? { ...item, title: languageContent.caseDetails[index][0], text: languageContent.caseDetails[index][1] } : item,
  );
  const localizedCredentials = credentials.map((item, index) =>
    languageContent ? { ...item, title: languageContent.credentials.items[index][0], lines: languageContent.credentials.items[index][1] } : item,
  );
  const localizedTimeline = timeline.map((item, index) =>
    languageContent ? { ...item, title: languageContent.timeline.items[index][0], text: languageContent.timeline.items[index][1] } : item,
  );

  return (
    <>
      <header className="siteHeader" aria-label={languageContent ? languageContent.accessibility.nav : "Primary navigation"}>
        <a className="brand" href="#top" aria-label={languageContent ? languageContent.accessibility.home : "Nahuel Balsas home"}>
          <span className="brandMark">NB</span>
          <span>Nahuel Balsas</span>
        </a>
        <nav>
          <a href="#work">{languageContent ? languageContent.nav[0] : "Work"}</a>
          <a href="#atlas">{languageContent ? languageContent.nav[1] : "Atlas"}</a>
          <a href="#stack">{languageContent ? languageContent.nav[2] : "Stack"}</a>
          <a href="#timeline">{languageContent ? languageContent.nav[3] : "Timeline"}</a>
          <a href="#contact">{languageContent ? languageContent.nav[4] : "Contact"}</a>
        </nav>
        <div className="languageSwitch" aria-label={languageContent ? languageContent.accessibility.language : "Choose language"}>
          <button type="button" className={language === "en" ? "isActive" : ""} aria-pressed={language === "en"} onClick={() => setLocale("en")}>EN</button>
          <button type="button" className={language === "es" ? "isActive" : ""} aria-pressed={language === "es"} onClick={() => setLocale("es")}>ES</button>
          <button type="button" className={language === "ja" ? "isActive" : ""} aria-pressed={language === "ja"} onClick={() => setLocale("ja")}>日本語</button>
        </div>
        <a className="iconButton" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <Github size={19} />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroGrid" aria-hidden="true" />
          <img className="heroPortrait" src="./nahuel-balsas.jpg" alt="" />
          <div className="heroCopy">
            <p className="eyebrow">{languageContent ? languageContent.hero.eyebrow : "Kyoto based full-stack developer"}</p>
            <h1 id="hero-title">Nahuel Balsas</h1>
            <p className="heroLead">
              {languageContent ? languageContent.hero.lead : "I build practical SaaS interfaces, backend APIs, data workflows, and QA-heavy product features for teams that need reliable execution across English, Spanish, and written Japanese contexts."}
            </p>
            <div className="heroActions" aria-label="Main links">
              <a className="primaryButton" href="#work">
                <span>{languageContent ? languageContent.hero.explore : "Explore work"}</span>
                <ArrowRight size={18} />
              </a>
              <a className="secondaryButton" href={links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="signalPanel" aria-label={languageContent ? languageContent.accessibility.signal : "Current work signal"}>
            <div>
              <span className="signalDot" />
              <span>{languageContent ? languageContent.hero.available : "Available for remote and Japan-based product work"}</span>
            </div>
            <strong>{languageContent ? languageContent.hero.signal : "Full-stack + QA + research"}</strong>
          </div>
        </section>

        <section className="statRail" aria-label={languageContent ? languageContent.accessibility.stats : "Portfolio highlights"}>
          {stats.map(([value, label], index) => (
            <article className="statTile" key={label}>
              <strong>{value}</strong>
              <span>{languageContent ? languageContent.stats[index] : label}</span>
            </article>
          ))}
        </section>

        <section className="sectionShell introShell" aria-labelledby="intro-title">
          <div className="sectionIntro">
            <p className="eyebrow">{languageContent ? languageContent.intro.eyebrow : "Working profile"}</p>
            <h2 id="intro-title">{languageContent ? languageContent.intro.title : "Developer discipline with a tester's eye."}</h2>
          </div>
          <div className="focusGrid">
            {localizedFocus.map((item) => {
              const Icon = item.icon;
              return (
                <article className="focusCard" key={item.title}>
                  <Icon size={24} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="routePanel" aria-labelledby="route-title">
          <div className="routeIntro">
            <Route size={24} aria-hidden="true" />
            <div>
              <p className="eyebrow">{languageContent ? languageContent.accessibility.routes : "Proof navigator"}</p>
              <h2 id="route-title">{languageContent ? languageContent.accessibility.routeTitle : "Pick the track that matches the role."}</h2>
            </div>
          </div>
          <div className="routeGrid">
            {localizedRoutes.map((route) => {
              const Icon = route.icon;
              return (
                <a className="routeCard" href={route.href} key={route.title}>
                  <span>{route.label}</span>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                </a>
              );
            })}
          </div>
        </section>

        <section className="sectionShell workShell" id="work" aria-labelledby="work-title">
          <div className="sectionIntro">
            <p className="eyebrow">{languageContent ? languageContent.work.eyebrow : "Selected work"}</p>
            <h2 id="work-title">{languageContent ? languageContent.work.title : "Portfolio signals that are safe to show."}</h2>
          </div>
          <div className="projectGrid">
            {localizedProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="projectCard" key={project.title}>
                  <div className="projectVisual" aria-hidden="true">
                    <Icon size={44} />
                    <span />
                    <span />
                  </div>
                  <div className="projectBody">
                    <p className="eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <strong>{project.role}</strong>
                    <p>{project.summary}</p>
                    <ul className="tagList" aria-label={`${project.title} technologies`}>
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <a className="textLink" href={project.href} target="_blank" rel="noreferrer">
                      <span>{project.cta}</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="sectionShell atlasShell" id="atlas" aria-labelledby="atlas-title">
          <div className="sectionIntro">
            <p className="eyebrow">{languageContent ? languageContent.atlas.eyebrow : "Project atlas"}</p>
            <h2 id="atlas-title">{languageContent ? languageContent.atlas.title : "More of the work I can safely talk about."}</h2>
          </div>
          <div className="atlasGrid">
            {localizedAtlas.map((project) => {
              const Icon = project.icon;
              return (
                <article className="atlasCard" key={project.title}>
                  <div className="atlasHead">
                    <Icon size={24} />
                    <div>
                      <p className="eyebrow">{project.eyebrow}</p>
                      <h3>{project.title}</h3>
                    </div>
                  </div>
                  <span className="projectType">{project.type}</span>
                  <p>{project.summary}</p>
                  <p className="proofLine">{project.proof}</p>
                  <ul className="tagList" aria-label={`${project.title} tags`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a className="textLink" href={project.href} target="_blank" rel="noreferrer">
                      <span>{languageContent ? languageContent.atlas.reference : "Reference"}</span>
                    <ExternalLink size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="caseBand" id="case-study" aria-labelledby="case-title">
          <div className="caseCopy">
            <p className="eyebrow">{languageContent ? languageContent.caseStudy.eyebrow : "Case study snapshot"}</p>
            <h2 id="case-title">{languageContent ? languageContent.caseStudy.title : "D-Unit connected product analytics, AI assistance, billing, and operations."}</h2>
            <p>
              {languageContent ? languageContent.caseStudy.text : "My work covered React dashboards, FastAPI services, MongoDB/MySQL data flows, Meta and MercadoPago integrations, AI/RAG chat behavior, marketing automation, route gating, health checks, and test coverage."}
            </p>
            <a className="primaryButton dark" href={links.dunit} target="_blank" rel="noreferrer">
              <Globe2 size={18} />
              <span>{languageContent ? languageContent.caseStudy.cta : "Open D-Unit"}</span>
            </a>
          </div>
          <div className="caseConsole" aria-label={languageContent ? languageContent.accessibility.caseNotes : "D-Unit build notes"}>
            <div><Terminal size={18} /> {languageContent ? languageContent.caseStudy.notes : "build notes"}</div>
            <pre>{`frontend: React + TypeScript + Vite
backend: FastAPI + Python
data: MongoDB + MySQL
testing: Vitest + Playwright + pytest
ops: Docker + AWS/EKS + health checks`}</pre>
          </div>
        </section>

        <section className="caseDetailShell" aria-label={languageContent ? languageContent.accessibility.caseDetails : "D-Unit case study details"}>
          {localizedCaseDetails.map((item) => (
            <article className="caseDetailCard" key={item.title}>
              <CheckCircle2 size={20} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="qaBand" id="qa-range" aria-labelledby="qa-title">
          <div>
            <p className="eyebrow">{languageContent ? languageContent.qa.eyebrow : "QA range"}</p>
            <h2 id="qa-title">{languageContent ? languageContent.qa.title : "Game testing taught me to write bugs developers can actually use."}</h2>
            <p>
              {languageContent ? languageContent.qa.text : "My QA background sits next to my development work. That matters: when something breaks, I think about user state, build number, locale, platform, logs, expected behavior, and regression risk."}
            </p>
          </div>
          <div className="qaList">
            {(languageContent ? languageContent.qa.facts : qaFacts).map((fact) => (
              <article key={fact}>
                <TestTubeDiagonal size={18} />
                <span>{fact}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="principlesBand" aria-labelledby="principles-title">
          <div>
            <p className="eyebrow">{languageContent ? languageContent.principles.eyebrow : "Operating principles"}</p>
            <h2 id="principles-title">{languageContent ? languageContent.principles.title : "How I try to make the work easier to trust."}</h2>
          </div>
          <ol>
            {(languageContent ? languageContent.principles.items : operatingPrinciples).map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ol>
        </section>

        <section className="sectionShell" id="stack" aria-labelledby="stack-title">
          <div className="sectionIntro">
            <p className="eyebrow">{languageContent ? languageContent.stack.eyebrow : "Stack matrix"}</p>
            <h2 id="stack-title">{languageContent ? languageContent.stack.title : "Tools I can connect into actual product flow."}</h2>
          </div>
          <div className="stackMatrix">
            {stack.map(([group, ...items], index) => (
              <article className="stackRow" key={group}>
                <h3>{languageContent ? languageContent.stack.groups[index] : group}</h3>
                <div>
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="sectionShell credentialsShell" aria-labelledby="credentials-title">
          <div className="sectionIntro">
            <p className="eyebrow">{languageContent ? languageContent.credentials.eyebrow : "Background"}</p>
            <h2 id="credentials-title">{languageContent ? languageContent.credentials.title : "The non-code pieces still matter."}</h2>
          </div>
          <div className="credentialGrid">
            {localizedCredentials.map((item) => {
              const Icon = item.icon;
              return (
                <article className="credentialCard" key={item.title}>
                  <Icon size={24} />
                  <h3>{item.title}</h3>
                  <ul>
                    {item.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="sectionShell timelineShell" id="timeline" aria-labelledby="timeline-title">
          <div className="sectionIntro">
            <p className="eyebrow">{languageContent ? languageContent.timeline.eyebrow : "Experience path"}</p>
            <h2 id="timeline-title">{languageContent ? languageContent.timeline.title : "Software, QA, and product support from multiple angles."}</h2>
          </div>
          <div className="timeline">
            {localizedTimeline.map((item) => (
              <article className="timelineItem" key={item.title}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="proofBand" id="proof-points" aria-label={languageContent ? languageContent.accessibility.proof : "Proof points"}>
          <article>
            <BadgeCheck size={24} />
            <h3>{languageContent ? languageContent.proof[0][0] : "Remote communication"}</h3>
            <p>{languageContent ? languageContent.proof[0][1] : "Clear written updates, early questions, documentation, GitHub workflow, and stakeholder-ready summaries."}</p>
          </article>
          <article>
            <FileCheck2 size={24} />
            <h3>{languageContent ? languageContent.proof[1][0] : "Source-backed writing"}</h3>
            <p>{languageContent ? languageContent.proof[1][1] : "Technical research summaries, rewrite/proofreading samples, and report drafts with human review checkpoints."}</p>
          </article>
          <article>
            <Bot size={24} />
            <h3>{languageContent ? languageContent.proof[2][0] : "AI used carefully"}</h3>
            <p>{languageContent ? languageContent.proof[2][1] : "AI assistance is treated as draft support, with source checks, manual editing, and delivery rules before final output."}</p>
          </article>
          <article>
            <Layers3 size={24} />
            <h3>{languageContent ? languageContent.proof[3][0] : "Multilingual range"}</h3>
            <p>{languageContent ? languageContent.proof[3][1] : "Fluent English and Spanish, plus stronger written Japanese work communication for specs, tickets, and instructions."}</p>
          </article>
        </section>

        <section className="contactSection" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">{languageContent ? languageContent.contact.eyebrow : "Contact"}</p>
            <h2 id="contact-title">{languageContent ? languageContent.contact.title : "For product teams that need implementation plus verification."}</h2>
            <p>
              {languageContent ? languageContent.contact.text : "Best fit: full-stack development, backend-oriented product work, QA/debugging support, data-heavy dashboards, technical research, and public-safe portfolio work."}
            </p>
          </div>
          <div className="contactActions">
            <a className="primaryButton" href={links.email}>
              <Mail size={18} />
                <span>{languageContent ? languageContent.contact.email : "Email"}</span>
            </a>
            <a className="secondaryButton light" href={links.github} target="_blank" rel="noreferrer">
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a className="secondaryButton light" href={links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
