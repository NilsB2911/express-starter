import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.listen(parseInt(process.env.PORT), () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
