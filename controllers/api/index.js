
const router = require('express').Router();

const playlistRoutes = require('./playlistRoutes');
const songRoutes = require('./songRoutes');
const artistRoutes = require('./artistRoutes');
const userRoutes = require('./userRoutes');

router.use('/playlists', playlistRoutes);
router.use('/songs', songRoutes);
router.use('/artists', artistRoutes);
router.use('/users', userRoutes);

module.exports = router;

