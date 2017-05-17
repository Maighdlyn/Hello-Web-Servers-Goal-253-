var express = require('express')
var app = express()
var path = require('path')
var albums = require('./public/albums.json')
var artists = require('./public/artists.json')
var songs = require('./public/songs.json')
var index = require('./routes/index.js')

app.set('view engine', 'ejs')
//app.set('views', path.join(__dirname, 'views'))

app.use('/', express.static(__dirname + '/public'));

app.use('/', index)

app.listen(3000, function(req, res){
  console.log('Example app listening on port 3000')
})

module.exports = app
