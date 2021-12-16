require('./db/mongoose')
const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/user')
const campaignRouter = require('./routers/campaign')
const formatsRouter = require('./routers/formats')
const criativosRouter = require('./routers/criativo')
const multer = require('multer')

const app = express()

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*'
}))


app.use(express.json())
app.use(userRouter)
app.use(campaignRouter)
app.use(formatsRouter)
app.use(criativosRouter)






// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  


/**
 * Listen to port 3001
 */

 let port = process.env.PORT;
 if (port == null || port == "") {
   port = 3001;
 }

app.listen(port, () => console.log(`Server is running on port ${port}`))

