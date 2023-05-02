const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send("Welcome to Food and Art Server !")
})

app.listen(port, () => {
    console.log(`My server is running on port ${port}`)
})