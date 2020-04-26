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
    Corona.findOneAndUpdate({ country: req.body.country }, { number: req.body.number }, (err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not update stats from " + req.body.country
            });
        }
        if (!err) {
            res.json({
                "status": "succes",
                "message": doc
            });
        }
    });
}

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.update = update;