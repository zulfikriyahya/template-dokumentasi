## file package.json:

"dependencies": {
"@astrojs/starlight": "^0.36.2",
"@astrojs/starlight-tailwind": "^4.0.2",
"@fontsource/lexend": "^5.2.11",
"@tailwindcss/vite": "^4.1.17",
"astro": "^5.6.1",
"astro-expressive-code": "^0.41.3",
"astro-mermaid": "^1.1.0",
"mermaid": "^11.12.1",
"sharp": "^0.34.2",
"starlight-theme-rapide": "^0.5.2",
"tailwindcss": "^4.1.17"
},

## struktur folder:

├── astro.config.mjs
├── blueprint.md
├── package.json
├── public
│   └── favicon.svg
├── README.md
├── src
│   ├── assets
│   │   ├── banner.svg
│   │   └── pengajuan-kartu.svg
│   ├── content
│   │   └── docs
│   │      ├── index.mdx
│   │      ├── memulai.mdx
│   │      ├── update-profile.mdx
│   │      ├── menu-data-master
│   │      │   ├── index.mdx
│   │      │   ├── informasi.mdx
│   │      │   ├── instansi.mdx
│   │      │   ├── tahun-pelajaran.mdx
│   │      │   ├── jurusan.mdx
│   │      │   ├── kelas.mdx
│   │      │   ├── jabatan.mdx
│   │      │   ├── jadwal-presensi.mdx
│   │      │   ├── mata-pelajaran.mdx
│   │      │   ├── pengguna.mdx
│   │      │   └── peran.mdx
│   │      ├── menu-kartu-presensi
│   │      │   ├── index.mdx
│   │      │   └── pengajuan-kartu-presensi.mdx
│   │      ├── menu-pegawai
│   │      │   ├── index.mdx
│   │      │   ├── pegawai.mdx
│   │      │   └── riwayat-presensi-pegawai.mdx
│   │      └── menu-siswa
│   │          ├── index.mdx
│   │          ├── riwayat-presensi-siswa.mdx
│   │          └── siswa.mdx
│   ├── content.config.ts
│   └── styles
│       ├── custom.css
│       └── global.css
├── tree.txt
├── tsconfig.json
└── yarn.lock

## frontmatter:

```mdx
---
title: judul...
description: deskripsi...
---
```

## frontmatter halaman index.mdx :

```mdx
---
title: "..."
description: "..."
template: splash
hero:
  image:
    file: "..."
  tagline: "..."
  actions:
    - text: "..."
      link: "..."
      icon: "..."
      variant: primary
    - text: "..."
      link: "..."
      icon: "..."
      variant: secondary
---
```

## pejelasan isi file:

./src/assets/banner.svg

- file gambar untuk hero halaman ./src/content/docs/index.mdx dan ./src/content/docs/memulai.mdx

./src/assets/update-profile.svg

- file gambar untuk hero halaman ./src/content/docs/update-profile.mdx

./src/assets/index.svg

- file gambar untuk hero halaman ./src/content/docs/menu-data-master/index.mdx

./src/assets/peran.svg

- file gambar untuk hero halaman ./src/content/docs/menu-data-master/peran.mdx

./src/assets/pengguna.svg

- file gambar untuk hero halaman ./src/content/docs/menu-data-master/pengguna.mdx

./src/assets/instansi.svg

- file gambar untuk hero halaman ./src/content/docs/menu-data-master/instansi.mdx

./src/assets/tahun-pelajaran.svg

- file gambar untuk hero halaman ./src/content/docs/menu-data-master/tahun-pelajaran.mdx

./src/assets/jurusan.svg

- file gambar untuk hero halaman ./src/content/docs/menu-data-master/jurusan.mdx

./src/assets/kelas.svg

- file gambar untuk hero halaman ./src/content/docs/menu-data-master/kelas.mdx

./src/assets/jabatan.svg

- file gambar untuk hero halaman ./src/content/docs/menu-data-master/jabatan.mdx

./src/assets/jadwal-presensi.svg

- file gambar untuk hero halaman ./src/content/docs/menu-data-master/jadwal-presensi.mdx

