import users from '../models/catchUsers.js'
import {compere} from '../helpers/bycriptHash.js'

export default async function logins(req) {
    const { name, password } = req.body;
    const [user] = await users(name);

    if (!user?.password) {
        return null;
    }

    const passwordMatches = await compere(password, user.password);
    if (!passwordMatches) {
        return null;
    }

    return {
        name: user.nama,
        role: user.role,
    };
}
