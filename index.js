const express = require('express');
const server = express();
const port = 3000;

server.set('view engine', 'ejs')
server.use(express.static("public"))
server.use(express.urlencoded({encoded: true}))


server.listen(port, function (){
    console.log(`Listening on ${port}`)
});

server.get('/index', (req, res) => {
    res.render("index.html", { user: 'Valued user' })
})

server.get('/', (req, res) => {
    res.status(200).send("Hello world!");
})
