const router = require ('express').Router();
const { Artist } = require('../../models');
const { get } = require('./playlistRoutes');


router.get('/', async (req, res) => {
    try {
        const artistData = await Artist.findAll();
        res.status(200).json(artistData);
    } catch (err) {
        res.status(500).json(err);
    }
}  );

//find artist by name
// get artist ny name

router.get('/:artist_name', async (req, res) => {
    try {
        const artistData = await Artist.findOne({ where: { artist_name: req.params.artist_name } });
        if (!artistData) {
            res.status(404).json({ message: 'No artist found with this name!' });
            return;
        }
        res.status(200).json(artistData);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;