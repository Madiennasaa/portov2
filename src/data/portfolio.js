export const profile = {
  name: "Ahmad Ubaidillah Tsani",
  role: "Full Stack Developer",
  currentRole: "Full Stack Developer, PT. Stechoq Robotika Indonesia",
  location: "Tangerang, Banten",
  email: "ahmadubai02@gmail.com",
  phone: "085756373129",
  website: "ahmadubai.vercel.app",
  summary:
    "Mahasiswa Manajemen Informatika Politeknik Negeri Malang yang berdedikasi dan adaptif, dengan fondasi kuat pada seluruh siklus pengembangan produk digital, mulai dari analisis sistem dan desain UI/UX hingga administrasi basis data. Berpengalaman langsung dalam pengembangan web dan penjaminan kualitas perangkat lunak (QA). Sangat termotivasi untuk terus belajar dan siap berkontribusi secara profesional sebagai Web Developer, Back-End Developer, atau Full-Stack Developer.",
  cvFile: "/CV_Ahmad_Ubaidillah_Tsani.pdf",
  links: [
    { name: "GitHub", url: "https://github.com/Madiennasaa" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ahmadubai02" },
    { name: "Instagram", url: "https://www.instagram.com/madnst_/" },
    { name: "Email", url: "mailto:ahmadubai02@gmail.com" },
  ],
};

export const work = [
  {
    date: "Aug 2026 – Sekarang",
    title: "Full Stack Developer",
    org: "PT. Stechoq Robotika Indonesia — Yogyakarta",
    points: [
      "Membangun aplikasi web end-to-end untuk sistem pemantauan dan manajemen industri secara real-time, mencakup arsitektur frontend dan backend.",
      "Membuat antarmuka pengguna yang responsif dan berperforma tinggi menggunakan Nuxt.js, dengan optimalisasi visualisasi data real-time dan interaksi pengguna yang lancar.",
      "Merancang dan mengimplementasikan layanan gRPC serta microservices dengan Express.js untuk menjalankan modul operasional inti, termasuk perencanaan lini perakitan dan diagnostik sistem.",
      "Mengelola basis data relasional PostgreSQL, meliputi perancangan skema, penanganan migrasi, dan eksekusi data seed.",
      "Melakukan penelusuran (tracing) dan debugging layanan secara end-to-end untuk mendiagnosis hambatan performa serta memastikan aliran data yang mulus dan andal di seluruh stack.",
    ],
  },
  {
    date: "Jun 2026 – Aug 2026",
    title: "Web Tester (QA) & UI/UX Designer — Internship",
    org: "CV. Visual Code Indonesia — Kediri",
    points: [
      "Melaksanakan pengujian fungsional dan performa yang menyeluruh pada aplikasi web untuk mengidentifikasi dan menangani bug sebelum sistem dirilis.",
      "Merancang alur kerja UI/UX yang intuitif dan responsif untuk meningkatkan keterlibatan pengguna dan daya tarik visual.",
      "Menyusun laporan pengujian teknis yang terstruktur dan mengelola langkah replikasi bug guna mempercepat proses perbaikan/patch oleh tim pengembang.",
    ],
  },
];

export const education = [
  { date: "Jul 2024 – Sekarang", title: "Diploma 3 Manajemen Informatika", org: "Politeknik Negeri Malang — Kediri", points: [] },
  { date: "Jun 2021 – Jun 2024", title: "Matematika & Ilmu Pengetahuan Alam", org: "MAN 3 Tangerang — Tangerang", points: [] },
];

export const organizations = [
  {
    date: "Jan 2025 – Sekarang",
    title: "Anggota MIMPI",
    org: "UKM MIMPI POLINEMA",
    points: [
      "Mengambil dokumentasi foto dan video resmi untuk berbagai acara dan upacara kampus di Politeknik Negeri Malang.",
      "Berkontribusi dalam pembuatan konten publikasi untuk kanal media sosial dan platform media resmi MIMPI.",
      "Berkolaborasi dengan tim lintas fungsi untuk memastikan standar visual yang berkualitas tinggi dan penyampaian konten yang informatif.",
    ],
  },
  {
    date: "Okt 2021 – Des 2023",
    title: "Koordinator Divisi ASB",
    org: "PMR Wira MAN 3 Tangerang",
    points: [
      "Mengoordinasikan kegiatan pengembangan keterampilan dan pelatihan Palang Merah untuk anggota Palang Merah Remaja (PMR).",
      "Menyusun dan melaksanakan program kerja divisi, termasuk pelatihan terstruktur, evaluasi kinerja, dan inisiatif sosial kemanusiaan.",
      "Bertindak sebagai penghubung utama antara anggota pengurus dan anggota umum dalam kegiatan sekolah, baik internal maupun eksternal.",
      "Mengawasi dan mengevaluasi kinerja anggota untuk memastikan tujuan dan target pengembangan organisasi tercapai secara konsisten.",
    ],
  },
];

export const certifications = [
  { title: "Front-End Web", issuer: "Dicoding", year: "2024" },
  { title: "Back-End Web dengan JavaScript", issuer: "Dicoding", year: "2025" },
  { title: "Pemrograman JavaScript", issuer: "Dicoding", year: "2025" },
  { title: "Dasar AI", issuer: "Dicoding", year: "2025" },
  { title: "Dasar Cloud dan Gen AI di AWS", issuer: "Dicoding", year: "2025" },
  { title: "Python Essentials", issuer: "Cisco Networking Academy – Politeknik Negeri Malang", year: "2025" },
];

export const skills = {
  hard: ["Microsoft Office (Excel, Word, PowerPoint)", "Spreadsheet", "Canva"],
  soft: ["Manajemen waktu", "Komunikasi yang baik", "Kerja sama tim", "Disiplin", "Bahasa Indonesia & Inggris"],
};

export const stack = [
  { group: "Frontend", items: ["Vue.js", "Nuxt.js", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Backend", items: ["Express.js", "gRPC", "Microservices", "Laravel", "PHP", "PHP Native", "Python"] },
  { group: "Database", items: ["PostgreSQL", "MySQL", "Firebase"] },
  { group: "Mobile & Desktop", items: ["Kotlin", "PyQt5"] },
];

export const projects = [
  { n: 1, title: "ALC Mazda - Stechoq Robotika Indonesia", desc: "Sistem internal ALC Mazda yang sedang dikembangkan di Stechoq Robotika Indonesia (Yogyakarta) untuk manajemen operasional dan alur kerja perusahaan.", tags: ["Vue.js", "Nuxt.js", "Express", "PostgreSQL"], link: "", img: 8 },
  { n: 2, title: "E-Commerce Platform Toko Hijau", desc: "Platform marketplace jual beli online dengan fitur keranjang, manajemen produk, dan sistem checkout dinamis.", tags: ["PHP Native", "MySQL", "Javascript", "CSS"], link: "https://github.com/Madiennasaa/tokohijau", img: 1 },
  { n: 3, title: "Sistem Pembayaran SPP TK DHARMA", desc: "Aplikasi manajemen keuangan sekolah untuk mencatat transaksi SPP siswa, rekap pembayaran, dan laporan keuangan.", tags: ["Laravel", "Javascript", "MySQL", "Tailwind"], link: "https://github.com/Madiennasaa/pembayaran-spp", img: 2 },
  { n: 4, title: "Sistem Perpustakaan Online", desc: "Aplikasi pengelolaan peminjaman dan pengembalian buku dengan pencarian katalog dan manajemen koleksi.", tags: ["MySQL", "Python", "PyQt5"], link: "https://github.com/Madiennasaa/perpustakaan", img: 3 },
  { n: 5, title: "Website Organisasi WPI", desc: "Website profil organisasi yang menampilkan informasi, kegiatan, dan struktur kepengurusan secara dinamis.", tags: ["Laravel", "PHP", "MySQL", "Tailwind"], link: "https://github.com/Madiennasaa/wpi", img: 4 },
  { n: 6, title: "SKMUI Platform Les Online", desc: "Kontribusi UI dan pengembangan beberapa halaman pada platform les online berbasis web.", tags: ["Laravel", "Tailwind CSS"], link: "https://github.com/Madiennasaa/skmui", img: 5 },
  { n: 7, title: "Web Sistem Manajemen SDN Sukorame 1", desc: "Web sistem manajemen sekolah terintegrasi yang dilengkapi halaman profil sekolah, manajemen jadwal, materi pembelajaran, serta pengelolaan data guru dan siswa.", tags: ["Laravel", "MySQL", "Vite", "JavaScript", "Tailwind CSS"], link: "https://github.com/Madiennasaa", img: 6 },
  { n: 8, title: "Mobile Sistem Manajemen SDN Sukorame 1", desc: "Aplikasi mobile sistem manajemen sekolah SDN Sukorame 1 untuk mempermudah akses informasi, jadwal, dan aktivitas sekolah.", tags: ["Kotlin", "Firebase"], link: "https://github.com/Madiennasaa", img: 7 },
  { n: 9, title: "Noora - Quran Web App", desc: "Prototipe front-end dashboard Noora Quran, platform belajar Al-Qur'an daring: ringkasan program, status pendaftaran, modul materi, daftar PR/ujian dengan pencarian dan filter tanggal, serta FAQ.", tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"], link: "https://github.com/Madiennasaa/noora-quran", img: 9 },
];
