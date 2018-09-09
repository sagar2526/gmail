const Users = require('../models/user')

exports.getAllUsers = (request, response) => {
    var query = Users.find()
    console.log(request.query)
    query.exec((error, users) => {
        if (error)
            response.json({
                error: error,
                status: 500
            })
        response.json(users)
    })
}

exports.postNewUsers = (request, response) => {
    console.log(request.body)
    let user = new Users({
        username: request.body.username,
        password: request.body.password,
        confirmPassword: request.body.confirmPassword,
        firstName: request.body.firstName,
        middleName: request.body.middleName,
        lastName: request.body.lastName,
        dob: request.body.dob,
        gender: request.body.gender,
        token: request.body.token,
        createdAt: request.body.createdAt,
        updatedAt: request.body.updatedAt,
    })
    user.save().then((user) => {
        console.log('User Added Successfully')
        response.json(user)
    })
}

exports.updateUsersById = (request, response) => {
    const {
        username,
        password,
        confirmPassword,
        firstName,
        middleName,
        lastName,
        dob,
        gender,
        token,
        createdAt,
        updatedAt
    } = request.body

    Users.updateOne({
            _id: request.params.id,
        }, {
            username,
            password,
            confirmPassword,
            firstName,
            middleName,
            lastName,
            dob,
            gender,
            token,
            createdAt,
            updatedAt
        },

        {},

        (error, space) => {
            if (error)
                response.json({
                    error: error,
                    status: 500
                })
            response.json(Users)
        })
}

exports.delUsersById = (request, response) => {
    Users.findOneAndDelete({
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