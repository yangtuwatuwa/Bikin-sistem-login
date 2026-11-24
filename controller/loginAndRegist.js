
import bcrpyt from "bcrypt";
import jwt from "jsonwebtoken";
import connection from "../config/conection.js";
import logins from '../services/login.js'
import { response } from "../helpers/response.js";
const say = "iniPost say: "

export const nyari =async (req, res) =>{
  try{
    const hasil = await logins(req)
    response(Boolean(hasil), 200, res)
  } catch (error){
    console.error("Gagal mengambil data user:", error)
    res.status(500).json({ message: "Gagal mengambil data user" })

  }
}

export const Registers = async (req, res) => {
  const { name, password , role } = req.body;
  const passgweh = password;
  const salt = 10;
  const sql = "INSERT INTO user VALUES (NULL,?,?,?)";

  const hashing = await bcrpyt.hash(passgweh, salt)
  const sekuel =  await connection.query(sql, [name, hashing, role])
  try{
    res.status(201).json(sekuel)
  } catch(err){
    console.log("gw adalah gw: ", err);
    
  }
}

export const lupapass = async (req, res) => {
  const {name, Newpass} = req.body;
  const sql = "UPDATE login SET password = ?  WHERE name = ?"

 try {
   const akusql = await connection.query(sql, [Newpass, name])
    res.json(akusql)
  } catch
   (err){
  res.json("error nih mas : " + err)
 }
}

export const masuk = async (req , res) => {
  try{
    const user = await logins(req)

    if (!user) {
      return res.status(401).json({ message: "Nama pengguna atau kata sandi salah" })
    }

    const secret = process.env.JWT_SECRET
    if (!secret) {
      console.error("JWT_SECRET belum dikonfigurasi")
      return res.status(500).json({ message: "Konfigurasi autentikasi server belum tersedia" })
    }

    const payload = { name: user.name }
    if (user.role) payload.role = user.role

    const token = jwt.sign(payload, secret, {
      subject: String(user.id),
      expiresIn: "1h",
    })

    return res.status(200).json({
      data: true,
      token,
      tokenType: "Bearer",
      expiresIn: 3600,
      user: { id: user.id, name: user.name, role: user.role },
    })
  } catch(err){
    console.error("Gagal mengambil data user:", err)
    return res.status(500).json({ message: "Gagal mengambil data user" })
  }
}


