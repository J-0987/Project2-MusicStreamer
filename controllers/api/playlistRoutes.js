const router = require('express').Router();
const { Playlist, Song, User, Artist } = require('../../models');


// GET /api/playlists
// get all playlists
router.get('/', async (req, res) => {
  try {
    const playlistData = await Playlist.findAll({
      include: [{
        model: {Song, User, Song, Artist},
      
      }]
  });

  const playlists = playlistData.map((playlist) => playlist.get({ plain: true }));

  console.log('Found playlists:', playlists); // Log the found playlists
    res.status(200).json(playlists);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get playlist by username
router.get('/playlist/:username', async (req, res) => {
  try {
    const playlistData = await Playlist.findAll({
      where: {
        username: req.params.username,
      },
    });

    if (!playlistData) {
      res.status(404).json({ message: 'No playlist found with that name!' });
      return;
    }

    res.status(200).json(playlistData);
  } catch (err) {
    res.status(500).json(err);
  }
} );

// CREATE a new playlist
router.post('/', async (req, res) => {
  try {
    const playlistData = await Playlist.create({
      user_id: req.body.user_id,
      playlist_name: req.body.playlist_name,
      description: req.body.description,
  
    
    });

    res.status(200).json(playlistData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//ADD song to playlist
router.post('/:playlist_name', async (req, res) => {
  try {
    const playlistData = await Playlist.create({
      playlist_name: req.body.playlist_name,
      user_id: req.body.user_id,
    });

    res.status(200).json(playlistData);
  } catch (err) {
    res.status(400).json(err);
  }
});



// DELETE a playlist
router.delete('/:playlist_name', async (req, res) => {
  try {
    const playlistData = await Playlist.destroy({
      where: {
        playlist_name: req.params.playlist_name,
      },
    });

    if (!playlistData) {
      res.status(404).json({ message: 'No playlist found with that name!' });
      return;
    }

    res.status(200).json(playlistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:playlist_name', async (req, res) => {
  try {
    const playlistData = await Playlist.findOne(req.params.playlist_name, {
      include: [{ model: Song, User }],
    });

    if (!playlistData) {
      res.status(404).json({ message: 'No playlist found with that name!' });
      return;
    }

    res.status(200).json(playlistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;