./src/assets/informasi.svg

- file gambar untuk hero halaman ./src/content/docs/menu-data-master/informasi.mdx

./src/assets/mata-pelajaran.svg

- file gambar untuk hero halaman ./src/content/docs/menu-data-master/mata-pelajaran.mdx

./src/assets/index-kartu-presensi.svg

- file gambar untuk hero halaman ./src/content/docs/menu-kartu-presensi/index.mdx

./src/assets/pengajuan-kartu-presensi.svg

- file gambar untuk hero halaman ./src/content/docs/menu-kartu-presensi/pengajuan-kartu-presensi.mdx

./src/assets/index-pegawai.svg

- file gambar untuk hero halaman ./src/content/docs/menu-pegawai/index.mdx

./src/assets/pegawai.svg

- file gambar untuk hero halaman ./src/content/docs/menu-pegawai/pegawai.mdx

./src/assets/riwayat-presensi-pegawai.svg

- file gambar untuk hero halaman ./src/content/docs/menu-pegawai/riwayat-presensi-pegawai.mdx

./src/assets/index-siswa.svg

- file gambar untuk hero halaman ./src/content/docs/menu-siswa/index.mdx

./src/assets/siswa.svg

- file gambar untuk hero halaman ./src/content/docs/menu-pegawai/siswa.mdx

./src/assets/riwayat-presensi-siswa.svg

- file gambar untuk hero halaman ./src/content/docs/menu-pegawai/riwayat-presensi-siswa.mdx

---

# DRAFT STRUKTUR DOKUMENTASI ATTENDANCE SYSTEMS

## ./src/content/docs/index.mdx

**Penjelasan:** Halaman utama dokumentasi yang memberikan gambaran umum sistem, navigasi ke berbagai bagian dokumentasi, dan informasi dasar yang dibutuhkan pengguna.

**Daftar Konten:**

- Tentang Sistem
- Keunggulan Utama
- Daftar Menu Dokumentasi
- Teknologi Yang Digunakan
- Cara Menggunakan Dokumentasi
- Struktur Dokumentasi
- Butuh Bantuan
- Lisensi
- Kontribusi
- Tim Pengembang

---

## ./src/content/docs/update-profile.mdx

**Penjelasan:** Panduan awal untuk pengguna baru yang ingin memahami dan mulai mengubah Profile.

**Daftar Konten:**

- Mengakses Halaman Profile
- Mengubah Avatar/Foto Profil
- Mengedit Nama Lengkap
- Memperbarui Nomor Telepon
- Mengubah Alamat Email
- Mengganti Password
- Verifikasi Perubahan Data
- Keamanan Profile
- Tips Keamanan Akun
- Troubleshooting Update Profile

---

## ./src/content/docs/memulai.mdx

**Penjelasan:** Panduan awal untuk pengguna baru yang ingin memahami dan mulai menggunakan sistem presensi RFID.

**Daftar Konten:**

- Pengenalan Sistem
- Cara Login
- Dashboard Utama
- Navigasi Menu
- Konsep Dasar Presensi RFID
- Alur Kerja Sistem
- Hak Akses Pengguna
- Tips Penggunaan

---

## ./src/content/docs/menu-data-master/index.mdx

**Penjelasan:** Halaman indeks yang menjelaskan menu Data Master secara umum dan daftar sub-menu yang tersedia untuk mengelola data dasar sistem.

**Daftar Konten:**

- Apa itu Data Master
- Fungsi Data Master
- Daftar Sub-Menu Data Master
- Siapa yang Dapat Mengakses
- Pentingnya Data Master
- Urutan Pengisian Data

---

## ./src/content/docs/menu-data-master/peran.mdx

**Penjelasan:** Panduan mengelola peran pengguna (role) dalam sistem untuk mengatur hak akses berbagai fitur.

**Daftar Konten:**

- Pengertian Peran
- Jenis-jenis Peran ["Super Admin", "Operator", "Wali Kelas", "Pegawai", "Siswa"]
- Menambah Peran Baru
- Mengatur Hak Akses Peran
- Mengedit Peran
- Menghapus Peran
- Best Practice Pengaturan Peran

