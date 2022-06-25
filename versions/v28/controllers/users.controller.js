const controller = {}

controller.getAllUsers = (req, res) => {
    return res.json({
        message : "working"
    })
}

module.exports = controller;