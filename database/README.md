# 🗄️ DATABASE Directory (SQL Schema)

Woi Database Administrator! 👋
Folder ini adalah tempat kalian merancang struktur penyimpanan data. Jangan biarkan folder ini kosong, atau aplikasi kalian bakal error karena gak punya tabel!

## 📂 Apa isi folder ini?

### 1. `init.sql`

- **Status:** File ini sekarang **KOSONG**.
- **Fungsi:** Ini adalah script SQL yang akan dijalankan **OTOMATIS** oleh Docker saat container database pertama kali dibuat.
- **Isi file ini dengan:**
  - `CREATE TABLE ...` (Buat tabel user, barang, dll).
  - `INSERT INTO ...` (Isi data dummy biar pas demo gak sepi-sepi amat).

---

## 🧙‍♂️ How It Works (The Magic)

Kalian gak perlu install XAMPP atau import manual di phpMyAdmin.
Docker Image MySQL punya fitur sakti:

1.  Saat container `db_service` nyala, dia ngecek folder `/docker-entrypoint-initdb.d/`.
2.  File `init.sql` kalian akan dicopy ke situ secara otomatis (cek konfigurasi `volumes` di `docker-compose.yml`).
3.  Kalau database masih kosong, Docker akan mengeksekusi script SQL kalian. **BOOM!** Tabel dan data langsung jadi.

---

## 📝 To-Do List Kalian

1.  **Desain ERD:** Tentukan tabel apa aja yang kalian butuhin.
2.  **Tulis Query:** Buka `init.sql` dan tulis query SQL-nya.

    - _Contoh:_

    ```sql
    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50),
        password VARCHAR(255)
    );

    INSERT INTO users (username, password) VALUES ('admin', 'rahasia123');
    ```

3.  **Test:** Jalankan `docker compose up`.

---

## ⚠️ WARNING: BACA INI KALAU GAK MAU STRESS!!

Masalah paling sering terjadi di umat manusia yang baru belajar Docker Database:

> _"Kak, aku udah update file `init.sql`, kok tabel barunya gak muncul di database?"_

**PENYEBAB:**
File `init.sql` CUMA DIBACA SATU KALI saat database **pertama kali dibuat**. Kalau database udah ada isinya (karena kalian udah pernah `docker compose up` sebelumnya), Docker bakal nyuekin file ini.

**SOLUSI (The Reset Button):**
Kalian harus **HANCURKAN** dulu volume database lama biar Docker bikin ulang dari nol. Caranya:

1. Matikan container dan **hapus volume**:
   ```bash
   docker compose down -v
   ```
   (Flag -v itu kuncinya! Dia bakal nge-wipe data lama).

2. Nyalain lagi:
   ```bash
   docker compose up --build
   ```
*Happy Querying!* 🗄️