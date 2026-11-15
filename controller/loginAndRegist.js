
import bcrpyt from "bcrypt";
import connection from "../config/conection.js";
import logins from '../services/login.js'
import { response } from "../helpers/response.js";
const say = "iniPost say: "

export const nyari =async (req, res) =>{
  try{
    const hasil = await logins(req)
    response(hasil, 200, res)
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
    res.status(500).json(sekuel)
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
    const hasil = await logins(req)
    console.log(hasil)
    return response(hasil, 200, res)
  } catch(err){
    console.error("Gagal mengambil data user:", err)
    return res.status(500).json({ message: "Gagal mengambil data user" })
  }
}


