const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const coronaSchema = new Schema({
    country: String,
    number: String
});
const Corona = mongoose.model('Corona', coronaSchema);

const getAll = (req, res) => {
    Corona.find({}, (err, docs) => {
        if (!err) {
            res.json({
                "status": "succes",
                "data": docs
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
module.exports.update = update;