# 1. Import image node versi 18 alpine (Image dasar yang ringan)
FROM node:18-alpine

# 2. Tentukan working directory di dalam container
# Semua command selanjutnya akan dijalankan di dalam folder ini
WORKDIR /usr/src/app

# 3. Copy file package.json dan package-lock.json (jika ada)
# Kita copy ini DULUAN sebelum copy kodingan lain agar memanfaatkan fitur Caching Docker.
# Jika Anda hanya ubah kodingan tapi tidak install library baru, tahap 'npm install' akan diskip (lebih cepat).
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy seluruh sisa source code dari laptop ke dalam container
COPY . .

# 6. Buka port yang digunakan aplikasi (Sesuai topologi: 3000)
EXPOSE 3000

# 7. Perintah untuk menjalankan aplikasi
# Catatan: Jika menggunakan docker-compose untuk development, command ini bisa di-override dengan nodemon
CMD ["node", "index.js"]