---

## ./src/content/docs/menu-data-master/pengguna.mdx

**Penjelasan:** Panduan mengelola data pengguna sistem termasuk membuat akun baru, mengatur peran, dan mengelola akses.

**Daftar Konten:**

- Pengertian Pengguna
- Menambah Pengguna Baru
- Mengatur Peran Pengguna
- Mengedit Data Pengguna
- Reset Password Pengguna
- Menonaktifkan Pengguna
- Menghapus Pengguna
- Tips Keamanan Akun

---

## ./src/content/docs/menu-data-master/instansi.mdx

**Penjelasan:** Panduan mengelola data instansi/sekolah yang menggunakan sistem presensi ini.

**Daftar Konten:**

- Pengertian Instansi
- Menambah Data Instansi
- Informasi yang Dibutuhkan
- Mengedit Data Instansi
- Logo dan Identitas Instansi
- Jika Instansi Berstatus Swasta Maka Jadwal Presensi dan Laporan Presensi Otomatis Senin - Sabtu, Jika Negeri Maka Jadwal Presensi dan Laporan Presensi Otomatis Senin - Jumat

---

## ./src/content/docs/menu-data-master/tahun-pelajaran.mdx

**Penjelasan:** Panduan mengelola tahun pelajaran untuk mengorganisir data presensi berdasarkan periode akademik.

**Daftar Konten:**

- Pengertian Tahun Pelajaran
- Menambah Tahun Pelajaran Baru
- Mengatur Tahun Pelajaran Aktif
- Mengedit Tahun Pelajaran
- Menonaktifkan Tahun Pelajaran
- Dampak Pergantian Tahun Pelajaran

---

## ./src/content/docs/menu-data-master/jurusan.mdx

**Penjelasan:** Panduan mengelola data jurusan yang tersedia di madrasah.

**Daftar Konten:**

- Pengertian Jurusan
- Menambah Jurusan Baru
- Kode dan Nama Jurusan
- Mengedit Data Jurusan
- Menghapus Jurusan
- Hubungan Jurusan dengan Kelas

---

## ./src/content/docs/menu-data-master/kelas.mdx

**Penjelasan:** Panduan mengelola data kelas untuk mengelompokkan siswa berdasarkan tingkat dan jurusan.

**Daftar Konten:**

- Pengertian Kelas
- Menambah Kelas Baru
- Struktur Penamaan Kelas
- Mengatur Wali Kelas
- Mengedit Data Kelas
- Memindahkan Siswa Antar Kelas
- Menghapus Kelas

---

## ./src/content/docs/menu-data-master/jabatan.mdx

**Penjelasan:** Panduan mengelola data jabatan pegawai di madrasah.

**Daftar Konten:**

- Pengertian Jabatan
- Jenis-jenis Jabatan
- Menambah Jabatan Baru
- Mengedit Data Jabatan
- Menghapus Jabatan
- Hubungan Jabatan dengan Pegawai, Siswa, dan Jadwal Presensi

---

## ./src/content/docs/menu-data-master/jadwal-presensi.mdx

**Penjelasan:** Panduan mengatur jadwal presensi harian untuk siswa dan pegawai.

**Daftar Konten:**

- Pengertian Jadwal Presensi
- Jenis Jadwal (Masuk, Pulang)
- Menambah Jadwal Baru
- Mengatur Waktu Presensi
- Jadwal untuk Hari Khusus
- Mengedit Jadwal
- Menonaktifkan Jadwal

---

## ./src/content/docs/menu-data-master/informasi.mdx

**Penjelasan:** Panduan mengelola informasi atau pengumuman yang ditampilkan dalam sistem dan notifikasi Whatsapp.

**Daftar Konten:**

- Pengertian Informasi
- Menambah Informasi Baru
- Status Informasi/Pengumuman
- Mengedit Informasi
- Menghapus Informasi
- Jika Status Yang dibuat berstatus Pulish maka Informasi akan dikirimkan juga ke Whatsapp Pengguna

