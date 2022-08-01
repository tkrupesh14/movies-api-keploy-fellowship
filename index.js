const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs')
var movies = require('./movies');

app.get('/', (req, res) => {
    res.send("Hello World");
})
app.get('/movies', (req,res)=>{
    fs.readFile(__dirname+'/'+'movies.json', (err,data)=>{
        res.send(data);
    })
})
app.get('/movies/:mid', (req, res) => {
    let foundMovie = movies.find(x => x.id === parseInt(req.params.mid));
    let jsonString = JSON.stringify(foundMovie);
    res.send(jsonString);
  });
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });