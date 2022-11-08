
const { User } = require('../models/user.models')

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createUser = (request, response) => {
    const { firstName,lastName,email,password } = request.body;
    User.create({
        firstName,
        lastName,
        email,
        password
    })
        .then(user => response.json(user))
        .catch(err => response.status(400).json(err))
    }
module.exports.getAllUsers = (request, response) => {
    User.find({})
    .then(users => response.json(users))
    .catch(err => response.json(err))
}
module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
    .then(user => response.json(user))
    .catch(err => response.json(err))
}
module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body,{ runValidators: true },function(err) {console.log(err)})
    .then(updateUser => response.json(updateUser))
    .catch(err => response.json(err))
}
module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}