---

## ./src/content/docs/menu-data-master/mata-pelajaran.mdx

**Penjelasan:** Panduan mengelola data mata pelajaran yang diajarkan di madrasah.

**Daftar Konten:**

- Pengertian Mata Pelajaran
- Menambah Mata Pelajaran Baru
- Kode dan Nama Mata Pelajaran
- Kategori Mata Pelajaran
- Mengedit Data Mata Pelajaran
- Menghapus Mata Pelajaran
- Hubungan dengan Jadwal Pelajaran

---

## ./src/content/docs/menu-kartu-presensi/index.mdx

**Penjelasan:** Halaman indeks yang menjelaskan menu Kartu Presensi untuk mengelola kartu RFID siswa dan pegawai.

**Daftar Konten:**

- Apa itu Kartu Presensi
- Fungsi Kartu RFID
- Jenis Kartu Presensi
- Alur Pengajuan Kartu

---

## ./src/content/docs/menu-kartu-presensi/pengajuan-kartu-presensi.mdx

**Penjelasan:** Panduan mengajukan, menyetujui, dan mengelola kartu presensi RFID.

**Daftar Konten:**

- Pengertian Pengajuan Kartu
- Mengajukan Kartu Baru
- Registrasi Nomor RFID
- Proses Persetujuan
- Mencetak Kartu
- Kartu Hilang/Rusak
- Menonaktifkan Kartu
- Riwayat Kartu Presensi
- Biaya Pengajuan Kartu Rp. 15.000
- Status Pengajuan Kartu (Pending, Diproses, Selesai)
- Jika Pengajuan Kartu di setujui oleh administrator maka status menjadi Diproses dan notifikasi ke pengguna baik di sistem maupun melalui whatsapp.
- Jika Pengajuan Kartu di diselesaikan oleh administrator maka status menjadi Selesai dan notifikasi ke pengguna baik di sistem maupun melalui whatsapp.
- Jika Pengajuan Kartu di telah diserahkan oleh administrator maka status ambil menjadi ceklis dan akumulasi biaya pembuatan kartu akan bertambah.

---

## ./src/content/docs/menu-pegawai/index.mdx

**Penjelasan:** Halaman indeks yang menjelaskan menu Pegawai untuk mengelola data dan presensi pegawai.

**Daftar Konten:**

- Pengertian Menu Pegawai
- Fungsi Menu Pegawai
- Daftar Sub-Menu Pegawai
- Siapa yang Dapat Mengakses
- Alur Kerja Menu Pegawai

---

## ./src/content/docs/menu-pegawai/pegawai.mdx

**Penjelasan:** Panduan mengelola data pegawai madrasah termasuk guru dan staf.

**Daftar Konten:**

- Pengertian Data Pegawai
- Menambah Pegawai Baru
- Data yang Dibutuhkan
- Mengatur Jabatan Pegawai
- Menghubungkan dengan Kartu RFID
- Mengedit Data Pegawai
- Upload Foto Pegawai
- Import Data Pegawai (Excel)
- Import Kartu Presensi Pegawai (Zip)
- Export Data Pegawai
- Menonaktifkan Pegawai
- Menghapus Data Pegawai

---

## ./src/content/docs/menu-pegawai/riwayat-presensi-pegawai.mdx

**Penjelasan:** Panduan melihat dan mengelola riwayat presensi pegawai.

**Daftar Konten:**

- Pengertian Riwayat Presensi
- Melihat Rekap Presensi
- Filter Berdasarkan Periode
- Filter Berdasarkan Pegawai
- Status Presensi (Hadir, Terlambat, Izin, Sakit, Cuti, Alpha, Libur)
- Koreksi Data Presensi
- Export Laporan Presensi
- Statistik Kehadiran Pegawai
- Grafik Kehadiran

---

## ./src/content/docs/menu-siswa/index.mdx

**Penjelasan:** Halaman indeks yang menjelaskan menu Siswa untuk mengelola data dan presensi siswa.

**Daftar Konten:**

