const sequelize = require('../config/connection');
const { Song, Playlist, User, Artist } = require('../models');
const fetch = require('node-fetch');

const songData = require('./songData.json');
const playlistData = require('./playlistData.json');
const userData = require('./userData.json');
const artistData = require('./artistData.json');

// seed through fetching from youtube

const apiKey = 'AIzaSyB2Fq8ORAPCEpg5cyfDCumh28lC50YowAE';

async function seedData() {
    for (const artist of artistData) {
      const artistResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(artist.name)}&type=channel&key=${apiKey}`);
      const artistData = await artistResponse.json();
      const artistId = artistData.items[0].id.channelId;
  
      // Get the artist's playlists
      const playlistsResponse = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${artistId}&key=${apiKey}`);
      const playlistsData = await playlistsResponse.json();
  
      for (const playlist of playlistsData.items) {
        // Get the items in the playlist
        const playlistItemsResponse = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlist.id}&key=${apiKey}`);
        const playlistItemsData = await playlistItemsResponse.json();
  
        for (const item of playlistItemsData.items) {
          const videoId = item.snippet.resourceId.videoId;
          const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  
          // Store the video URL in your database here
        }
      }
    }
  }






// End trial

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    const songs = await Song.bulkCreate(songData, {
        individualHooks: true,
        returning: true,
    });
    
    const playlists = await Playlist.bulkCreate(playlistData);
    
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    
    const artists = await Artist.bulkCreate(artistData);
    
    process.exit(0);
    };

