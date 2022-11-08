const mongoose = require("mongoose");

mongoose.connect("mongodb://http://54.244.153.155/crmdb", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));