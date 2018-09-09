const Inbox = require('../models/inbox')

exports.getAllInbox = (request, response) => {
    var query = Inbox.find()
    console.log(request.query)
    query.exec((error, inbox) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json(inbox)
    })
}

exports.postNewInbox = (request, response) => {
    console.log(request.body)
    let inbox = new Inbox({
        Subject: request.body.Subject,
        mailBy: request.body.mailBy,
        time: request.body.time,
        status: request.body.status,
        description: request.body.description
    })
    inbox.save().then((inbox) => {
        console.log('User Added Successfully')
        response.json(inbox)
    })
}

exports.updateInboxById = (request, response) => {
    const {
        Subject,
        mailBy,
        time,
        status,
        description
    } = request.body

    Inbox.updateOne({
            _id: request.params.id,
        }, {
            Subject,
            mailBy,
            time,
            status,
            description
        },

        {},

        (error, space) => {
            if (error)
                response.json({
                    error: error,
                    status: 500
                })
            response.json(Inbox)
        })
}

exports.delInboxById = (request, response) => {
    Inbox.findOneAndDelete({
        _id: request.params.id
    }, (error, deleteId) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json({
            message: "deleted successfully"
        })
    })

}