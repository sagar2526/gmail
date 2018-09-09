const mongoose = require('mongoose')

var InboxSchema = new mongoose.Schema({
    Subject: String,
    mailBy: String,
    time: Date,
    status: String,
    description: String

})

const Inbox = mongoose.model('Inbox', InboxSchema);

module.exports = Inbox;
