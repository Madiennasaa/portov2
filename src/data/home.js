// Teks home page. Cari placeholder: grep -rn "\[Isi" src/data/home.js
export const expertiseItems = [
  ["JavaScript", "PHP", "Python", "Kotlin", "Dart"],
  ["Vue.js", "Nuxt.js", "Tailwind CSS", "HTML", "CSS"],
  ["Flutter", "Android (Kotlin)"],
  ["Express.js", "gRPC", "Laravel", "Prisma"],
  ["PostgreSQL", "MySQL", "Firebase", "Docker"],
  ["REST API", "Git/GitLab", "UI/UX Design", "QA Testing"],
];

export const home = {
  en: {
    heroBadge: "AVAILABLE FOR ROLES WORLDWIDE",
    recruiter: {
      eyebrow: "FOR RECRUITERS", title: "Recruiter Quick Summary", sub: "Key profile highlights at a glance",
      labels: { role: "CURRENT ROLE", exp: "EXPERIENCE", loc: "LOCATION", stack: "CORE STACK", avail: "AVAILABILITY", domain: "DOMAIN EXPERIENCE", strength: "STRENGTHS" },
      values: {
        exp: "Less than 1 year",
        avail: "Open to relevant opportunities",
        stack: "Nuxt.js, Vue.js, Express.js, gRPC, PostgreSQL, Laravel",
        domain: "Manufacturing Systems, School Information Systems, Mobile Apps, Web Apps",
        strength: "End-to-end delivery, microservices backend, system analysis, UI/UX, QA mindset",
      },
      btn: { resume: "Download CV", portfolio: "View Portfolio", email: "Contact via Email", linkedin: "Open LinkedIn" },
    },
    about: {
      eyebrow: "PERSONAL SUMMARY", title: "ABOUT ME", sub: "Bridging system analysis with hands-on full-stack development",
      p1: "Hello! I am Ahmad Ubaidillah Tsani, a developer who thrives on moving products seamlessly from high-level requirement specs to refined production instances. Over the past year, I have built performant applications across web surfaces: Nuxt.js interfaces, Express.js microservices connected over gRPC, and PostgreSQL schemas for a real-time industrial monitoring platform at Stechoq Robotika Indonesia.",
      p2: "Originally starting as a web developer deeply focused on frontend and UI/UX paradigms, my appetite for understanding stakeholder requirements and coordinating system architectures naturally drew me into full-stack delivery. I believe software succeeds when technology, business logic, and human empathy are closely aligned.",
      listTitle: "END-TO-END PRODUCT CARE",
      list: ["REQUIREMENT GATHERING & SYSTEM ANALYSIS", "UI/UX DESIGN & PROTOTYPING", "FRONTEND & BACKEND DEVELOPMENT (NUXT, EXPRESS, GRPC)", "DATABASE DESIGN & MIGRATION (POSTGRESQL)", "QA TESTING & BUG REPLICATION"],
    },
    expertise: {
      eyebrow: "TECHNICAL MATRIX", title: "TECHNICAL EXPERTISE", sub: "My technical tools and development methodologies",
      groups: ["LANGUAGES", "FRONTEND FOUNDATIONS", "MOBILE ENGINEERING", "BACKEND FRAMEWORKS", "DATABASE & INFRASTRUCTURE", "TOOLS & METHODOLOGIES"],
    },
    timeline: { eyebrow: "CAREER TIMELINE", title: "PROFESSIONAL TRAJECTORY", sub: "A timeline of my industry tenures and achievements" },
    contact: {
      eyebrow: "LET'S CONNECT", title: "CONTACT DESK", sub: "Drop me an email to explore collaboration, consulting, or project work.",
      note: "Feel free to reach out. I generally respond within one business day.",
      direct: "DIRECT EMAIL", phone: "PHONE / WHATSAPP", linkedin: "PROFESSIONAL LINKEDIN", web: "PORTFOLIO ADDRESS",
      form: { title: "GET IN TOUCH", name: "FULL NAME", email: "EMAIL ADDRESS", subject: "SUBJECT", message: "MESSAGE DESCRIPTION", send: "SEND MESSAGE" },
    },
    footer: { role: "Full Stack Developer", direct: "DIRECT CONTACT", networks: "NETWORKS", rights: "All rights reserved." },
  },
  id: {
    heroBadge: "TERSEDIA UNTUK PELUANG DI SELURUH DUNIA",
    recruiter: {
      eyebrow: "UNTUK REKRUTER", title: "Ringkasan Cepat Rekruter", sub: "Sorotan profil utama sekilas pandang",
      labels: { role: "POSISI SAAT INI", exp: "PENGALAMAN", loc: "LOKASI", stack: "TECH STACK UTAMA", avail: "KETERSEDIAAN", domain: "PENGALAMAN DOMAIN", strength: "KEKUATAN" },
      values: {
        exp: "Kurang dari 1 tahun",
        avail: "Terbuka untuk peluang yang relevan",
        stack: "Nuxt.js, Vue.js, Express.js, gRPC, PostgreSQL, Laravel",
        domain: "Sistem Manufaktur, Sistem Informasi Sekolah, Aplikasi Mobile, Aplikasi Web",
        strength: "Pengerjaan end-to-end, backend microservices, analisis sistem, UI/UX, pola pikir QA",
      },
      btn: { resume: "Unduh CV", portfolio: "Lihat Portofolio", email: "Hubungi via Email", linkedin: "Buka LinkedIn" },
    },
    about: {
      eyebrow: "RINGKASAN PRIBADI", title: "TENTANG SAYA", sub: "Menjembatani analisis sistem dengan pengembangan full-stack",
      p1: "Halo! Saya Ahmad Ubaidillah Tsani, developer yang menikmati proses membawa produk dari spesifikasi kebutuhan tingkat tinggi hingga menjadi sistem produksi yang rapi. Selama hampir setahun terakhir, saya membangun aplikasi web berperforma baik: antarmuka Nuxt.js, microservices Express.js yang terhubung lewat gRPC, dan skema PostgreSQL untuk platform pemantauan industri real-time di Stechoq Robotika Indonesia.",
      p2: "Berawal sebagai web developer yang fokus pada frontend dan UI/UX, ketertarikan saya pada kebutuhan stakeholder dan arsitektur sistem membawa saya ke pengerjaan full-stack. Saya percaya perangkat lunak berhasil ketika teknologi, logika bisnis, dan empati terhadap pengguna selaras.",
      listTitle: "PERHATIAN END-TO-END",
      list: ["PENGUMPULAN KEBUTUHAN & ANALISIS SISTEM", "DESAIN UI/UX & PROTOTIPE", "PENGEMBANGAN FRONTEND & BACKEND (NUXT, EXPRESS, GRPC)", "PERANCANGAN & MIGRASI DATABASE (POSTGRESQL)", "PENGUJIAN QA & REPLIKASI BUG"],
    },
    expertise: {
      eyebrow: "MATRIKS TEKNIS", title: "KEAHLIAN TEKNIS", sub: "Alat teknis dan metodologi pengembangan yang saya gunakan",
      groups: ["BAHASA PEMROGRAMAN", "FONDASI FRONTEND", "REKAYASA MOBILE", "FRAMEWORK BACKEND", "DATABASE & INFRASTRUKTUR", "ALAT & METODOLOGI"],
    },
    timeline: { eyebrow: "LINIMASA KARIER", title: "PERJALANAN PROFESIONAL", sub: "Linimasa pengalaman kerja dan pencapaian saya" },
    contact: {
      eyebrow: "MARI TERHUBUNG", title: "MEJA KONTAK", sub: "Kirim email untuk membahas kolaborasi, konsultasi, atau proyek.",
      note: "Jangan ragu menghubungi saya. Biasanya saya membalas dalam satu hari kerja.",
      direct: "EMAIL LANGSUNG", phone: "TELEPON / WHATSAPP", linkedin: "LINKEDIN PROFESIONAL", web: "ALAMAT PORTOFOLIO",
      form: { title: "HUBUNGI SAYA", name: "NAMA LENGKAP", email: "ALAMAT EMAIL", subject: "SUBJEK", message: "ISI PESAN", send: "KIRIM PESAN" },
    },
    footer: { role: "Full Stack Developer", direct: "KONTAK LANGSUNG", networks: "JARINGAN", rights: "Hak cipta dilindungi." },
  },
  ja: {
    heroBadge: "世界中の求人に対応可能",
    recruiter: {
      eyebrow: "採用担当者の方へ", title: "採用担当者向けサマリー", sub: "主要なプロフィールを一目で",
      labels: { role: "現在の役職", exp: "経験", loc: "所在地", stack: "主要スタック", avail: "稼働状況", domain: "対応領域", strength: "強み" },
      values: {
        exp: "1年未満",
        avail: "関連する機会に前向きです",
        stack: "Nuxt.js、Vue.js、Express.js、gRPC、PostgreSQL、Laravel",
        domain: "製造システム、学校情報システム、モバイルアプリ、Webアプリ",
        strength: "エンドツーエンド開発、マイクロサービス、システム分析、UI/UX、QA視点",
      },
      btn: { resume: "CVをダウンロード", portfolio: "ポートフォリオを見る", email: "メールで連絡", linkedin: "LinkedInを開く" },
    },
    about: {
      eyebrow: "自己紹介", title: "私について", sub: "システム分析と実践的なフルスタック開発をつなぐ",
      p1: "こんにちは。Ahmad Ubaidillah Tsaniです。高い次元の要件定義から洗練された本番システムまで、製品をシームレスに導くことを得意とする開発者です。この1年ほどで、Nuxt.jsのインターフェース、gRPCで接続したExpress.jsのマイクロサービス、PostgreSQLのスキーマなど、実用的なWebアプリケーションを構築してきました。Stechoq Robotika Indonesiaではリアルタイム産業モニタリング基盤を担当しています。",
      p2: "フロントエンドとUI/UXに注力するWeb開発者として出発しましたが、ステークホルダーの要件を理解しシステムアーキテクチャを調整したいという思いから、フルスタック開発へと自然に進みました。技術、ビジネスロジック、ユーザーへの共感が揃ったときにソフトウェアは成功すると考えています。",
      listTitle: "エンドツーエンドの品質管理",
      list: ["要件定義とシステム分析", "UI/UXデザインとプロトタイプ", "フロントエンド・バックエンド開発（NUXT、EXPRESS、GRPC）", "データベース設計とマイグレーション（POSTGRESQL）", "QAテストとバグ再現"],
    },
    expertise: {
      eyebrow: "技術マトリクス", title: "技術スキル", sub: "使用している技術ツールと開発手法",
      groups: ["プログラミング言語", "フロントエンド基盤", "モバイル開発", "バックエンドフレームワーク", "データベースとインフラ", "ツールと手法"],
    },
    timeline: { eyebrow: "キャリア年表", title: "職務経歴", sub: "業界での在籍期間と実績の年表" },
    contact: {
      eyebrow: "つながりましょう", title: "お問い合わせ", sub: "共同開発、相談、プロジェクトについてお気軽にメールください。",
      note: "お気軽にご連絡ください。通常、1営業日以内に返信します。",
      direct: "メール", phone: "電話 / WHATSAPP", linkedin: "LINKEDIN", web: "ポートフォリオURL",
      form: { title: "連絡する", name: "氏名", email: "メールアドレス", subject: "件名", message: "メッセージ", send: "送信" },
    },
    footer: { role: "フルスタック開発者", direct: "直接連絡", networks: "ネットワーク", rights: "無断転載を禁じます。" },
  },
};
