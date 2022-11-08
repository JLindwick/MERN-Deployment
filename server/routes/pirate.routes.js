const Pirate = require("../controllers/pirates.controller")
module.exports = function(app){
    app.get('/', Pirate.index);
    app.post('/pirate/',Pirate.createPirate);
    app.get('/pirate',Pirate.getAllPirates);
    app.get('/pirate/:id',Pirate.getPirate);
    app.put('/pirate/:id',Pirate.updatePirate);
    app.delete('/pirate/:id',Pirate.deletePirate);
}