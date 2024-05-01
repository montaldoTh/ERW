const http = require('http')
const express = require('express')
const weaponsRouter = require('./routes/weapons')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(express.json())
app.use(cors({
    origin: ['https://eldenring.fanapis.com', 'http://localhost:5173'],
    methods: ['GET']
}))

app.get('/', (req, res) => {
    res.json({
        api: 'Elden Ring Weapons Wiki Middle API',
        version: 1,
    })
})

app.use('/weapons', weaponsRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Serveur Express démarrage")
})