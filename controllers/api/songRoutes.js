const router = require('express').Router();
const { Song, Artist } = require('../../models');

// GET /api/songs
// get all songs
router.get('/', async (req, res) => {
  try {
    const songData = await Song.findAll();

    res.status(200).json(songData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET /api/songs/:title
// get a specific song by its title
router.get('/api/songs/:title', async (req, res) => {


    try {
        // Fetch the song from database using the songTitle
        const song = await Song.findOne({ where: { song_title:req.params.title} });

        // If the song was not found, return a 404 error
        if (!song) {
            return res.status(404).send('Song not found');
        }

        // Send the entire song object in the response
        res.json(song);
    } catch (err) {
        // If there was an error, return a 500 error
        res.status(500).send(err.message);
    }
});

// GET /api/songs/:album
// get all songs by its album
router.get('/api/songs/:album', async (req, res) => {
    try {
        // Fetch all songs from database using the album
        const songs = await Song.findAll({ where: { album: req.params.album } });

        // If the song was not found, return a 404 error
        if (!song) {
            return res.status(404).send('Song not found');
        }

        // Send the entire song object in the response
        res.json(song);
    } catch (err) {
        // If there was an error, return a 500 error
        res.status(500).send(err.message);
    }
});

// GET /api/songs/:artist_name
// get all songs by its artist_name
router.get('/api/songs/artist_name/:artist_name', async (req, res) => {
    try {
        // Fetch all songs from database using the artist_name.
       
        const songs = await Song.findAll({
            include: [
                {
                    model: Artist,
                    where: { artist_name: req.params.artist_name }
                }
            ]
        });
   // If the song was not found, return a 404 error
   if (!song) {
    return res.status(404).send('Song not found');
}

// Map over the songs array and create a new object for each song
        // that only includes the title, artist, and song_url properties
        const songsData = songs.map(song => {
            return {
                title: song.title,
                // ? song.Artist.artist_name or song.artist_name??
                artist: song.Artist.artist_name, // Access the artist_name property from the Artist model
                song_url: song.song_url
            };
        });

        // Send the songs data in the response
        res.json(songsData);
}
catch (err) {
// If there was an error, return a 500 error
res.status(500).send(err.message);
}

});


     

module.exports = router;