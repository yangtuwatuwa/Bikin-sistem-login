import bcrypt from "bcrypt";

export function hash(password,salt){
   const resaultHash = bcrypt.hash(password,salt);

   if (resaultHash){
        return resaultHash
   } else{
    return false
   }
   
}

export async function compere(password, pashash , salt){
   const resaultCompere = await bcrypt.compare(password, pashash );
   if (resaultCompere){
      return resaultCompere;
   }else{
      return false
   }
}