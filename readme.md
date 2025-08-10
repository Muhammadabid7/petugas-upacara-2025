# 🇮🇩 Petugas Upacara 2025

**Petugas Upacara 17 Agustus** adalah aplikasi berbasis web yang menampilkan susunan petugas upacara untuk perayaan **HUT RI ke-80** di **SMK Muhammadiyah 1 Sangatta Utara**.  
Dibuat dengan **Next.js** + **TypeScript**, di-deploy menggunakan **Netlify**, dan dirancang untuk tampil minimalis, fokus, serta mudah diakses.

---

## ✨ Fitur Utama
- 📋 **Daftar Petugas Lengkap** – menampilkan susunan MC, pembaca teks Pancasila, UUD 1945, Janji Pelajar, Doa, Pemimpin Upacara, dan lainnya.
- 📱 **Responsive Design** – nyaman diakses lewat desktop maupun smartphone.
- ⚡ **Cepat & Ringan** – memanfaatkan Static Site Generation (SSG) dari Next.js.
- ☁ **Deploy Otomatis** – setiap update di GitHub otomatis ter-*deploy* ke Netlify.

---

## 🛠 Tech Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** [Netlify](https://www.netlify.com/)

---

## 📂 Struktur Project
```bash
petugas-upacara-2025/
├── app/             # Halaman utama & routing Next.js
├── components/      # Komponen UI
├── hooks/           # Custom React Hooks
├── lib/             # Utility functions
├── public/          # Asset publik (gambar, ikon)
├── styles/          # File CSS global
├── next.config.mjs  # Konfigurasi Next.js
├── tsconfig.json    # Konfigurasi TypeScript
└── netlify.toml     # Konfigurasi deployment Netlify
```

---

🚀 Cara Menjalankan Project Secara Lokal

1. Clone repository

git clone https://github.com/Muhammadabid7/petugas-upacara-2025.git
cd petugas-upacara-2025


2. Install dependencies

npm install
# atau
yarn install


3. Jalankan server development

npm run dev
# atau
yarn dev


4. Akses di browser

http://localhost:3000




---

🌍 Deployment

Project ini di-deploy menggunakan Netlify.
Setiap commit ke branch main akan otomatis memicu build dan update website.

🔗 Live Website: https://petugas-upacara.netlify.app


---

📜 Lisensi

Proyek ini dilisensikan di bawah MIT License.


---

> Dirancang dengan ❤️ oleh Muhammad Abid
"Minimalisme bukan sekadar kekosongan, melainkan menitikberatkan pada hal-hal yang esensial."