export function response(message, status, res){
    const template = {
        data: message,
        status:status
    }

    res.status(status).json(template)
    console.log(template)
}

