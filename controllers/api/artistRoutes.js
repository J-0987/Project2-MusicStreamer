const router = require ('express').Router();
const { Artist } = require('../../models');
const { get } = require('./playlistRoutes');


router.get('/', async (req, res) => {
    try {
        const artistData = await Artist.findAll(
            map((artist) => artist.get({ plain: true }))
        );
        res.status(200).json(artistData);
    } catch (err) {
        res.status(500).json(err);
    }
}  );

//find artist by name
// get artist ny name

router.get('/:artist_name', async (req, res) => {
    try {
        const artistData = await Artist.findAll({
            where: {
                artist_name: {
                    [Op.iLike]: '%' + req.params.artist_name + '%'
                }
            }
        });
        const artists = artistData.map((artist) => artist.get({ plain: true }));

        // If no songs were found, return a 404 error
        if (artists.length === 0) {
            return res.status(404).send('No artists found');
        }

        // Send the artists in the response

        res.json(songs);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;