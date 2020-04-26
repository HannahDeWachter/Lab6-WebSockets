const Corona = require('../../../models/Corona');

const getAll = (req, res) => {
    Corona.find({}, (err, docs) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not show stats"
            });
        }
        if (!err) {
            res.json({
                "status": "succes",
                "data": docs
            });
        }
    });
}

const create = (req, res) => {
    let stat = new Corona();
    stat.country = req.body.country;
    stat.number = req.body.number;
    stat.save((err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not save this message"
            });
        }
        if (!err) {
            res.json({
                "status": "succes",
                "data": doc
            });
        }
    });
}

const update = (req, res) => {
    res.json({
        "status": "success",
        "message": "UPDATING numbers"
    });
}

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.update = update;