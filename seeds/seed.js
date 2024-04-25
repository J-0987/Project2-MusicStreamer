const sequelize = require('../config/connection');
const { Song, Playlist, PlaylistSong, User, Artist } = require('../models');
const fetch = require('node-fetch');

const songData = require('./songData.json');
const playlistData = require('./playlistData.json');
const userData = require('./userData.json');
const artistData = require('./artistData.json');
const playlistSongData = require('./playlistSongData.json');


// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   console.log('Seeding database...');
//   await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });
//   console.log('Users seeded');


//   await Artist.bulkCreate(artistData);
//   console.log('Artists seeded');

//   await Song.bulkCreate(songData, {
//     individualHooks: true,
//     returning: true,
//   });
//   console.log('Songs seeded');

//   await Playlist.bulkCreate(playlistData);
//   console.log('Playlists seeded');

// await PlaylistSong.bulkCreate(playlistSongData);
// console.log('PlaylistSongs seeded');


//   process.exit(0);
// }



//Seeding with youtube api API


const apiKey = "AIzaSyB2Fq8ORAPCEpg5cyfDCumh28lC50YowAE";
const axios = require("axios");

const baseApiUrl = "https://www.googleapis.com/youtube/v3/";




async function fetchPlaylistVideos(playlistId) {
  try {

    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;

    const response = await axios.get(playlistUrl);
    console.log(response.data.items);

    // Extract video information from the response
    const videos = response.data.items.map(item => ({
      "song_title": item.snippet.title.split("-")[1]||"N/A",
      "song_url": `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`||"N/A",
      "thumbnail": (item.snippet.thumbnails && item.snippet.thumbnails.default) ? item.snippet.thumbnails.default.url : '', // Check if thumbnails exist before accessing
    }));
    const artistName = response.data.items[0].snippet.videoOwnerChannelTitle;
    return { videos, artistName };
  } catch (error) {
    console.error('Error fetching playlist:', error.message);
    return [];
  }
}


const seedDatabase = async () => {
  await sequelize.sync({ force: true });


  const missyID = 'PLb8PuWqgNQu-89AZG4OQCHSoDbYOe4AcJ';
  fetchPlaylistVideos(missyID).then(({ videos, artistName }) => {

  //  console.log('Missy Elliott playlist videos:', videos);
   // console.log('Artist Name:', artistName);
    Artist.create({ artist_name: artistName }).then(async (artistID) => {

      console.log('Miss Damina is in', artistID.id);

      const videoList = videos.map(element => {
      //  console.log({ ...element, artist_id: artistID.id })
        return ({ ...element, "artist_id": artistID.id })
    })
    console.log(videoList)

      await Song.bulkCreate(videoList);
      console.log('Missy song seeded');
    })
  })
}

seedDatabase();



