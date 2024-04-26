const router = require('express').Router();
const { Song, Artist } = require('../../models');
const { Op } = require('sequelize'); // Import the Op object from Sequelize

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

// GET /api/songs/:id
// get a specific song by its id

router.get('/:id', async (req, res) => {
    try {
        // Fetch the song from database using the id
        const song = await Song.findByPk(req.params.id);

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


// GET /api/songs/:title
// Route to allow users to search database by song. Results displayed based on closest if not exact match. Search isn't case sensitive.
router.get('/title/:title', async (req, res) => {


    try {
        // Fetch the songs from the database that closely match the songTitle
        const songs = await Song.findAll({
            where: {
                song_title: {
                    [Op.iLike]: '%' + req.params.title + '%'
                }
            }
        });

        // If no songs were found, return a 404 error
        if (songs.length === 0) {
            return res.status(404).send('No songs found');
        }

        // Send the songs in the response
        res.render('songs', { songs }); // Render the songs template and pass in the songs data
        res.json(songs);
    } catch (err) {
        // If there was an error, return a 500 error
        res.status(500).send(err.message);
    }
});


// GET /api/songs/:artist_name
// get all songs by its artist_name
router.get('artist_name/:artist_name', async (req, res) => {
    try {
        // Fetch the songs from the database that belong to the artist
        const songs = await Song.findAll({
            include: [{
                model: Artist,
                where: {
                    artist_name: {
                        [Op.iLike]: '%' + req.params.name + '%'
                    }
                }
            }]
        });

        // If no songs were found, return a 404 error
        if (songs.length === 0) {
            return res.status(404).send('No songs found');
        }

        // Send the songs in the response
        res.json(songs);
}
catch (err) {
// If there was an error, return a 500 error
res.status(500).send(err.message);
}

});


     

module.exports = router;