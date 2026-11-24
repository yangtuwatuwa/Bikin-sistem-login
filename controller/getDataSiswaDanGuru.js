
import {
    validateSiswaQuery,
    getSiswaService
} from "../services/siswa.service.js";

export const getSiswa = async (req, res) => {

    const validationError = validateSiswaQuery(req.query);

    if (validationError) {
        return res.status(400).json({
            message: validationError
        });
    }

    try {
        const data = await getSiswaService(req.query);

        return res.status(200).json({ data });

    } catch (error) {
        console.error("Gagal mengambil data siswa:", error);

        return res.status(500).json({
            message: "Gagal mengambil data siswa"
        });
    }
};
