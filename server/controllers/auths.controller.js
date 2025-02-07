function healthCheck(req, res, next) {
    return res.status(201).json({
        isSuccess: true,
        message: "Server is ok",
        data: null
    });
}

function register(req, res, next) {
    return res.status(201).json({
        isSuccess: true,
        message: "Created",
        data: null
    });
}

module.exports = {
    healthCheck,
    register
}

