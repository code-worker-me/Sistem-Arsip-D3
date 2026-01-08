# 🧠 APP Directory (Backend Logic)

Halo Challenger! 👋
Folder ini adalah **"Dapur Pacu"** dari aplikasi kalian. Di sinilah semua logika Node.js, Express Routing, dan tampilan EJS kalian dibuat.

## 📂 Penjelasan Struktur File & Folder

Agar kodingan kalian rapi dan standar industri, patuhi fungsi file/folder berikut:

### 1. `app.js` (Main Entry Point)

- **Fungsi:** Jantung aplikasi kalian. File ini yang pertama kali dijalankan oleh Node.js saat container nyala.
- **Tugas Kalian:**
  - Inisialisasi Express Framework.
  - Setup Middleware (View Engine EJS, Folder Public, Body Parser).
  - Panggil file-file dari folder `routes/`.
  - Jalankan server dengan `app.listen()`.

### 2. `config/` (Database Connection)

- **Fungsi:** Tempat menyimpan file konfigurasi koneksi ke database (MySQL).
- **Rules:**
  - Jangan pernah menulis _password_ database secara langsung (Hardcode) di sini.
  - Gunakan `process.env.DB_PASS` untuk mengambil password dari environment variable.

### 3. `routes/` (Traffic Controller)

- **Fungsi:** Tempat mengatur jalur URL (Endpoint).
- **Tips:**
  - Pisahkan logic routing. Misalnya: `index.js` untuk halaman utama, `api.js` untuk pemrosesan data JSON.
  - Jangan taruh logic query SQL yang terlalu panjang di sini (kalau bisa pisah ke Controller/Model, tapi kalau simpel di sini juga oke).

### 4. `view/` (Frontend/UI)

- **Fungsi:** Tempat file `.ejs` (Template Engine).
- **`view/partials/`:** Folder khusus untuk potongan UI yang dipakai berulang-ulang.
  - Contoh: `navbar.ejs`, `footer.ejs`, `header.ejs`.
  - _Kenapa?_ Biar kalau mau ganti menu navbar, cukup edit satu file aja, gak perlu edit semua halaman.

### 5. `Dockerfile` (The Recipe)

- **Fungsi:** Instruksi untuk Docker bagaimana cara membungkus (Build) aplikasi Node.js ini menjadi Image.
- **Wajib Cek:** Pastikan `EXPOSE port` di dalamnya sesuai dengan port yang kalian set di `app.js` (Default: 3000).

---

## 🚀 To-Do List di Folder Ini

1.  **Install Dependencies:**
    Sebelum mulai ngoding, masuk ke folder ini via terminal dan jalankan:

    ```bash
    npm install
    ```

    _(Ini akan membaca `package.json` dan menginstall library seperti express, mysql2, dotenv, dll)_.

2.  **Coding Time:**
    Silakan isi file-file kosong tersebut dengan logika aplikasi CRUD rancangan kelompok kalian.

3.  **Testing Local:**
    Bisa dicoba jalankan manual dulu dengan `npm run dev` (pastikan database lokal nyala) sebelum dibungkus ke Docker.

---

## ⚠️ PERINGATAN KERAS

- **PORT MATCHING:** Pastikan port yang ditulis di `app.js` (misal: 3000) **SAMA** dengan port yang kalian buka di `docker-compose.yml` dan `Dockerfile`. Kalau beda, container jalan tapi gak bisa diakses!

*Happy Coding!* 💻