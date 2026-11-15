import users from '../models/catchUsers.js'
import {compere} from '../helpers/bycriptHash.js'
export default async function logins(req){
    
    const { name, password } = req.body;
    // const usernya = password;
    const resaultdb = await users(name);
    const passhash = resaultdb[0].password   
    const compereHash = await compere(password, passhash )
    console.log("ini hasilnya pasti: ", compereHash);
    
    
    return compereHash
  
 
    
}