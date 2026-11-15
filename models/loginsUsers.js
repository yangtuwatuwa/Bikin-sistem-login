import connection from "../config/conection.js"

const db = connection
export  const  catchUser = async (nama) => {
          const sql = "SELECT * FROM user where nama = ?"
          const resault = await connection.execute(sql,[nama])
          return resault;
}