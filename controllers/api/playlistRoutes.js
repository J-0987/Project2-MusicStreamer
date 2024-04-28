const router = require('express').Router();
const { where } = require('sequelize');
const { Playlist, Song, User, Artist, PlaylistSong} = require('../../models');


// GET /api/playlists
// get all playlists
router.get('/', async (req, res) => {
  try {
    const playlistData = await Playlist.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Song,
          include: {
            model: Artist,
          },
        },
       
      ],
    });

    const playlists = playlistData.map((playlist) => playlist.get({ plain: true }));

  console.log('Found playlists:', playlists); // Log the found playlists
    res.status(200).json(playlists);
  } catch (err) {
    res.status(500).json(err);
  }
});
  

//Get playlist by user_id
router.get('/', async (req, res) => {
  try {
    const playlistData = await Playlist.findAll({
      where: {
        user_id: req.session.user_id, // Only find playlists by the logged-in user
      },
      include: [
        {
          model: User,
        },
        {
          model: Song,
          include: {
            model: Artist,
          },
        },
      ],
    });

    const playlists = playlistData.map((playlist) => playlist.get({ plain: true }));

    console.log('Found playlists:', playlists); // Log the found playlists
    res.status(200).json(playlists);
  } catch (err) {
    res.status(500).json(err);
  }
});

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
router.put('/:playlistId/songs', async (req, res) => {
  try {
    const songIds = req.body.song_ids;
    console.log('Adding songs to playlist:', songIds);

    for (let songId of songIds) {
      await PlaylistSong.create({
        playlist_id: req.params.playlistId,
        song_id: songId
      });
      console.log('Song added to playlist:', songId);
    }

    res.status(200).json({ message: 'Songs added to playlist.' });
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






