const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()
const cors = require('cors')
const connectToDB = require('./db/db')
const userRoutes = require('./routes/user.routes')
const customizerRoutes = require('./routes/customizer.route')

const cookieParser = require('cookie-parser')

connectToDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use('/uploads', express.static('uploads'));


app.get('/', (req, res) => {
    res.send('helooo')
})

app.use('/user', userRoutes)

app.use('/api/customizer', customizerRoutes);
module.exports = app