const mongoose = require('mongoose')

var ComposeSchema = new mongoose.Schema({
   to: String,
   cc: String,
   subject: String,
   description: String,
   attachment[]: String,
   createdBy: String,
   createdAt: Date

})

const Compose = mongoose.model('Compose', ComposeSchema);

module.exports = Compose;