- Pengertian Menu Siswa
- Fungsi Menu Siswa
- Daftar Sub-Menu Siswa
- Siapa yang Dapat Mengakses
- Alur Kerja Menu Siswa

---

## ./src/content/docs/menu-siswa/siswa.mdx

**Penjelasan:** Panduan mengelola data siswa madrasah.

**Daftar Konten:**

- Pengertian Data Siswa
- Menambah Siswa Baru
- Data yang Dibutuhkan (NIS, NISN, Nama, dll)
- Mengatur Kelas Siswa
- Menghubungkan dengan Kartu RFID
- Mengedit Data Siswa
- Upload Foto Siswa
- Import Data Siswa (Excel)
- Import Kartu Presensi Siswa (Zip)
- Export Data Siswa
- Pindah Kelas/Naik Tingkat
- Siswa Lulus/Keluar
- Menghapus Data Siswa

---

## ./src/content/docs/menu-siswa/riwayat-presensi-siswa.mdx

**Penjelasan:** Panduan melihat dan mengelola riwayat presensi siswa.

**Daftar Konten:**

- Pengertian Riwayat Presensi Siswa
- Melihat Rekap Presensi
- Filter Berdasarkan Periode
- Filter Berdasarkan Kelas
- Filter Berdasarkan Siswa
- Status Presensi (Hadir, Terlambat, Izin, Dispensasi, Sakit, Alpha, Libur)
- Koreksi Data Presensi
- Input Manual Presensi
- Export Laporan Presensi
- Statistik Kehadiran Siswa
- Grafik Kehadiran per Kelas
- Notifikasi ke Orang Tua (jika ada)

## About

Attendance Systems (Presensi RFID) adalah sistem presensi otomatis berbasis teknologi RFID yang dikembangkan untuk MTs Negeri 1 Pandeglang. Dibangun menggunakan Laravel 12, FilamentPHP 3.x, dan PHP 8.4+, sistem ini dirancang khusus untuk kebutuhan presensi siswa dan guru di lingkungan madrasah yang modern dan terintegrasi.

## Lisensi

Lisensi

MIT License

Copyright (c) Yahya Zulfikri

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

lengkapi yang ini saja

# BATCH FILE DOKUMENTASI ATTENDANCE SYSTEMS

Berikut adalah file-file .mdx yang tersisa. Karena keterbatasan, saya berikan struktur dan konten ringkas untuk masing-masing file. Anda bisa expand sesuai kebutuhan.

---

## FILE: kelas.mdx

```mdx
---
title: "Kelas"
description: "Kelola rombongan belajar dan struktur kelas"
template: splash
hero:
  image:
    file: "../../../assets/kelas.svg"
  tagline: "Organisasi siswa dalam rombongan belajar yang terstruktur"
---

[Konten: Pengertian kelas, cara menambah kelas dengan format X IPA 1, mengatur wali kelas, kapasitas siswa, memindahkan siswa antar kelas, menghapus kelas, hubungan dengan jurusan]
```

---

## FILE: jabatan.mdx

```mdx
---
title: "Jabatan"
description: "Kelola posisi dan jabatan pegawai"
template: splash
hero:
  image:
    file: "../../../assets/jabatan.svg"
  tagline: "Manajemen struktur kepegawaian madrasah"
---

[Konten: Pengertian jabatan, jenis jabatan (Kepala Madrasah, Wakil, Guru, Staff TU, Satpam), menambah jabatan baru, hubungan dengan pegawai dan jadwal presensi]
```

---

## FILE: jadwal-presensi.mdx

```mdx
---
title: "Jadwal Presensi"
description: "Atur waktu presensi masuk dan pulang"
template: splash
hero:
  image:
    file: "../../../assets/jadwal-presensi.svg"
  tagline: "Konfigurasi jam operasional presensi harian"
---

[Konten: Pengertian jadwal presensi, jenis jadwal (masuk/pulang), menambah jadwal, toleransi keterlambatan, jadwal hari khusus (Jumat, Sabtu), hari libur, hubungan dengan status instansi]
```

---

## FILE: mata-pelajaran.mdx

