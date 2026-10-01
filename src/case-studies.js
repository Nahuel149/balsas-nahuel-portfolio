export const caseStudies = [
  {
    slug: "d-unit", title: "D-Unit", tags: ["React", "TypeScript", "FastAPI", "MongoDB", "Integrations", "QA"],
    references: [{ label: "D-Unit", href: "https://d-unit.world" }],
    copy: {
      en: { role: "Full-stack SaaS developer", summary: "Connecting analytics dashboards, external services and subscription workflows in a SaaS product.", sections: [
        ["Product context", "D-Unit brings analytics, marketing integrations, AI-assisted reporting and billing into one product. Those features depend on authentication, account state and data staying consistent across services."],
        ["My contribution", "I worked on React dashboards, FastAPI services, MongoDB/MySQL data flows, Meta and MercadoPago integrations, AI chat behavior, route gating and health checks."],
        ["Implementation and verification", "My work included reconnect and token handling, entitlement mismatches, chat context and retrieval, security middleware, and regression checks using Vitest, Playwright and pytest."],
        ["What can be reviewed", "The source code is private. This case study describes my documented contribution without exposing client data. The public product URL returned an unavailable response on October 1, 2026; it is a reference, not a guaranteed live demo."],
      ] },
      es: { role: "Desarrollador SaaS full-stack", summary: "Dashboards de analítica, servicios externos y suscripciones conectados en un producto SaaS.", sections: [
        ["Contexto", "D-Unit reúne analítica, integraciones de marketing, reportes asistidos por IA y facturación. Estas funciones dependen de que la autenticación, el estado de las cuentas y los datos sean coherentes entre servicios."],
        ["Mi contribución", "Trabajé en dashboards React, servicios FastAPI, flujos MongoDB/MySQL, integraciones con Meta y MercadoPago, chat con IA, control de acceso a rutas y comprobaciones de salud."],
        ["Implementación y verificación", "El trabajo incluyó reconexión y manejo de tokens, diferencias en permisos de suscripción, contexto y recuperación de datos del chat, middleware de seguridad y regresión con Vitest, Playwright y pytest."],
        ["Material disponible", "El código es privado. Este caso describe mi contribución documentada sin publicar datos de clientes. La URL del producto respondió como no disponible el 1 de octubre de 2026; es una referencia, no una demo garantizada."],
      ] },
      ja: { role: "フルスタックSaaS開発者", summary: "分析画面、外部サービス、サブスクリプション処理をつなぐSaaS開発。", sections: [
        ["プロダクトの概要", "D-Unitは、分析、マーケティング連携、AIを使ったレポート、課金をまとめたプロダクトです。各機能では、認証、アカウントの状態、データの整合性が重要になります。"],
        ["担当した開発", "Reactのダッシュボード、FastAPIのサービス、MongoDB/MySQLのデータ処理、MetaとMercadoPagoの連携、AIチャット、ルートのアクセス制御、ヘルスチェックを担当しました。"],
        ["実装と動作確認", "再接続とトークン処理、契約に応じた権限の不整合、チャットの文脈と検索処理、セキュリティミドルウェアに取り組み、Vitest、Playwright、pytestでリグレッションを確認しました。"],
        ["公開できる範囲", "ソースコードは非公開です。顧客データを含めず、記録に基づいて担当範囲を紹介しています。公開URLは2026年10月1日の確認時点で利用できなかったため、常時使えるデモではなく参考リンクとして掲載しています。"],
      ] },
    },
  },
  {
    slug: "scoutboard-ai", title: "ScoutBoard AI", tags: ["Next.js", "TypeScript", "Vitest", "Data QA"],
    references: [{ label: "GitHub", href: "https://github.com/Nahuel149/scoutboard-ai" }],
    copy: {
      en: { role: "Independent portfolio project", summary: "A football research workspace built around source tracking, data checks and report previews.", sections: [
        ["Problem", "Research is difficult to review when source notes, validation checks and reports live in separate places. ScoutBoard uses football sample data to demonstrate a connected research workflow."],
        ["My contribution", "I created the portfolio app with analytics pages, source policies, validation rules and report previews. It uses public-safe sample data rather than private client deliverables."],
        ["Technical approach", "The project uses Next.js and TypeScript, with Vitest tests and documented build and reporting workflows. Source tracking and validation are part of the app, not just supporting notes."],
        ["Review the work", "The public repository provides code, sample data, tests and workflow documentation. These are inspectable artifacts; they are not evidence of production adoption or customer results."],
      ] },
      es: { role: "Proyecto independiente de portfolio", summary: "Un espacio de investigación de fútbol con seguimiento de fuentes, validación de datos y vistas previas de reportes.", sections: [
        ["Problema", "Revisar una investigación es difícil si las fuentes, los controles y los reportes están separados. ScoutBoard usa datos de fútbol de ejemplo para mostrar un flujo conectado."],
        ["Mi contribución", "Creé la aplicación con páginas de analítica, políticas de fuentes, reglas de validación y vistas previas de reportes. Usa datos seguros para publicar, no entregables privados de clientes."],
        ["Enfoque técnico", "El proyecto usa Next.js y TypeScript, pruebas Vitest y documentación de build y reportes. El seguimiento de fuentes y la validación forman parte de la aplicación."],
        ["Revisar el trabajo", "El repositorio público incluye código, datos de ejemplo, pruebas y documentación. Son materiales que se pueden revisar, no evidencia de adopción comercial o resultados de clientes."],
      ] },
      ja: { role: "自主制作のポートフォリオ", summary: "情報源の管理、データ検証、レポートの確認をまとめたサッカー調査アプリ。", sections: [
        ["課題", "情報源、検証結果、レポートが別々の場所にあると、調査内容を確認しにくくなります。ScoutBoardではサッカーのサンプルデータを使い、一連の作業をまとめています。"],
        ["担当した開発", "分析ページ、情報源の利用方針、検証ルール、レポートのプレビューを備えたアプリを自主制作しました。顧客の非公開資料ではなく、公開可能なサンプルデータを使用しています。"],
        ["技術的な構成", "Next.jsとTypeScriptを使用し、Vitestのテストとビルド・レポート作成手順を用意しています。情報源の管理と検証をアプリの機能として組み込みました。"],
        ["確認できる資料", "公開リポジトリでコード、サンプルデータ、テスト、作業手順を確認できます。商用利用の実績や顧客の成果を示すものではありません。"],
      ] },
    },
  },
  {
    slug: "copa-kahl", title: "Copa Kahl", image: "copa-kahl.webp", tags: ["React", "Product UX", "Standings", "Scoring", "Sharing"],
    references: [{ label: "Copa Kahl", href: "https://copa-kahl.onrender.com/" }],
    copy: {
      en: { role: "Prediction-app development and design", summary: "A football prediction app with standings, tournament rules and sharing features for groups.", sections: [
        ["Product context", "Participants need to enter predictions, understand the scoring rules and compare standings as results are added. The interface brings those tasks into a tournament-focused experience."],
        ["Features", "The project includes prediction flows, exact-score and knockout scoring, standings, rules, champions views, admin result entry, comments, sharing and downloadable table images."],
        ["Design and review", "The app demonstrates product interface work across participant and admin views. Review the rules alongside the standings and prediction screens to see how the scoring model is presented."],
        ["Available evidence", "The Render deployment loaded on retry on October 1, 2026, under the current name Copa Se mató Pavón. The screenshot shows that edition, not the original World Cup branding. Startup delays are possible. No usage or conversion claims are made here."],
      ] },
      es: { role: "Desarrollo y diseño de app de pronósticos", summary: "Un prode de fútbol con posiciones, reglas del torneo y funciones para compartir en grupos.", sections: [
        ["Contexto", "Los participantes necesitan cargar pronósticos, entender cómo se suman puntos y comparar posiciones cuando se agregan resultados. La interfaz reúne esas tareas en una experiencia centrada en el torneo."],
        ["Funciones", "El proyecto incluye pronósticos, puntos por resultado exacto y eliminatorias, posiciones, reglas, campeones, carga de resultados por administradores, comentarios y exportación de tablas como imagen."],
        ["Diseño y revisión", "La app muestra trabajo de interfaz para participantes y administradores. Revisar las reglas junto a las posiciones y los pronósticos permite ver cómo se presenta el sistema de puntos."],
        ["Evidencia disponible", "El despliegue en Render cargó al reintentar el 1 de octubre de 2026 con el nombre actual Copa Se mató Pavón. La captura muestra esa edición, no la versión original del Mundial. Puede haber demoras de inicio. No se atribuyen métricas de uso ni conversión."],
      ] },
      ja: { role: "試合予想アプリの開発・デザイン", summary: "順位表、大会ルール、共有機能を備えたサッカー予想アプリ。", sections: [
        ["プロダクトの概要", "参加者が予想を入力し、得点ルールを確認し、結果の更新後に順位を比較するアプリです。大会に必要な操作を一つの画面構成にまとめています。"],
        ["機能", "予想入力、スコア的中・決勝トーナメントの得点計算、順位表、ルール、優勝者の表示、管理者による結果入力、コメント、共有、表の画像ダウンロードを備えています。"],
        ["デザインの確認", "参加者と管理者それぞれの画面で、プロダクトUIの実装を確認できます。順位表や予想画面とルールを合わせて見ると、得点の仕組みがどう伝わるかを確認できます。"],
        ["確認できる資料", "Renderの公開URLは2026年10月1日の再確認で読み込めました。現在の名称はCopa Se mató Pavónで、画像も元のワールドカップ版ではなく、この大会版の画面です。起動に時間がかかる場合があります。利用者数やコンバージョンの実績は記載していません。"],
      ] },
    },
  },
];
