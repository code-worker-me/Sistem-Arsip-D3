# 🚀 Template Project Akhir - Teknologi Server

Welcome, Challengers! 👋
Ini adalah **Starter Pack** (Kerangka Awal) untuk Project Akhir kalian. Repository ini sengaja dibuat **"Barebones"** (Kosongan) agar kalian bisa membangun arsitektur server dari dasar dengan struktur yang rapi.

## 📂 Struktur Folder

Berikut adalah kondisi awal file yang kalian terima:

### 1. `/app` (Backend Application)
- **Status:** Sudah di-init (`npm init`), tapi belum ada logic apapun.
- **Isi:** Folder `routes`, `views`, dan `views/partials` sudah disiapkan.
- **Tugas Kalian:**
  - Install library yang dibutuhkan (`express`, `mysql2`, `dotenv`, dll).
  - Isi logic backend, routing, dan tampilan frontend kalian di sini.

### 2. `/database` (SQL Schema)
- **Status:** Ada file `init.sql` tapi **KOSONG**.
- **Tugas Kalian:**
  - Isi file ini dengan Query SQL (`CREATE TABLE`, `INSERT INTO`) sesuai rancangan database kalian.
  - File ini nanti akan dieksekusi otomatis oleh Docker saat container database pertama kali nyala.

### 3. `/nginx` (Reverse Proxy)
- **Status:** Ada file `default.conf` tapi **KOSONG**.
- **Tugas Kalian:**
  - Tulis konfigurasi Nginx agar bisa mem-proxy request dari Port 80/8081 ke aplikasi Node.js kalian.

### 4. `docker-compose.yml` (The Orchestrator)
- **Status:** Skeleton Only (Kerangka Dasar).
- **Warning:** Bagian `networks` dan `volumes` sengaja **DIHAPUS**.
- **Tugas Kalian:**
  - Lengkapi service definition (App, DB, Nginx).
  - **WAJIB:** Tambahkan konfigurasi `volumes` agar data database **PERSISTENT** (Tidak hilang saat restart).
  - Setup `networks` agar antar-container bisa saling ngobrol.

---

## 🛠️ Cara Menggunakan Template Ini

1.  **Clone Repository:**
    ```bash
    git clone [https://github.com/kakonoomoidee/praktikum-tekser-template.git](https://github.com/kakonoomoidee/praktikum-tekser-template.git) [NAMA_PROJECT_KELIAN]
    ```

2.  **Bersihkan Jejak Git Lama (PENTING!):**
    Masuk ke folder, lalu hapus git bawaan agar bisa di-push ke repo kelompok kalian sendiri.
    ```bash
    cd [NAMA_PROJECT_KELIAN]
    rm -rf .git
    git init
    ```

3.  **Setup Environment Variable (CRUCIAL):**
    Copy file template environment menjadi file `.env` aktif.
    ```bash
    cp .env.example .env
    ```
    > **Tugas:** Buka file `.env` tersebut, lalu isi `GROUP_NAME`, `APP_PORT`, dan konfigurasi Database sesuai rancangan kelompok kalian.

4.  **Mulai Coding!**
    - Silakan bagi tugas sesuai Role yang sudah disepakati (Backend, DevOps, Database).
    - Pastikan semua password database diambil dari process.env (Jangan di-hardcode!).

---

## ⚠️ Rules of Thumb

- **Don't Touch:** Jangan ubah nama folder utama (`app`, `database`, `nginx`) biar asisten gampang ngeceknya.
- **Docker First:** Pastikan aplikasi bisa jalan cuma dengan satu perintah: `docker compose up`.
- **No Localhost:** Di dalam `docker-compose` dan `.env`, gunakan **Nama Service** sebagai host (bukan localhost).

_Selamat Berjuang! May the Server be with you._ 🚀