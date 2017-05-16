var express = require('express')
var app = express()
var path = require('path')

app.listen(3900, function(req, res){
  console.log('Example app listening on port 3900')
})
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/artist/:artist_id', (req,res) => {
  res.render('artist')
})
app.get('/albums', (req, res) => {
  res.render('albums')
})
app.get('/albums/:album_id', (req, res) =>{
  res.render('album')
})
app.get('/songs', (req, res) => {
  res.render('songs')
})
