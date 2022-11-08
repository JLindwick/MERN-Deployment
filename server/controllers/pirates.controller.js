
const { Pirate } = require('../models/pirate.models')

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createPirate = (request, response) => {
    const { name,url,numberOfChest,catchPhrase,crewPosition,hasPegLeg,hasEyePatch,hasHookHand } = request.body;
    Pirate.create({
        name,
        url,
        numberOfChest,
        catchPhrase,
        crewPosition,
        hasPegLeg,
        hasEyePatch,
        hasHookHand
    })
        .then(user => response.json(user))
        .catch(err => response.status(400).json(err))
    }
module.exports.getAllPirates = (request, response) => {
    Pirate.find({})
    .then(pirates => response.json(pirates))
    .catch(err => response.json(err))
}
module.exports.getPirate = (request, response) => {
    Pirate.findOne({_id:request.params.id})
    .then(pirate => response.json(pirate))
    .catch(err => response.json(err))
}
module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({_id: request.params.id}, request.body,{ runValidators: true },function(err) {console.log(err)})
    .then(updatePirate => response.json(updatePirate))
    .catch(err => response.json(err))
}
module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}