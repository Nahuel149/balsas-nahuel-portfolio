export const basePath = "/balsas-nahuel-portfolio/";
export const siteUrl = `https://nahuel149.github.io${basePath}`;
export const locales = ["en", "es", "ja"];

export function pagePath(language = "en", slug = "") {
  const prefix = language === "en" ? "" : `${language}/`;
  return `${basePath}${prefix}${slug ? `projects/${slug}/` : ""}`;
}

export const profileCopy = {
  en: {
    title: "Nahuel Balsas | Full-Stack Developer in Kyoto",
    description: "Nahuel Balsas, full-stack developer based in Kyoto. React, TypeScript, backend APIs and QA, with project case studies and public GitHub code.",
    lead: "Full-stack developer based in Kyoto. I build React interfaces, backend APIs and data workflows, with QA experience from enterprise software and game localization.",
    availability: "Based in Kyoto · Remote product development",
    role: "Full-stack development, with a QA background",
    cases: "Project case studies", read: "Read case study", back: "All projects", contact: "Discuss a role", roleLabel: "My role", evidence: "Project evidence", more: "Other case studies",
  },
  es: {
    title: "Nahuel Balsas | Desarrollador Full-Stack en Kioto",
    description: "Nahuel Balsas, desarrollador full-stack en Kioto. React, TypeScript, APIs de backend y QA, con casos de proyectos y código público en GitHub.",
    lead: "Desarrollador full-stack en Kioto. Construyo interfaces React, APIs de backend y flujos de datos, con experiencia en QA de software empresarial y localización de videojuegos.",
    availability: "En Kioto · Desarrollo de producto remoto",
    role: "Desarrollo full-stack con experiencia en QA",
    cases: "Casos de proyectos", read: "Leer caso", back: "Todos los proyectos", contact: "Conversar sobre un puesto", roleLabel: "Mi rol", evidence: "Evidencia del proyecto", more: "Otros casos",
  },
  ja: {
    title: "Nahuel Balsas | 京都のフルスタック開発者",
    description: "京都を拠点とするフルスタック開発者Nahuel Balsas。React、TypeScript、バックエンドAPI、QAの経験を、開発事例と公開GitHubコードで紹介します。",
    lead: "京都を拠点に、Reactの画面、バックエンドAPI、データ処理を開発しています。企業向けソフトウェア開発とゲームのローカライズQAの経験を生かし、動作確認まで取り組んでいます。",
    availability: "京都拠点 · リモートでのプロダクト開発",
    role: "QA経験を生かしたフルスタック開発",
    cases: "開発事例", read: "事例を読む", back: "プロジェクト一覧", contact: "仕事について相談する", roleLabel: "担当範囲", evidence: "確認できる資料", more: "ほかの開発事例",
  },
};