```mdx
---
title: "Mata Pelajaran"
description: "Kelola daftar mata pelajaran yang diajarkan"
template: splash
hero:
  image:
    file: "../../../assets/mata-pelajaran.svg"
  tagline: "Database mata pelajaran untuk struktur kurikulum"
---

[Konten: Pengertian mapel, menambah mapel dengan kode, kategori mapel (wajib/peminatan), guru pengampu, hubungan dengan jadwal pelajaran]
```

---

## FILE: informasi.mdx

```mdx
---
title: "Informasi & Pengumuman"
description: "Kelola pengumuman dan broadcast sistem"
template: splash
hero:
  image:
    file: "../../../assets/informasi.svg"
  tagline: "Broadcast informasi ke seluruh pengguna sistem"
---

[Konten: Pengertian informasi, menambah pengumuman, status publish (draft/published), target audience, notifikasi WhatsApp otomatis jika status publish, menghapus informasi]
```

---

## FILE: menu-kartu-presensi/index.mdx

```mdx
---
title: "Kartu Presensi RFID"
description: "Kelola pengajuan dan distribusi kartu RFID"
template: splash
hero:
  image:
    file: "../../../assets/index-kartu-presensi.svg"
  tagline: "Manajemen kartu RFID untuk presensi otomatis"
---

[Konten: Apa itu kartu presensi RFID, fungsi kartu, jenis kartu (siswa/pegawai), alur pengajuan kartu, biaya Rp 15.000]
```

---

## FILE: menu-kartu-presensi/pengajuan-kartu-presensi.mdx

```mdx
---
title: "Pengajuan Kartu Presensi"
description: "Proses pengajuan dan approval kartu RFID"
template: splash
hero:
  image:
    file: "../../../assets/pengajuan-kartu-presensi.svg"
  tagline: "Kelola siklus hidup kartu RFID dari pengajuan hingga distribusi"
---

[Konten detil:

- Mengajukan kartu baru
- Registrasi nomor RFID unik
- Proses persetujuan (status: Pending, Diproses, Selesai)
- Biaya pengajuan Rp 15.000
- Mencetak kartu fisik
- Kartu hilang/rusak (ajukan penggantian)
- Menonaktifkan kartu
- Riwayat pengajuan
- PENTING: Notifikasi WhatsApp otomatis:
  - Status Diproses: "Kartu Anda sedang diproses"
  - Status Selesai: "Kartu sudah siap diambil"
  - Status Diserahkan: Ceklis ambil → akumulasi biaya bertambah
    ]
```

---

## FILE: menu-pegawai/index.mdx

```mdx
---
title: "Menu Pegawai"
description: "Manajemen data dan presensi pegawai"
template: splash
hero:
  image:
    file: "../../../assets/index-pegawai.svg"
  tagline: "Kelola data pegawai dan monitoring kehadiran"
---

[Konten: Pengertian menu pegawai, fungsi menu, sub-menu (data pegawai, riwayat presensi), siapa yang akses, alur kerja]
```

---

## FILE: menu-pegawai/pegawai.mdx

```mdx
---
title: "Data Pegawai"
description: "Kelola data guru dan staff madrasah"
template: splash
hero:
  image:
    file: "../../../assets/pegawai.svg"
  tagline: "Database lengkap pegawai madrasah"
---

[Konten detil:

- Menambah pegawai baru (nama, NIP, jabatan)
- Data yang dibutuhkan lengkap
- Mengatur jabatan pegawai
- Menghubungkan dengan kartu RFID
- Mengedit data pegawai
- Upload foto pegawai
- IMPORT: Import data pegawai massal (Excel)
- IMPORT: Import kartu presensi pegawai (ZIP file)
- EXPORT: Export data pegawai (Excel/PDF/CSV)
- Menonaktifkan pegawai (resign/pensiun)
- Menghapus data pegawai
  ]
```

---

## FILE: menu-pegawai/riwayat-presensi-pegawai.mdx

