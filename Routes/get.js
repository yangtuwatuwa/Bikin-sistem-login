import connection from "../config/conection.js";
import e from "express";
import isValidJwt from "../middleware/validMiddleware.js";

const app = e.Router();

const createFetchRoute = (path, table, label) => {
    app.get(path, isValidJwt, async (_req, res) => {
        try {
            const [rows] = await connection.execute(`SELECT * FROM ${table}`);
            return res.status(200).json({ data: rows });
        } catch (error) {
            console.error(`Gagal mengambil data ${label}:`, error);
            return res.status(500).json({ message: `Gagal mengambil data ${label}` });
        }
    });
};

createFetchRoute("/siswa", "siswa", "siswa");
createFetchRoute("/guru", "guru", "guru");
createFetchRoute("/mapel", "mata_pelajaran", "mapel");
createFetchRoute("/jurusan", "jurusan", "jurusan");

export default app;
