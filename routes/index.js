var express = require('express')
var router = express.Router()
var albums = require('../public/albums.json')
var artists = require('../public/artists.json')
var songs = require('../public/songs.json')

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

function artistForAlbum(albumId){
  for (var i = 0; i <= artists.length; i++) {
    if( albums[albumId - 1].artist_id === artists[i].id){
      return artists[i].name
    }
  }
}

 // The following function is a work in progress.

// function artistForSong(albumId){
//   var singer = []
//   for (var i = 0; i <= songs.length; i++) {
//     var something = songs.album_id
//     for (var i = 0; i <= artists.length; i++) {
//       if( albums[something - 1].artist_id === artists[i].id){
//         singer.push(artists[i].name)
//       }
//       return singer
// }

function songsForAlbums(albumId){
  var songsArr = []
  albumId = parseInt(albumId)
  for (var i = 0; i < songs.length; i++) {
    if(albumId === songs[i].album_id){
      songsArr.push(songs[i])
    }
  }
  console.log(songsArr)
  return songsArr
}

router.get('/', (req, res) => {
  var artistAlbums = []
  for (var i=0; i < artists.length; i++) {
    artistAlbums.push(albumsForArtist(artists[i].id))
  }
  res.render('index', {
    artists : artists,
    albums : artistAlbums
  })
})

router.get('/artist/:artist_id', (req, res) => {
  var artistId = req.params.artist_id
  var artistAlbums = albumsForArtist(artistId)
  var albumSongs = []
  for (var i=0; i < albums.length; i++) {
    albumSongs.push(songsForAlbums(albums[i].id))
  }
  res.render('artist', {
    artist: artists[artistId - 1],
    albums: artistAlbums,
    songs: albumSongs
  })
})

router.get('/albums', (req, res) => {
  var albumSongs = []
  for (var i=0; i < albums.length; i++) {
    albumSongs.push(songsForAlbums(albums[i].id))
  }
  res.render('albums', {
    albums: albums,
    artists: artists,
    songs: albumSongs
  })
})

router.get('/albums/:album_id', (req, res) =>{
  var albumId = req.params.album_id
  var albumSongs = songsForAlbums(albumId)
  var artistName = artistForAlbum(albumId)
  res.render('album', {
    album: albums[albumId - 1],
    songs: albumSongs,
    artist: artistName
  })
})
router.get('/songs', (req, res) => {
  // var songArtists = artistForSong()
  res.render('songs', {
    songs: songs,
    albums: albums,
    // artists: songArtists
  })
})

module.exports = router
