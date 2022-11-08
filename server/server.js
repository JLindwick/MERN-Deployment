const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config'); 
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req,res) {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
require('./routes/user.routes')(app);
require('./routes/pirate.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})