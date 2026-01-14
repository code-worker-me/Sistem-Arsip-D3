-- 1. TABEL USERS (Digabung Admin & Staff sesuai Dokumen)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'staff') DEFAULT 'staff', -- Ini sesuai dokumen (Point 149)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. TABEL ARCHIVES
CREATE TABLE archives (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(100) NOT NULL,
    description TEXT, -- Dokumen minta ada deskripsi (Point 154)
    author VARCHAR(100), -- Tambahan ide kamu (Bagus!)
    published_date DATE, -- Tambahan ide kamu (Tanggal_terbit)
    file_path VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- 3. DATA DUMMY (Biar pas dijalankan gak kosong)
INSERT INTO users (username, email, password, role) VALUES 
('admin', 'admin@arsip.com', 'admin123', 'admin'),
('staff', 'staff@arsip.com', 'staff123', 'staff');