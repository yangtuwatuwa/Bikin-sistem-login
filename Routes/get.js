import connection from "../config/conection.js"
import e from "express";
import send from "../middleware/reqMiddleware.js";
import isValidJwt from "../middleware/validMiddleware.js"
// import 
const app = e.Router()

app.get('/', isValidJwt , )

export default app