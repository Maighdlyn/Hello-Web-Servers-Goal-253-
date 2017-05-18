var express = require('express')
var router = express.Router()
var albums = require('../public/albums.json')
var artists = require('../public/artists.json')
var song = require('../public/songs.json')

function albumsForArtist(artistId){
  var albumArr = []
  artistId = parseInt(artistId)
  for (var i = 0; i < albums.length; i++) {
    if(artistId === albums[i].artist_id){
      albumArr.push(albums[i])
    }
  }
  return albumArr
}

router.get('/', (req, res) => {
  var artist_id = req.params.id
  var artistAlbums = albumsForArtist(artist_id)
  res.render('index', {artists: artists, albums:artistAlbums})
})
router.get('/artist/:artist_id', (req,res) => {
  var artist_id = req.params.artist_id
  var artistAlbums = albumsForArtist(artist_id)
  res.render('artist', {artist: artists[artist_id - 1], albums:artistAlbums})
})
router.get('/albums', (req, res) => {
  res.render('albums', {
    albums: albums,
    artists: artists
  })
})
router.get('/albums/:album_id', (req, res) =>{
  res.render('album')
})
router.get('/songs', (req, res) => {
  res.render('songs', {songs: song})
})

module.exports = router
