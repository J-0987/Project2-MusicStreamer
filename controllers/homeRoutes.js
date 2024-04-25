const router = require('express').Router();
const { User } = require('../models');

// TODO: Add a comment describing the functionality of the withAuth middleware
// checks to see if the user is logged in before allowing them to access the route
router.get('/', (req, res) => {
    console.log("Were here!");
    res.render('homepage');
});

router.get('/login', (req, res) => {
    // TODO: Add a comment describing the functionality of this if statement
    // checks if the user is logged in and redirects them to the homepage if they are
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;