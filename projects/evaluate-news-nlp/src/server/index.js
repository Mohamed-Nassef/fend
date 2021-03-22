const axios = require('axios')
const express = require('express')
var cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const API_CREDS = process.env.API_KEY
const API_URL = `https://api.meaningcloud.com/sentiment-2.1?key=${API_CREDS}&lang=en&url=`

const app = express()

app.use(cors())
app.use(express.static('dist'))
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get("/analyis", (req, res) => {
    axios.get(API_URL + req.query.url).then(result => {
        res.json(result.data)
    });
})
// designates what port the app will listen to for incoming requests
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


app.listen(8081, function (err) {
    if (err) {
        console.log(err)
    }

    console.log('Example app listening on port 8081!')
})


