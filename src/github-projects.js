// Reviewed against public GitHub metadata and repository documentation on 2026-10-01.
export const githubProjects = [
  {
    title: "El GOAT",
    repo: "elgoat",
    demo: "https://elgoat-phi.vercel.app",
    tags: ["Next.js", "TypeScript", "Mercado Pago"],
    copy: {
      en: ["Football community", "Bidding and voting for football legends, with rankings and Mercado Pago integration."],
      es: ["Comunidad de fútbol", "Pujas y votos por leyendas del fútbol, con rankings e integración de Mercado Pago."],
      ja: ["サッカーコミュニティ", "サッカーのレジェンドを対象にした入札・投票アプリ。ランキングとMercado Pago連携を備えています。"],
    },
  },
  {
    title: "Copa Pavón",
    repo: "copa-pavon",
    demo: "https://copa-pavon.vercel.app",
    tags: ["TypeScript", "MongoDB", "World Cup 2026"],
    copy: {
      en: ["Tournament predictions", "World Cup predictions with participant standings, match result management, knockout rounds, and CSV exports."],
      es: ["Prode del Mundial", "Pronósticos del Mundial con posiciones de participantes, carga de resultados, eliminatorias y exportación CSV."],
      ja: ["大会予想アプリ", "ワールドカップの予想、参加者の順位表、試合結果の管理、決勝トーナメント、CSV出力に対応しています。"],
    },
  },
  {
    title: "Eternum",
    repo: "Eternum",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    copy: {
      en: ["Backend API", "REST API for a social platform with user accounts, avatars, voice profiles, notifications, and file uploads."],
      es: ["API de backend", "API REST para una plataforma social con cuentas, avatares, perfiles de voz, notificaciones y carga de archivos."],
      ja: ["バックエンドAPI", "アカウント、アバター、音声プロフィール、通知、ファイルアップロードを扱うソーシャルプラットフォーム向けREST APIです。"],
    },
  },
  {
    title: "NubeFlash",
    repo: "NubeFlash",
    tags: ["PHP", "MySQL", "Logistics"],
    copy: {
      en: ["Shipping operations", "Shipping logistics app covering customers, order tracking, shipping rates, role-based access, audit logs, and reporting."],
      es: ["Operaciones de envíos", "Aplicación de logística con clientes, seguimiento de pedidos, tarifas, acceso por roles, registros de auditoría y reportes."],
      ja: ["配送業務", "顧客管理、注文追跡、送料計算、ロール別アクセス、監査ログ、レポートに対応する配送管理アプリです。"],
    },
  },
  {
    title: "FUTBIN / EA FC 24",
    repo: "FutBinDataEAFC24",
    tags: ["Python", "pandas", "MySQL", "CSV"],
    copy: {
      en: ["Data collection", "Python scraper for EA FC 24 player statistics and market data, with CSV and MySQL output."],
      es: ["Recopilación de datos", "Scraper en Python de estadísticas de jugadores y datos de mercado de EA FC 24, con salida a CSV y MySQL."],
      ja: ["データ収集", "EA FC 24の選手統計と市場データを収集し、CSVとMySQLに保存するPythonスクリプトです。"],
    },
  },
  {
    title: "Finatech",
    repo: "Finatech",
    tags: ["Node.js", "Express", "MongoDB", "Testing"],
    copy: {
      en: ["Financial services", "Backend project using Node.js, Express, and MongoDB, with current-account and treasury unit tests and logistics end-to-end tests."],
      es: ["Servicios financieros", "Proyecto backend con Node.js, Express y MongoDB, con pruebas unitarias de cuenta corriente y tesorería, y pruebas end-to-end de logística."],
      ja: ["金融サービス", "Node.js、Express、MongoDBを使ったバックエンドプロジェクト。当座勘定・資金管理のユニットテストと物流のE2Eテストを含みます。"],
    },
  },
];

export function getGithubProjects(language, icon) {
  const locale = ["en", "es", "ja"].includes(language) ? language : "en";
  const labels = {
    en: ["Public GitHub repository", "Repository documentation and source code."],
    es: ["Repositorio público en GitHub", "Documentación y código del repositorio."],
    ja: ["公開GitHubリポジトリ", "リポジトリのドキュメントとソースコード。"],
  };
  return githubProjects.map((project) => ({
    title: project.title,
    eyebrow: project.copy[locale][0],
    summary: project.copy[locale][1],
    type: labels[locale][0],
    proof: labels[locale][1],
    tags: project.tags,
    href: `https://github.com/Nahuel149/${project.repo}`,
    demo: project.demo,
    icon,
  }));
}
