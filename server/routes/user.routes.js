const User = require("../controllers/users.controller")
module.exports = function(app){
    app.get('/', User.index);
    app.post('/user/',User.createUser);
    app.get('/users',User.getAllUsers);
    app.get('/user/:id',User.getUser);
    app.put('/user/:id',User.updateUser);
    app.delete('/user/:id',User.deleteUser);
}