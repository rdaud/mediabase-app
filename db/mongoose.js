const mongoose = require('mongoose')
const key = require('../keys.js') 

mongoose.connect(key.MONGO_URI)
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));
