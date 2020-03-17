const generate = length => {
    let result = ''
    const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
}

exports.handler = (event, context, callback) => {
    const parts = event.path.split('/')
    const param = parts[parts.length - 1]
    const length = param && !isNaN(param) ? Number(param) : 5

    callback(null, {
        statusCode: 200,
        body: generate(length)
    })
}
