import e from "express";
const app =e.Router()

app.post("/", (req,res)=>{
    const {name, password} = req.body
    console.log(name +" "+ password);
    res.send("hidup mimi")
    
})
export default app