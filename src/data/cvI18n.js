import { profile, work, education, certifications, skills } from "./portfolio.js";

const values = [
  "JavaScript, PHP, Python, Kotlin, Dart",
  "Vue.js, Nuxt.js, Tailwind CSS, HTML, CSS",
  "Flutter, Android (Kotlin)",
  "Express.js, gRPC, Laravel, Prisma",
  "PostgreSQL, MySQL, Firebase, Docker",
  "REST API, Git/GitLab, Cisco Packet Tracer, QA Testing, UI/UX Design",
];
const mk = (labels) => labels.map((label, i) => ({ label, value: values[i] }));
const labelsEn = ["Languages", "Frontend / Web", "Mobile Development", "Backend Frameworks", "Database & DevOps", "Tools & Workflows"];
const labelsId = ["Bahasa Pemrograman", "Frontend / Web", "Pengembangan Mobile", "Framework Backend", "Database & DevOps", "Tools & Alur Kerja"];

const idJobs = work.map((w) => {
  const [company, location] = w.org.split(" — ");
  return { company, location, period: w.date, title: w.title, desc: w.points.join(" ") };
});

export const cvText = {
  id: {
    summary: profile.summary,
    edu: "D3 Manajemen Informatika, Polinema",
    matrix: mk(labelsId),
    strengths: [
      "Full-Stack Delivery: Membangun aplikasi dari antarmuka Nuxt.js/Vue hingga layanan backend dan database",
      "Backend Architecture: Microservices Express.js, layanan gRPC, dan perancangan skema PostgreSQL",
      "QA Mindset: Pengujian fungsional dan performa, serta laporan replikasi bug yang terstruktur",
      "UI/UX Sense: Alur kerja yang intuitif, responsif, dan konsisten secara visual",
      "Team Discipline: Manajemen waktu, komunikasi yang baik, dan kerja sama tim lintas fungsi",
    ],
    jobs: idJobs,
  },
  en: {
    summary: "A dedicated and adaptable Information Management student at Politeknik Negeri Malang with a strong foundation across the entire digital product development lifecycle, from system analysis and UI/UX design to database administration. Hands-on experience in web development and software quality assurance (QA). Highly motivated to keep learning and ready to contribute professionally as a Web Developer, Back-End Developer, or Full-Stack Developer.",
    edu: "D3 Information Management, Polinema",
    matrix: mk(labelsEn),
    strengths: [
      "Full-Stack Delivery: Building applications from Nuxt.js/Vue interfaces to backend services and databases",
      "Backend Architecture: Express.js microservices, gRPC services, and PostgreSQL schema design",
      "QA Mindset: Functional and performance testing, with structured bug reproduction reports",
      "UI/UX Sense: Intuitive, responsive, and visually consistent workflows",
      "Team Discipline: Time management, clear communication, and cross-functional teamwork",
    ],
    jobs: [
      {
        company: "PT. Stechoq Robotika Indonesia", location: "Yogyakarta", period: "Aug 2026 – Present", title: "Full Stack Developer",
        desc: "Built an end-to-end web application for real-time industrial monitoring and management, covering frontend and backend architecture. Created a responsive, high-performance user interface with Nuxt.js, optimizing real-time data visualization and smooth user interaction. Designed and implemented gRPC services and Express.js microservices to run core operational modules, including assembly line planning and system diagnostics. Managed the PostgreSQL relational database, including schema design, migrations, and seed data execution. Traced and debugged services end-to-end to diagnose performance bottlenecks and keep data flowing smoothly and reliably across the stack.",
      },
      {
        company: "CV. Visual Code Indonesia", location: "Kediri", period: "Jun 2026 – Aug 2026", title: "Web Tester (QA) & UI/UX Designer — Internship",
        desc: "Ran thorough functional and performance testing on web applications to find and handle bugs before release. Designed intuitive, responsive UI/UX workflows to improve user engagement and visual appeal. Wrote structured technical test reports and managed bug reproduction steps to speed up fixes and patches by the development team.",
      },
    ],
  },
  ja: {
    summary: "ポリテクニック・ネグリ・マラン情報管理学科に在籍する、意欲的で適応力のある学生です。システム分析やUI/UXデザインからデータベース管理まで、デジタルプロダクト開発の全工程にわたる確かな基礎を持ち、Web開発とソフトウェア品質保証（QA）の実務経験があります。学び続ける意欲が高く、Webデベロッパー、バックエンドデベロッパー、フルスタックデベロッパーとして貢献する準備ができています。",
    edu: "情報管理学ディプロマ3、ポリネマ（マラン国立ポリテクニック）",
    matrix: mk(["言語", "フロントエンド / Web", "モバイル開発", "バックエンドフレームワーク", "データベース & DevOps", "ツール & ワークフロー"]),
    strengths: [
      "フルスタック開発: Nuxt.js/Vueのインターフェースからバックエンドサービスとデータベースまで、アプリケーションを構築",
      "バックエンド設計: Express.jsのマイクロサービス、gRPCサービス、PostgreSQLのスキーマ設計",
      "QAマインドセット: 機能テストとパフォーマンステスト、構造化されたバグ再現レポート",
      "UI/UXセンス: 直感的でレスポンシブ、視覚的に一貫したワークフロー",
      "チーム規律: 時間管理、円滑なコミュニケーション、部門横断のチームワーク",
    ],
    jobs: [
      {
        company: "PT. Stechoq Robotika Indonesia", location: "Yogyakarta", period: "2026年8月 – 現在", title: "フルスタックデベロッパー",
        desc: "リアルタイムの産業モニタリング・管理システム向けに、フロントエンドとバックエンドのアーキテクチャを含むエンドツーエンドのWebアプリケーションを構築。Nuxt.jsでレスポンシブかつ高性能なUIを作成し、リアルタイムデータの可視化とスムーズなユーザー操作を最適化。組立ラインの計画やシステム診断など中核の業務モジュールを動かすため、gRPCサービスとExpress.jsによるマイクロサービスを設計・実装。スキーマ設計、マイグレーション、シードデータの実行を含め、PostgreSQLを管理。サービスをエンドツーエンドでトレースしてデバッグし、パフォーマンスのボトルネックを診断して、スタック全体で円滑かつ信頼性の高いデータフローを確保。",
      },
      {
        company: "CV. Visual Code Indonesia", location: "Kediri", period: "2026年6月 – 2026年8月", title: "Webテスター（QA）& UI/UXデザイナー（インターン）",
        desc: "リリース前にバグを特定・対応するため、Webアプリケーションの機能テストとパフォーマンステストを網羅的に実施。ユーザーの関与度と視覚的な魅力を高めるため、直感的でレスポンシブなUI/UXワークフローを設計。開発チームの修正・パッチ対応を早めるため、構造化された技術テストレポートを作成し、バグ再現手順を管理。",
      },
    ],
  },
};


