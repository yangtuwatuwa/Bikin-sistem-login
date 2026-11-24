-- 1. TABEL JURUSAN
CREATE TABLE jurusan (
    id_jurusan INT AUTO_INCREMENT PRIMARY KEY,
    kode_jurusan VARCHAR(20) NOT NULL UNIQUE,
    nama_jurusan VARCHAR(100) NOT NULL
) ENGINE=InnoDB;


-- 2. TABEL MATA PELAJARAN
CREATE TABLE mata_pelajaran (
    id_mapel INT AUTO_INCREMENT PRIMARY KEY,
    kode_mapel VARCHAR(20) NOT NULL UNIQUE,
    nama_mapel VARCHAR(100) NOT NULL,
    jumlah_jam INT NOT NULL
) ENGINE=InnoDB;


-- 3. TABEL SISWA
CREATE TABLE siswa (
    id_siswa INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL UNIQUE,
    id_jurusan INT NOT NULL,
    nis VARCHAR(20) NOT NULL UNIQUE,
    nama_siswa VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    kelas VARCHAR(30) NOT NULL,

    FOREIGN KEY (id_user)
        REFERENCES user(id),

    FOREIGN KEY (id_jurusan)
        REFERENCES jurusan(id_jurusan)
) ENGINE=InnoDB;


-- 4. TABEL GURU
CREATE TABLE guru (
    id_guru INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL UNIQUE,
    nip VARCHAR(30) NOT NULL UNIQUE,
    nama_guru VARCHAR(100) NOT NULL,
    email VARCHAR(100),

    FOREIGN KEY (id_user)
        REFERENCES user(id)
) ENGINE=InnoDB;


-- 5. TABEL JURUSAN MAPEL
CREATE TABLE jurusan_mapel (
    id_jurusan_mapel INT AUTO_INCREMENT PRIMARY KEY,
    id_jurusan INT NOT NULL,
    id_mapel INT NOT NULL,
    id_guru INT NOT NULL,

    UNIQUE (id_jurusan, id_mapel),

    FOREIGN KEY (id_jurusan)
        REFERENCES jurusan(id_jurusan),

    FOREIGN KEY (id_mapel)
        REFERENCES mata_pelajaran(id_mapel),

    FOREIGN KEY (id_guru)
        REFERENCES guru(id_guru)
) ENGINE=InnoDB;


-- 6. TABEL NILAI
CREATE TABLE nilai (
    id_nilai INT AUTO_INCREMENT PRIMARY KEY,
    id_siswa INT NOT NULL,
    id_jurusan_mapel INT NOT NULL,

    tahun_ajaran VARCHAR(9) NOT NULL,
    semester ENUM('Ganjil', 'Genap') NOT NULL,

    nilai_tugas DECIMAL(5,2),
    nilai_uts DECIMAL(5,2),
    nilai_uas DECIMAL(5,2),
    nilai_akhir DECIMAL(5,2),

    UNIQUE (
        id_siswa,
        id_jurusan_mapel,
        tahun_ajaran,
        semester
    ),

    FOREIGN KEY (id_siswa)
        REFERENCES siswa(id_siswa),

    FOREIGN KEY (id_jurusan_mapel)
        REFERENCES jurusan_mapel(id_jurusan_mapel),

    CHECK (nilai_tugas IS NULL OR nilai_tugas BETWEEN 0 AND 100),
    CHECK (nilai_uts IS NULL OR nilai_uts BETWEEN 0 AND 100),
    CHECK (nilai_uas IS NULL OR nilai_uas BETWEEN 0 AND 100),
    CHECK (nilai_akhir IS NULL OR nilai_akhir BETWEEN 0 AND 100)
) ENGINE=InnoDB;