import bcrpyt from "bcrypt";
import e from "express";
// import connection from "../services/conection.js";
import req from "../middleware/reqMiddleware.js";
import {nyari, Registers, masuk  }from "../controller/loginAndRegist.js"
const app = e.Router();


app.post("/registers", req, Registers);
app.post("/nyari", req, nyari);
app.post('/logins', req, masuk)
export default app;