// --- Header resume (lokasi & pengalaman), label halaman, dan lokasi kerja per bahasa ---
const cvExtra = {
  id: { loc: "Indonesia", exp: "Kurang dari 1 Tahun Pengalaman", eyebrow: "RESUME", title: "Resume Online", print: "Cetak Resume" },
  en: { loc: "Indonesia", exp: "Less than 1 Year Experience", eyebrow: "RESUME", title: "Online Resume", print: "Print Resume" },
  ja: { loc: "インドネシア", exp: "経験1年未満", eyebrow: "履歴書", title: "オンライン履歴書", print: "履歴書を印刷" },
};
for (const k of Object.keys(cvExtra)) {
  Object.assign(cvText[k], cvExtra[k]);
  cvText[k].jobs = cvText[k].jobs.map((j) => ({
    ...j,
    location: /indonesia/i.test(j.location ?? "") ? j.location : `${j.location}, Indonesia`,
  }));
}

const splitOrg = (o) => {
  const [org, location] = o.org.split(" — ");
  return { ...o, org, location };
};

const cvExtraSections = {
  id: {
    education: education.map(splitOrg).map((e) => ({ company: e.org, location: e.location, period: e.date, title: e.title })),
    certifications: certifications.map((c) => ({ title: c.title, issuer: c.issuer, year: c.year })),
  },
  en: {
    education: [
      { company: "Politeknik Negeri Malang", location: "Kediri, Indonesia", period: "Jul 2024 – Present", title: "D3 Information Management" },
      { company: "MAN 3 Tangerang", location: "Tangerang, Indonesia", period: "Jun 2021 – Jun 2024", title: "Mathematics & Natural Sciences" },
    ],
    certifications: [
      { title: "Front-End Web", issuer: "Dicoding", year: "2024" },
      { title: "Back-End Web with JavaScript", issuer: "Dicoding", year: "2025" },
      { title: "JavaScript Programming", issuer: "Dicoding", year: "2025" },
      { title: "AI Fundamentals", issuer: "Dicoding", year: "2025" },
      { title: "Cloud and Gen AI Fundamentals on AWS", issuer: "Dicoding", year: "2025" },
      { title: "Python Essentials", issuer: "Cisco Networking Academy – Politeknik Negeri Malang", year: "2025" },
    ],
  },
  ja: {
    education: [
      { company: "ポリテクニック・ネグリ・マラン", location: "クディリ、インドネシア", period: "2024年7月 – 現在", title: "情報管理学ディプロマ3" },
      { company: "MAN 3 タンゲラン", location: "タンゲラン、インドネシア", period: "2021年6月 – 2024年6月", title: "数学・自然科学" },
    ],
    certifications: [
      { title: "フロントエンドWeb", issuer: "Dicoding", year: "2024" },
      { title: "JavaScriptによるバックエンドWeb", issuer: "Dicoding", year: "2025" },
      { title: "JavaScriptプログラミング", issuer: "Dicoding", year: "2025" },
      { title: "AIの基礎", issuer: "Dicoding", year: "2025" },
      { title: "AWSクラウドと生成AIの基礎", issuer: "Dicoding", year: "2025" },
      { title: "Python Essentials", issuer: "Cisco Networking Academy – ポリテクニック・ネグリ・マラン", year: "2025" },
    ],
  },
};

for (const k of Object.keys(cvExtraSections)) Object.assign(cvText[k], cvExtraSections[k]);

const cvSkillSets = {
  id: { hard: skills.hard, soft: skills.soft },
  en: {
    hard: ["Microsoft Office (Excel, Word, PowerPoint)", "Spreadsheet", "Canva"],
    soft: ["Time management", "Clear communication", "Teamwork", "Discipline", "Indonesian & English"],
  },
  ja: {
    hard: ["Microsoft Office（Excel・Word・PowerPoint）", "表計算", "Canva"],
    soft: ["時間管理", "円滑なコミュニケーション", "チームワーク", "規律", "インドネシア語・英語"],
  },
};
for (const k of Object.keys(cvSkillSets)) cvText[k].skillSets = cvSkillSets[k];
