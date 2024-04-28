const router = require('express').Router();
const { where } = require('sequelize');
const { Playlist, Song, User, Artist, PlaylistSong} = require('../../models');
const withAuth = require('../../utils/auth');

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
router.get('/user', withAuth,async (req, res) => {
  console.log("Playlist by user_id", req.session);
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
    console.log(err)
    res.status(500).json(err);
  }
});

// CREATE a new playlist
router.post('/',withAuth, async (req, res) => {
  console.log("Playlist",req.session)
  try {
    const playlistData = await Playlist.create({
      user_id: req.session.user_id,
      playlist_name: req.body.playlist_name,
      description: req.body.description,
  
    
    });

    res.status(200).json(playlistData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//ADD song to playlist
router.put('/songs', async (req, res) => {
  try {
    const playListSong =      await PlaylistSong.create({
        playlist_id: req.body.playlist_id,
        song_id: req.body.song_id,
      });
      console.log('Song added to playlist:', playListSong);
    

    res.status(200).json({ message: 'Songs added to playlist.' ,playListSong});
  } catch (err) {
    res.status(400).json(err);
  }
});



// DELETE a playlist
router.delete('/:id', async (req, res) => {
  console.log("Delete playlist",req.params)
  try {
    const playlistData = await Playlist.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!playlistData) {
      res.status(404).json({ message: 'No playlist found with that name!' });
      return;
    }

    res.status(200).json({message: 'Playlist deleted!',playlistData});
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});


module.exports = router;






