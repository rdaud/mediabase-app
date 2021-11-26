require('./db/mongoose')
const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/user')
const campaignRouter = require('./routers/campaign')
const formatsRouter = require('./routers/formats')
const multer = require('multer')

const app = express()

app.use(cors({
    origin: '*'
}))

const port = process.env.PORT || 3001

app.use(express.json())
app.use(userRouter)
app.use(campaignRouter)
app.use(formatsRouter)




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

app.listen(port, () => console.log(`Server is running on port ${port}`))

