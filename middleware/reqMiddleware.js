
const send = (req, res, next) => {
    const maxLength = 100;
    const { name, password } = req.body ?? {};

    const say = "req middleware say: ";

    if (
        typeof name !== "string" ||
        typeof password !== "string"
    ) {
        console.log(say + "field tidak valid");

        return res.status(400).json({
            message: "Name dan password wajib berupa string"
        });
    }

    if (
        name.length === 0 ||
        password.length === 0 ||
        name.length > maxLength ||
        password.length > maxLength
    ) {
        console.log(say + "input tidak memenuhi syarat");

        return res.status(400).json({
            message: "Input kosong atau melebihi batas karakter"
        });
    }

    console.log(say + "ada field-nya cuy");

    next();
};

export default send;