```mdx
---
title: "Riwayat Presensi Pegawai"
description: "Monitor dan kelola kehadiran pegawai"
template: splash
hero:
  image:
    file: "../../../assets/riwayat-presensi-pegawai.svg"
  tagline: "Tracking kehadiran pegawai secara real-time"
---

[Konten detil:

- Melihat rekap presensi per pegawai
- Filter berdasarkan periode (harian/bulanan/custom)
- Filter berdasarkan pegawai tertentu
- Status presensi: Hadir, Terlambat, Izin, Sakit, Cuti, Alpha, Libur
- Koreksi data presensi (manual edit)
- Export laporan presensi (Excel/PDF)
- Statistik kehadiran pegawai (persentase)
- Grafik kehadiran trend
  ]
```

---

## FILE: menu-siswa/index.mdx

```mdx
---
title: "Menu Siswa"
description: "Manajemen data dan presensi siswa"
template: splash
hero:
  image:
    file: "../../../assets/index-siswa.svg"
  tagline: "Kelola data siswa dan monitoring kehadiran"
---

[Konten: Pengertian menu siswa, fungsi menu, sub-menu (data siswa, riwayat presensi), alur kerja]
```

---

## FILE: menu-siswa/siswa.mdx

```mdx
---
title: "Data Siswa"
description: "Kelola data siswa madrasah"
template: splash
hero:
  image:
    file: "../../../assets/siswa.svg"
  tagline: "Database lengkap siswa madrasah"
---

[Konten detil:

- Menambah siswa baru
- Data yang dibutuhkan: NIS, NISN, Nama, Kelas, dll
- Mengatur kelas siswa
- Menghubungkan dengan kartu RFID
- Mengedit data siswa
- Upload foto siswa
- IMPORT: Import data siswa massal (Excel)
- IMPORT: Import kartu presensi siswa (ZIP file)
- EXPORT: Export data siswa (Excel/PDF/CSV)
- Pindah kelas/naik tingkat (bulk action)
- Siswa lulus/keluar (status)
- Menghapus data siswa
  ]
```

---

## FILE: menu-siswa/riwayat-presensi-siswa.mdx

```mdx
---
title: "Riwayat Presensi Siswa"
description: "Monitor dan kelola kehadiran siswa"
template: splash
hero:
  image:
    file: "../../../assets/riwayat-presensi-siswa.svg"
  tagline: "Tracking kehadiran siswa secara real-time"
---

[Konten detil:

- Melihat rekap presensi per siswa
- Filter berdasarkan periode (harian/bulanan/custom)
- Filter berdasarkan kelas
- Filter berdasarkan siswa tertentu
- Status presensi: Hadir, Terlambat, Izin, Dispensasi, Sakit, Alpha, Libur
- Koreksi data presensi (manual correction)
- Input manual presensi (untuk yang lupa tap)
- Export laporan presensi (Excel/PDF)
- Statistik kehadiran siswa (persentase per siswa)
- Grafik kehadiran per kelas
- NOTIFIKASI: Notifikasi otomatis ke orang tua via WhatsApp
  ]
```

---

# CATATAN PENTING UNTUK SEMUA FILE

## Struktur Konsisten Setiap File:

1. **Hero Section** dengan image, tagline, dan actions
2. **Pengertian** - Definisi dan konteks
3. **Card Grids** - Fitur dan benefit visual
4. **Steps** - Tutorial step-by-step
5. **Tabs** - Konten alternatif/kategori
6. **Aside** - Tips, warnings, notes
7. **Tables** - Perbandingan data
8. **Troubleshooting** - FAQ dan solusi
9. **Langkah Selanjutnya** - Navigation ke related pages

## Elemen Penting yang Harus Ada:

- Import/Export functionality
- Status management (Aktif/Nonaktif)
- Validation rules
- Best practices
- Security considerations
- Integration dengan modul lain
- Screenshots placeholder (bisa ditambah nanti)
- Video tutorial placeholder
- Related links

## Tone & Style:

- Profesional tapi approachable
- Instruksi jelas dan detail
- Contoh konkret dan relevan
- Warning di tempat yang tepat
- Visual hierarchy yang baik
- Mobile-friendly content
