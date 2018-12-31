






const express = require('express');

const app = express();
const port = 5700;

const host='localhost';
var   server = require('http').createServer(app);




app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${host}:${port}!`))









