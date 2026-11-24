
import { findSiswa } from "../models/catchSiswa.js";
import { mapSiswa } from "../utils/siswa.json.js";

export const validateSiswaQuery = ({
    id_siswa,
    tahun_ajaran,
    semester
}) => {

    if (id_siswa !== undefined) {
        if (!/^\d+$/.test(id_siswa) || Number(id_siswa) < 1) {
            return "id_siswa tidak ada, data mungkin salah";
        }
    }

    if (tahun_ajaran !== undefined) {
        if (
            typeof tahun_ajaran !== "string" ||
            !/^\d{4}\/\d{4}$/.test(tahun_ajaran)
        ) {
            return "tahun_ajaran harus berformat YYYY/YYYY";
        }
    }

    if (
        semester !== undefined &&
        !["Ganjil", "Genap"].includes(semester)
    ) {
        return "semester harus Ganjil atau Genap";
    }

    return null;
};

export const getSiswaService = async (query) => {
    const rows = await findSiswa(query);

    return mapSiswa(rows);
};
