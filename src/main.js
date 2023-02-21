import express from 'express'

const app = express()

app.listen(parseInt(process.env.PORT), () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
