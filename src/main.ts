import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(parseInt(process.env.PORT), () => {
    console.log(`App listening on port ${process.env.PORT}`)
})
