
export const mapSiswa = (rows) => {
    const students = new Map();

    for (const row of rows) {

        if (!students.has(row.id_siswa)) {
            students.set(row.id_siswa, {
                id_siswa: row.id_siswa,
                nis: row.nis,
                nama_siswa: row.nama_siswa,
                email: row.email,
                kelas: row.kelas,

                jurusan: {
                    id_jurusan: row.id_jurusan,
                    kode_jurusan: row.kode_jurusan,
                    nama_jurusan: row.nama_jurusan
                },

                nilai: []
            });
        }

        if (row.id_nilai !== null) {
            students.get(row.id_siswa).nilai.push({

                id_nilai: row.id_nilai,
                tahun_ajaran: row.tahun_ajaran,
                semester: row.semester,

                mapel: {
                    id_mapel: row.id_mapel,
                    kode_mapel: row.kode_mapel,
                    nama_mapel: row.nama_mapel,
                    jumlah_jam: row.jumlah_jam
                },

                guru: row.id_guru === null ? null : {
                    id_guru: row.id_guru,
                    nip: row.nip,
                    nama_guru: row.nama_guru
                },

                nilai_tugas: row.nilai_tugas,
                nilai_uts: row.nilai_uts,
                nilai_uas: row.nilai_uas,
                nilai_akhir: row.nilai_akhir

            });
        }
    }

    return [...students.values()];
};
