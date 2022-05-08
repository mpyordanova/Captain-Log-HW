const mongoose = require('mongoose');
const {Schema} = require("mongoose");


const LogSchema = new mongoose.Schema({
    title:{type: String},
    entry:{type: String},
    shipIsBroken:{type: Boolean, default: true, timestams: Boolean},
    date: {type: Date, default: () =>Date.now}

})
const LogModel = mongoose.model("LogModel", LogSchema);

module.exports = LogModel;