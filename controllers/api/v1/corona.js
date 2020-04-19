const getAll = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETIING all numbers"
    });
}

const update = (req, res) => {
    res.json({
        "status": "success",
        "message": "UPDATING numbers"
    });
}

module.exports.getAll = getAll;
module.exports.update = update;