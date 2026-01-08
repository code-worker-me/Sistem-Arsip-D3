# 🛡️ NGINX Directory (Reverse Proxy)

Hola Network Engineer! 👋
Folder ini adalah tempat tinggalnya **"Satpam"** atau **"Polisi Lalu Lintas"** aplikasi kalian. Nginx bertugas menerima request dari user (Browser) lalu meneruskannya ke aplikasi Node.js kalian.

## 📂 Kenapa Kita Butuh Nginx?

1.  **Standard Port:** Aplikasi Node.js biasanya jalan di port aneh (3000, 8080). Nginx bikin aplikasi kita bisa diakses lewat port standar web (80).
2.  **Security:** Nginx menyembunyikan identitas asli server backend kalian.
3.  **Load Balancer:** Kalau nanti backend kalian ada banyak, Nginx yang bagi-bagi tugasnya.

---

## 📝 Tugas Kalian: Konfigurasi `default.conf`

File `default.conf` di folder ini sekarang **KOSONG** (atau cuma kerangka). Tugas kalian adalah mengisinya agar Nginx bisa ngobrol sama Container App.

### Struktur Konfigurasi Dasar

Silakan copy struktur ini, tapi **JANGAN ASAL COPY!** Sesuaikan variabel di dalam kurung siku `[...]`.

```nginx
server {
    # 1. Listen di Port 80 (Port internal container Nginx)
    listen 80;
    server_name localhost;

    # 2. Atur Routing (Semua request ke '/' akan diarahkan ke App)
    location / {
        # PENTING: Ganti [NAMA_SERVICE_APP] dengan nama service di docker-compose.yml
        # Contoh: http://app_A1:3000
        proxy_pass http://[NAMA_SERVICE_APP]:[PORT_APP];

        # Standard Headers (Biar backend tau IP asli user)
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## 🧙‍♂️ How It Works (Docker Networking)

Konsep paling penting di sini adalah **"Service Discovery"**.

- Di laptop kalian (Localhost), kalian akses `http://localhost:3000`.
- TAPI, di dalam dunia Docker, Nginx **GAK KENAL** siapa itu `localhost`.
- Nginx cuma kenal **Nama Service**.
- Jadi, kalau di `docker-compose.yml` nama service aplikasi kalian adalah `app_kelompok_A1`, maka di Nginx kalian nulisnya:
  `proxy_pass http://app_kelompok_A1:3000;`

---

## ⚠️ Troubleshooting (Baca ini kalau Nginx Error)

**Kasus 1: Container Nginx selalu "Exited" (Mati terus)**

- **Penyebab:** Biasanya ada **Syntax Error** di file `default.conf`.
- **Cek:** Kurang titik koma `;`? Kurang kurung kurawal `}`? Salah ngetik `proxy_pass`?

**Kasus 2: 502 Bad Gateway**

- **Artinya:** Nginx hidup, tapi dia **GAK BISA MENGHUBUNGI** Backend App.
- **Cek:**
  1.  Apakah nama service di `proxy_pass` sudah benar?
  2.  Apakah Port aplikasi (misal: 3000) sudah benar?
  3.  Apakah container App-nya mati/crash?

**Kasus 3: 404 Not Found (Nginx Welcome Page)**

- **Penyebab:** File `default.conf` kalian **GAK KE-LOAD**.
- **Cek:** Liat `docker-compose.yml` bagian `volumes`. Pastikan kalian sudah nge-mount file config dengan benar:
  `- ./nginx/default.conf:/etc/nginx/conf.d/default.conf`

_Happy Routing!_ 🚦
