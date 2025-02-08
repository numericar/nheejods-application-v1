function healthCheck(req, res, next) {
    return res.status(201).json({
        isSuccess: true,
        message: "Server is ok",
        data: null,
    });
}

module.exports = {
    healthCheck
}