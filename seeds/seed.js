const sequelize = require('../config/connection');
const { Song, Playlist, PlaylistSong, User, Artist } = require('../models');
const fetch = require('node-fetch');

const songData = require('./songData.json');
const playlistData = require('./playlistData.json');
const userData = require('./userData.json');
const artistData = require('./artistData.json');
const playlistSongData = require('./playlistSongData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  console.log('Seeding database...');
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('Users seeded');
  

  await Artist.bulkCreate(artistData);
  console.log('Artists seeded');
  
  await Song.bulkCreate(songData, {
    individualHooks: true,
    returning: true,
  });
  console.log('Songs seeded');

  await Playlist.bulkCreate(playlistData);
  console.log('Playlists seeded');

await PlaylistSong.bulkCreate(playlistSongData);
console.log('PlaylistSongs seeded');


  process.exit(0);
}


seedDatabase();
