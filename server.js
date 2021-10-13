require('./db/mongoose')
const express = require('express')
const userRouter = require('./routers/user')
const campaignRouter = require('./routers/campaign')
const formatsRouter = require('./routers/formats')

const app = express()
const port = process.env.PORT

app.use(express.json())


app.use(userRouter)
app.use(campaignRouter)
app.use(formatsRouter)


/**
 * Listen to port 3001
 */

app.listen(port,
    () => {
        console.log(`Server is running on port ${port}`)
    })

