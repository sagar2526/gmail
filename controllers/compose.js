const Compose = require('../models/compose')

exports.getAllCompose = (request, response) => {
    var query = Compose.find()
    console.log(request.query)
    query.exec((error, compose) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json(compose)
    })
}

exports.postNewCompose = (request, response) => {
    console.log(request.body)
    let compose = new Compose({
        to: request.body.to,
        cc: request.body.cc,
        subject: request.body.subject,
        attachment: request.body.attachment,
        createdBy: request.body.createdBy,
        createdAt: request.body.createdAt,
        description: request.body.description
    })
    compose.save().then((compose) => {
        console.log('Compose Added Successfully')
        response.json(compose)
    })
}

exports.updateComposeById = (request, response) => {
    const {
        to,
        cc,
        subject,
        attachment,
        createdBy,
        createdAt,
        description
    } = request.body

    Inbox.updateOne({
            _id: request.params.id,
        }, {
            to,
            cc,
            subject,
            attachment,
            createdBy,
            createdAt,
            description
        },

        {},

        (error, space) => {
            if (error)
                response.json({
                    error: error,
                    status: 500
                })
            response.json(Compose)
        })
}

exports.delComposeById = (request, response) => {
    Compose.findOneAndDelete({
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