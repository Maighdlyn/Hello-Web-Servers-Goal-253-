var express = require('express')
var router = express.Router()
var albums = require('../public/albums.json')
var artists = require('../public/artists.json')
var songs = require('../public/songs.json')



router.get('/', (req, res) => {
  res.render('index')
})
router.get('/artist/:artist_id', (req,res) => {
  res.render('artist')
})
router.get('/albums', (req, res) => {
  console.log(albums)
  res.render('albums', {albums: albums} )
})
router.get('/albums/:album_id', (req, res) =>{
  res.render('album')
})
router.get('/songs', (req, res) => {
  res.render('songs')
})

module.exports = router
