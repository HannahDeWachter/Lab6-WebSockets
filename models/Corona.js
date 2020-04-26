const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const coronaSchema = new Schema({
    country: String,
    number: String
});
const Corona = mongoose.model('Corona', coronaSchema);

module.exports = Corona;