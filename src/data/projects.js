import { projects as base } from "./portfolio.js";
import i18n from "../i18n.js";
import { tr, categories } from "./projectsI18n.js";

const meta = {
  1: { slug: "alc-mazda", category: "Internal System" },
  2: { slug: "toko-hijau", category: "Web App" },
  3: { slug: "spp-tk-dharma", category: "Web App" },
  4: { slug: "perpustakaan-online", category: "Desktop App" },
  5: { slug: "wpi-organisasi", category: "Web App" },
  6: { slug: "skmui-les-online", category: "Web App" },
  7: { slug: "simas-sdn-sukorame-web", category: "Web App" },
  8: { slug: "simas-sdn-sukorame-mobile", category: "Mobile App" },
  9: { slug: "noora-quran", category: "Web App" },
};

const details = {
  1: {
    role: "Full Stack Developer",
    impact: "Pemantauan & manajemen lini perakitan real-time dalam satu sistem terpadu (dalam pengembangan)",
    background:
      "Aplikasi web internal untuk kebutuhan operasional dan alur kerja manufaktur ALC Mazda, dikembangkan di Stechoq Robotika Indonesia, Yogyakarta.",
    problem:
      "Pemantauan lini perakitan, kualitas unit, dan aktivitas perbaikan sebelumnya bertumpu pada pencatatan manual dan sistem yang terpisah, sehingga status produksi sulit dipantau secara real-time dan kasus NG/defect sulit ditelusuri sampai prosedur asalnya. Sistem lama juga belum mendukung stasiun kerja operator dan papan andon yang seragam.",
    solution:
      "Membangun aplikasi web end-to-end untuk pemantauan dan manajemen industri secara real-time, mencakup arsitektur frontend dan backend.",
    features: [
      "Perencanaan lini perakitan",
      "Diagnostik sistem",
      "Visualisasi data real-time",
      "Ekspor laporan ke Excel",
      "Manajemen autentikasi pengguna",
      "Dukungan multi-bahasa (i18n)",
    ],
    technicalImplementation:
      "Frontend Nuxt.js (Vue 3). Backend berupa microservices Express.js yang saling terhubung lewat gRPC, dengan database PostgreSQL (skema, migrasi, seed). Tracing dan debugging layanan end-to-end untuk mencari hambatan performa, serta regression testing pada fitur pencarian di beberapa service.",
    lessonLearned:
      "Bekerja di arsitektur microservices yang kompleks mengajarkan saya pentingnya kontrak antar layanan (gRPC proto), pengelolaan state autentikasi yang tangguh (koordinasi refresh token dan permission berbasis api path), serta disiplin menjaga payload dan aturan bisnis papan andon agar konsisten antar mesin dan antar bahasa.",
  },
  2: {
    role: "Full Stack Developer",
    impact: "Etalase hingga transaksi toko pertanian berjalan daring, kemudian tumbuh menjadi aplikasi Nuxt + PostgreSQL yang jauh lebih terstruktur.",
    background:
      "Berawal sebagai proyek akhir mata kuliah Desain Web semester 2 (Januari 2026) saat kuliah di Politeknik Negeri Malang, lalu terus dikembangkan menjadi platform e-commerce toko pertanian hingga ratusan commit.",
    problem:
      "Penjual produk pertanian membutuhkan kanal penjualan daring milik sendiri — katalog, keranjang, checkout, dan pengelolaan pesanan/produk — tanpa bergantung pada marketplace pihak ketiga, sementara pencatatan penjualan dan unggulan produknya masih manual.",
    solution:
      "Platform e-commerce toko pertanian yang berisi etalase dan detail produk, keranjang & checkout sampai struk pesanan, pengelolaan pesanan, berita, dan kalender promo. Versi pertama dibangun dengan PHP Native, lalu di-reengineering penuh menjadi aplikasi Nuxt.",
    features: [
      "Etalase produk, kategori, dan promo/deals",
      "Keranjang, checkout, struk, serta riwayat dan detail pesanan",
      "Panel admin & penjual untuk kelola produk, pesanan, dan berita",
      "Autentikasi pengguna: daftar, verifikasi, dan reset password",
    ],
    technicalImplementation:
      "Fase pertama: PHP Native + MySQL dan diploy ke Vercel. Fase reengineering: Nuxt 3 + PostgreSQL (Neon) dengan server API terstruktur, migrasi database versi (001–020) yang immutable dengan checksum dan advisory lock, seed data, i18n (shared locales), dan pengujian Vitest.",
    lessonLearned:
      "Kode awal yang prosedural (satu file PHP hingga 1.000+ baris) menjadi alasan tuntas me-reengineering proyek ini. Dari situ saya terbiasa menjaga migrasi database yang disiplin (immutable, expand → deploy → contract) dan menulis test sejak awal agar aplikasi tetap maintainable.",
  },
  3: {
    role: "Full Stack Developer",
    impact: "Pencatatan pembayaran SPP lebih tertib: transaksi tervalidasi, kwitansi konsisten, dan rekap pemasukan siap cetak.",
    background:
      "Aplikasi keuangan sekolah untuk TK DHARMA WANITA Kec. Ngadiluwih guna mendigitalisasi pencatatan pembayaran SPP siswa.",
    problem:
      "Pembayaran SPP yang dicatat manual rentan salah hitung dan sulit dicek ulang; sekolah tidak memiliki kwitansi yang konsisten dan rekap pemasukan harus disusun ulang secara manual setiap bulan.",
    solution:
      "Aplikasi web yang mengelola data murid & wali murid, mencatat transaksi pembayaran SPP, memvalidasi pembayaran, mencetak kwitansi, dan menyajikan rekap pemasukan yang siap cetak.",
    features: [
      "Kelola data murid & wali murid",
      "Pencatatan transaksi pembayaran lengkap dengan catatan alasan",
      "Validasi pembayaran",
      "Cetak kwitansi pembayaran dan laporan pemasukan",
    ],
    technicalImplementation:
      "Laravel (Blade) + SCSS dengan Livewire untuk daftar murid yang interaktif; database MySQL memuat tabel murid, wali_murid, dan pembayarans beserta kolom alasan untuk koreksi; autentikasi memakai fitur bawaan (login, forgot/reset password).",
    lessonLearned:
      "Aplikasi keuangan menuntut presisi: alur bisnis pembayaran harus terpetakan rapi ke relasi murid–wali–pembayaran, disediakan kolom alasan untuk koreksi transaksi, dan dokumen cetak (kwitansi serta laporan) dibuat langsung dari web.",
  },
  4: {
    role: "Full Stack Developer",
    impact: "Koleksi dan peminjaman buku dikelola dengan validasi stok otomatis, alur peminjaman tertib, dan dua peran pengguna.",
    background: "Aplikasi desktop manajemen perpustakaan (Library Hub) mulai dari data anggota, inventaris buku, hingga transaksi peminjaman.",
    problem:
      "Pencatatan peminjaman buku manual membuat stok tidak konsisten, request pinjam yang menumpuk sulit disetujui berurutan, dan anggota tidak bisa mengecek riwayat peminjamannya sendiri.",
    solution:
      "Aplikasi desktop multi-user: petugas mengelola buku dan anggota sekaligus menyetujui permintaan pinjam, sementara anggota melihat katalog dan mengajukan peminjaman. Alur sirkulasi Pending → Dipinjam → Dikembalikan dengan validasi stok di setiap langkah.",
    features: [
      "Autentikasi multi-user (petugas & anggota) dengan hak akses berbeda",
      "CRUD buku, pencarian judul/pengarang, dan stok otomatis (berkurang saat dipinjam, bertambah saat dikembalikan)",
      "Alur peminjaman Pending → Dipinjam → Dikembalikan dengan penyetujuan petugas",
      "Riwayat peminjaman personal untuk anggota",
    ],
    technicalImplementation:
      "Python dengan pendekatan OOP dan GUI PyQt5 bertema gelap modern, terhubung ke MySQL (MariaDB) melalui mysql-connector-python untuk mengelola data anggota, buku, dan transaksi secara real-time.",
    lessonLearned:
      "Latihan OOP yang nyata di aplikasi GUI (desktop): memisahkan class antarmuka dan akses database, merancang alur approval yang jelas, dan menjaga konsistensi stok buku pada setiap perubahan status transaksi.",
  },
  5: {
    role: "Full Stack Developer",
    impact: "Profil, program, dan publikasi organisasi tersaji dalam satu situs web yang kontennya bisa diperbarui lewat panel admin.",
    background: "Situs profil organisasi WPI untuk menyajikan informasi kelembagaan dan kegiatan secara dinamis di web.",
    problem:
      "Informasi organisasi — visi-misi, struktur, program, hingga kegiatan — hanya disebarluas lewat dokumen dan media sosial, tanpa satu pusat informasi yang terstruktur dan biasa diperbarui tanpa menyentuh kode.",
    solution:
      "Situs profil organisasi yang menggabungkan halaman kelembagaan statis (visi-misi, sejarah, struktur, program, kontak) dengan konten dinamis berupa artikel dan agenda kegiatan, semuanya dapat dikelola dari panel admin.",
    features: [
      "Halaman organisasi: visi-misi, tujuan, tugas & fungsi, sejarah, dan struktur",
      "Artikel (daftar & detail) yang dikelola sebagai CMS",
      "Agenda kegiatan organisasi",
      "Panel admin dengan dashboard, login, dan autentikasi",
    ],
    technicalImplementation:
      "Laravel (Blade) + MySQL: tabel articles dan events, controller Auth/Admin/Home untuk mengatur konten, halaman publik berbasis Blade, serta panel admin untuk login dan CRUD artikel/acara.",
    lessonLearned:
      "Membangun CMS sederhana dari nol dengan Laravel: menyusun relasi konten (artikel & agenda), mengamankan panel admin dengan autentikasi, dan memisahkan rapi antara halaman publik dan area manajemen.",
  },
  6: {
    role: "UI Developer",
    impact: "Halaman publik platform les saya kerjakan profesional dan konsisten: landing, katalog, profil guru, artikel, dan booking.",
    background: "Kontribusi pada web platform les online SKMUI di sisi UI dan halaman-halaman publiknya.",
    problem:
      "Platform les online membutuhkan halaman publik yang responsif dan konsisten antarhalaman — mulai dari promosi program, profil pengajar, artikel, sampai alur pemesanan (booking) yang mudah dipakai pengunjung.",
    solution:
      "Membangun halaman landing (hero, slider program), katalog metode & program beserta halaman detailnya, profil guru, daftar artikel, dan halaman pemesanan (booking); komponen Blade yang sama dipakai ulang antarhalaman agar desain tetap konsisten.",
    features: [
      "Landing page dengan hero dan program slider",
      "Katalog metode & program + halaman detail",
      "Profil pengajar (guru)",
      "Artikel (daftar & detail) dengan komponen card",
      "Halaman booking dan tombol kontak WhatsApp",
    ],
    technicalImplementation:
      "Laravel + Blade components: hero, metode-steps, program-slider, artikel-card, dan whatsapp-button dirangkai menjadi halaman yang DRY dan responsif, dikolaborasikan dengan styling berbasis komponen agar mudah dipelihara.",
    lessonLearned:
      "Terlatih memecah UI menjadi komponen Blade yang dipakai ulang, menjaga konsistensi desain antarhalaman, dan menyusun landing page produk edukasi yang menjual.",
  },
  7: {
    role: "Full Stack Developer",
    impact: "Informasi, jadwal, materi, dan data guru/siswa terpusat dalam satu sistem berbasis peran dengan profil publik sekolah.",
    background: "Sistem informasi sekolah untuk SDN Sukorame 1 Kediri.",
    problem:
      "Informasi sekolah masih tersebar di dokumen manual: jadwal dan materi belajar sulit diakses guru maupun siswa, pengelolaan data guru/siswa tidak terpusat, dan sekolah belum punya wajah daring yang mudah ditemukan masyarakat.",
    solution:
      "Web sistem manajemen sekolah terintegrasi dengan halaman profil sekolah, manajemen jadwal, materi pembelajaran, serta pengelolaan data guru dan siswa.",
    features: [
      "Halaman profil sekolah (publik)",
      "Panel admin dengan CRUD seluruh modul",
      "Panel guru dan siswa berbasis peran",
      "Manajemen jadwal dan materi pembelajaran",
    ],
    technicalImplementation: "Laravel 11 dengan Blade, MySQL, Vite, JavaScript, dan Tailwind CSS.",
    lessonLearned:
      "Membangun aplikasi skala sekolah di Laravel 11: merancang akses berbasis peran (admin/guru/siswa) dari sisi route hingga UI, menata workflow front-end Blade + Vite + Tailwind yang nyaman dipakai, dan menyiapkan halaman profil yang datanya senada fitur internal.",
  },
  8: {
    role: "Mobile & Full Stack Developer",
    impact: "Aplikasi Android e-learning SDN Sukorame 1 yang menyatukan absensi, manajemen admin, dan ujian CBT; berlanjut ke versi Flutter dengan API Express + Prisma.",
    background: "Aplikasi mobile untuk mempermudah akses informasi, jadwal, dan aktivitas SDN Sukorame 1.",
    problem:
      "Halaman web saja tidak cukup bagi pengguna sekolah: siswa (dan wali) perlu memeriksa jadwal, absensi, tugas, dan nilai dari ponsel, sementara guru dan admin perlu mengelola data sekolah secara cepat dari perangkat mobile.",
    solution:
      "Aplikasi mobile sistem manajemen sekolah, dikembangkan di Android (Kotlin) lalu dilanjutkan ke versi Flutter.",
    features: [
      "Autentikasi pengguna",
      "CRUD admin",
      "Skema database format Kurikulum Merdeka",
      "Akses informasi dan jadwal sekolah",
    ],
    technicalImplementation:
      "Versi Android: Kotlin dengan Firebase Firestore (migrasi dari SQLite/Retrofit) dan seeder Node.js untuk koleksi Firestore. Versi Flutter: Flutter dengan Provider, backend Express.js + Prisma.",
    lessonLearned:
      "Belajar mengatur lapisan data aplikasi Android dengan terstruktur (data/model, data/network, SessionManager untuk token) dan menstandarkan kontrak API lewat koleksi Postman sebelum menulis fitur; migrasi ke Firestore dan lanjut ke Flutter memperluas pemahaman lintas platform mobile.",
  },
  9: {
    role: "Frontend Developer & UI Designer",
    impact: "Prototipe dashboard Noora Quran multi-halaman yang bisa didemokan end-to-end (navigasi antarhalaman, pencarian, filter tanggal) tanpa backend.",
    background: "Prototipe front-end dashboard Noora Quran, platform belajar Al-Qur'an daring.",
    problem:
      "Portal belajar Al-Qur'an daring membutuhkan prototipe antarmuka yang cepat diiterasi untuk mendemokan pengalaman peserta program — dari ringkasan program, materi, sampai daftar PR/ujian — sebelum backend tersedia.",
    solution:
      "Dashboard multi-halaman berisi ringkasan program, status pendaftaran, modul materi, daftar PR/ujian dengan pencarian dan filter tanggal, serta FAQ.",
    features: ["Ringkasan program", "Status pendaftaran", "Modul materi", "PR dan ujian dengan pencarian & filter tanggal", "FAQ"],
    technicalImplementation: "HTML dan Tailwind CSS multi-halaman dengan interaksi JavaScript. Tema visual dari hitam/emas menjadi terang.",
    lessonLearned:
      "Prototipe multi-page HTML + Tailwind dengan JS ringan (tanpa framework) melatih saya menyusun struktur dashboard yang rapi, memakai CSS per halaman tetap konsisten, dan memikirkan kebutuhan data nyata sejak tahap mockup.",
  },
};

// Getter dibaca saat render, jadi teks project ikut berganti saat bahasa diubah.
// Indonesia = data di atas; EN/JA = ./projectsI18n.js
const loc = () => i18n.global.locale.value;
const pick = (n, field, fallback) => tr[loc()]?.[n]?.[field] ?? fallback;

export const projects = base.map((p) => {
  const d = details[p.n] ?? {};
  return {
    ...p,
    ...meta[p.n],
    get title() {
      return pick(p.n, "title", p.title);
    },
    get desc() {
      return pick(p.n, "desc", p.desc);
    },
    get category() {
      return categories[loc()]?.[meta[p.n].category] ?? meta[p.n].category;
    },
    get details() {
      const t = tr[loc()]?.[p.n]?.details;
      return t ? { ...d, ...t } : d;
    },
  };
});
