const mongoose = require('mongoose');

module.exports = mongoose.model('Light', new mongoose.Schema({
    id:String,
    floor:String,
    area:String,
    status:String
}));