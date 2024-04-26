const router = require('express').Router();
const { User, Song, Playlist } = require('../models');
const withAuth = require('../utils/auth');

// TODO: Add a comment describing the functionality of the withAuth middleware
// checks to see if the user is logged in before allowing them to access the route
router.get('/', (req, res) => {
    res.render('homepage', {logged_in: req.session.logged_in});
});

router.get('/login', (req, res) => {
    // checks if the user is logged in and redirects them to the homepage if they are
    if (req.session.logged_in) {
        res.redirect('music');
        return;
    }

    res.render('login');
});

router.get('/about', (req, res) => {
    res.render('about', {logged_in: req.session.logged_in});
});

router.get('/faq', (req, res) => {
    res.render('faq', {logged_in: req.session.logged_in});
});

router.get('/music', withAuth, async (req, res) => {

    try {
        // Fetch the user's playlists from the database
        const playlists = await Playlist.findAll({
            where: { user_id: req.session.user_id },
            include: ['songs'] // Include the songs in each playlist
        });

        // Fetch all songs from the database
        const songs = await Song.findAll();

        // Render the 'music' view and pass the playlists and songs
        res.render('music', { playlists, songs, loggedIn: req.session.loggedIn });
    } catch (err) {
        // If there was an error, return a 500 error
        res.status(500).send(err.message);
    }

});

module.exports = router;