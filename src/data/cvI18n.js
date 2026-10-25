import { work, education, certifications } from "./portfolio.js";

const values = [
  "JavaScript, PHP, Python, Kotlin, Dart",
  "Vue.js, Tailwind CSS, HTML, CSS",
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
    summary:
      "Full Stack Developer dan mahasiswa Manajemen Informatika di Politeknik Negeri Malang dengan fondasi kuat pada seluruh siklus produk digital: analisis sistem, desain UI/UX, layanan backend, dan administrasi basis data. Berpengalaman membangun aplikasi web industri real-time dengan Vue.js, Express.js, gRPC, dan PostgreSQL, didukung latar belakang QA dalam pengujian fungsional dan performa. Sangat termotivasi untuk terus belajar dan siap berkontribusi sebagai Web Developer, Back-End Developer, atau Full-Stack Developer. Tersedia untuk bekerja remote.",
    edu: "D3 Manajemen Informatika, Polinema",
    matrix: mk(labelsId),
    strengths: [
      {
        title: "Full-Stack Delivery",
        desc: "Menghubungkan antarmuka Vue.js, layanan backend, dan database menjadi satu alur produk yang utuh dan bisa dioperasikan.",
      },
      {
        title: "Backend Architecture",
        desc: "Merancang microservices Express.js, kontrak gRPC, dan skema PostgreSQL yang konsisten serta mudah dirawat.",
      },
      {
        title: "QA Mindset",
        desc: "Menguji fungsi dan performa, lalu menulis langkah reproduksi bug yang jelas agar perbaikan lebih cepat.",
      },
      {
        title: "UI/UX Sense",
        desc: "Menyusun alur responsif dengan hierarki visual jelas dan interaksi yang mudah dipahami pengguna.",
      },
      {
        title: "Team Discipline",
        desc: "Menjaga tenggat, komunikasi lintas peran, dan serah-terima pekerjaan yang rapi di dalam tim.",
      },
    ],
    jobs: idJobs,
  },
  en: {
    summary:
      "Dedicated Full Stack Developer and Information Management student at Politeknik Negeri Malang with a strong foundation across the digital product lifecycle: system analysis, UI/UX design, backend services, and database administration. Hands-on experience building real-time industrial web applications with Vue.js, Express.js, gRPC, and PostgreSQL, backed by a QA background in functional and performance testing. Highly motivated to keep learning and ready to contribute as a Web Developer, Back-End Developer, or Full-Stack Developer. Available for remote work.",
    edu: "D3 Information Management, Polinema",
    matrix: mk(labelsEn),
    strengths: [
      {
        title: "Full-Stack Delivery",
        desc: "Connects Vue.js interfaces, backend services, and databases into one coherent, operable product flow.",
      },
      {
        title: "Backend Architecture",
        desc: "Designs Express.js microservices, gRPC contracts, and PostgreSQL schemas that stay consistent and maintainable.",
      },
      {
        title: "QA Mindset",
        desc: "Tests functionality and performance, then documents clear bug reproduction steps so fixes move faster.",
      },
      {
        title: "UI/UX Sense",
        desc: "Shapes responsive flows with clear visual hierarchy and interactions that are easy to understand.",
      },
      {
        title: "Team Discipline",
        desc: "Protects deadlines, communicates across roles, and keeps handoffs clean within the team.",
      },
    ],
    jobs: [
      {
        company: "PT. Stechoq Robotika Indonesia", location: "Yogyakarta", period: "Aug 2026 – Present", title: "Full Stack Developer",
        desc: "Built an end-to-end web application for real-time industrial monitoring and management, covering frontend and backend architecture. Created a responsive, high-performance user interface with Vue.js, optimizing real-time data visualization and smooth user interaction. Designed and implemented gRPC services and Express.js microservices to run core operational modules, including assembly line planning and system diagnostics. Managed the PostgreSQL relational database, including schema design, migrations, and seed data execution. Traced and debugged services end-to-end to diagnose performance bottlenecks and keep data flowing smoothly and reliably across the stack.",
      },
      {
        company: "CV. Visual Code Indonesia", location: "Kediri", period: "Jun 2026 – Aug 2026", title: "Web Tester (QA) & UI/UX Designer — Internship",
        desc: "Ran thorough functional and performance testing on web applications to find and handle bugs before release. Designed intuitive, responsive UI/UX workflows to improve user engagement and visual appeal. Wrote structured technical test reports and managed bug reproduction steps to speed up fixes and patches by the development team.",
      },
    ],
  },
  ja: {
    summary:
      "ポリテクニック・ネグリ・マランの情報管理学科に在籍する、意欲的なフルスタックデベロッパーです。システム分析、UI/UXデザイン、バックエンドサービス、データベース管理まで、デジタルプロダクトのライフサイクル全体にわたる確かな基礎を持っています。Vue.js、Express.js、gRPC、PostgreSQLを用いたリアルタイムの産業向けWebアプリケーションの開発経験があり、機能テストとパフォーマンステストを中心としたQAのバックグラウンドも備えています。学び続ける意欲が高く、Webデベロッパー、バックエンドデベロッパー、フルスタックデベロッパーとして貢献する準備ができています。リモートワーク可能です。",
    edu: "情報管理学ディプロマ3、ポリネマ（マラン国立ポリテクニック）",
    matrix: mk(["言語", "フロントエンド / Web", "モバイル開発", "バックエンドフレームワーク", "データベース & DevOps", "ツール & ワークフロー"]),
    strengths: [
      {
        title: "フルスタック開発",
        desc: "Vue.jsのインターフェース、バックエンドサービス、データベースを一つの運用可能なプロダクトフローに接続します。",
      },
      {
        title: "バックエンド設計",
        desc: "Express.jsのマイクロサービス、gRPCの契約、PostgreSQLのスキーマを一貫性と保守性を保って設計します。",
      },
      {
        title: "QAマインドセット",
        desc: "機能とパフォーマンスをテストし、修正が迅速に進むよう明確なバグ再現手順を記録します。",
      },
      {
        title: "UI/UXセンス",
        desc: "明確な視覚的階層と理解しやすいインタラクションを備えたレスポンシブなフローを構築します。",
      },
      {
        title: "チーム規律",
        desc: "期限を守り、役割を越えてコミュニケーションし、チーム内の引き継ぎを整えます。",
      },
    ],
    jobs: [
      {
        company: "PT. Stechoq Robotika Indonesia", location: "Yogyakarta", period: "2026年8月 – 現在", title: "フルスタックデベロッパー",
        desc: "リアルタイムの産業モニタリング・管理システム向けに、フロントエンドとバックエンドのアーキテクチャを含むエンドツーエンドのWebアプリケーションを構築。Vue.jsでレスポンシブかつ高性能なUIを作成し、リアルタイムデータの可視化とスムーズなユーザー操作を最適化。組立ラインの計画やシステム診断など中核の業務モジュールを動かすため、gRPCサービスとExpress.jsによるマイクロサービスを設計・実装。スキーマ設計、マイグレーション、シードデータの実行を含め、PostgreSQLを管理。サービスをエンドツーエンドでトレースしてデバッグし、パフォーマンスのボトルネックを診断して、スタック全体で円滑かつ信頼性の高いデータフローを確保。",
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
  id: { loc: "Indonesia (UTC+7)", exp: "Kurang dari 1 Tahun Pengalaman", eyebrow: "RESUME", title: "Resume Online", print: "Cetak Resume" },
  en: { loc: "Indonesia (UTC+7)", exp: "Less than 1 Year Experience", eyebrow: "RESUME", title: "Online Resume", print: "Print Resume" },
  ja: { loc: "インドネシア（UTC+7）", exp: "経験1年未満", eyebrow: "履歴書", title: "オンライン履歴書", print: "履歴書を印刷" },
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

