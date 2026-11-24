
import connection from "../config/conection.js";

export const findSiswa = async ({
    id_siswa,
    tahun_ajaran,
    semester
}) => {

    const filters = [];
    const params = [];

    if (id_siswa !== undefined) {
        filters.push("s.id_siswa = ?");
        params.push(Number(id_siswa));
    }

    if (tahun_ajaran !== undefined) {
        filters.push("n.tahun_ajaran = ?");
        params.push(tahun_ajaran);
    }

    if (semester !== undefined) {
        filters.push("n.semester = ?");
        params.push(semester);
    }

    const sql = `
       SELECT
    s.id_siswa, s.nis, s.nama_siswa, s.email, s.kelas,
    j.id_jurusan, j.kode_jurusan, j.nama_jurusan,
    n.id_nilai, n.tahun_ajaran, n.semester,
    n.nilai_tugas, n.nilai_uts, n.nilai_uas, n.nilai_akhir,
    mp.id_mapel, mp.kode_mapel, mp.nama_mapel, mp.jumlah_jam,
    g.id_guru, g.nip, g.nama_guru

FROM siswa s

JOIN jurusan j
    USING (id_jurusan)

LEFT JOIN nilai n
    ON n.id_siswa = s.id_siswa

LEFT JOIN jurusan_mapel jm
    ON jm.id_jurusan_mapel = n.id_jurusan_mapel

LEFT JOIN mata_pelajaran mp
    ON mp.id_mapel = jm.id_mapel

LEFT JOIN guru g
    ON g.id_guru = jm.id_guru

${filters.length ? `WHERE ${filters.join(" AND ")}` : ""}

ORDER BY
    s.id_siswa,
    n.tahun_ajaran DESC,
    n.semester,
    mp.nama_mapel;
    `;

    const [rows] = await connection.execute(sql, params);

    return rows;
};
