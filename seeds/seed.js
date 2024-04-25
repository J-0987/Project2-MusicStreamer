const sequelize = require('../config/connection');
const { Song, Playlist, PlaylistSong, User, Artist } = require('../models');
const fetch = require('node-fetch');



//Seeding with youtube api API


const apiKey = "AIzaSyB2Fq8ORAPCEpg5cyfDCumh28lC50YowAE";
const axios = require("axios");

const baseApiUrl = "https://www.googleapis.com/youtube/v3/";

const jacksonID = 'PL15ty5GYCv5u0_w7pusvZtUP225slLmRT';
const thrillerID = "PLFAcddgaFN8zqIJrTakvM9qWnR7iIrXnj";
const badID = "PLFAcddgaFN8y3B7psXuszfWU-_nev_QCd";
const invincibleID = "OLAK5uy_n1DB1jMHqbSjp-xqh_CaiiYcgSVbUQfWw&index=2";
const jackson5 = "PLU9GfqN_-WjVj10YaVlNCROVENtcFEe8s";
const history = "PL15ty5GYCv5uDdbqMZNPVLeis1My2YV6O";
const bgsnf = "PLJMN_UPGXcekhY9OQ5nU9tUgOHNuo_P75";



async function fetchPlaylistVideos(playlistId) {
  try {

    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=${playlistId}&key=${apiKey}`;

    const response = await axios.get(playlistUrl);
    // console.log(response.data.items);

    // Extract video information from the response
    const videos = response.data.items.map(item => ({
      "song_title": item.snippet.title||"N/A",
      "song_url": `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`||"N/A",
      "thumbnail": (item.snippet.thumbnails && item.snippet.thumbnails.default) ? item.snippet.thumbnails.default.url : '', // Check if thumbnails exist before accessing
    }));
    const artistName = response.data.items[0].snippet.videoOwnerChannelTitle.split('- Topic')[0].trim();
    return { videos, artistName };

    
  } catch (error) {
    console.error('Error fetching playlist:', error.message);
    return [];
  }
}

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const playlists = [bgsnf, thrillerID];

  const fetches = playlists.map(async (playlist) => {
    const { videos, artistName } = await fetchPlaylistVideos(playlist);
    const artist = await Artist.create({ artist_name: artistName });

    const videoList = videos.map((video) => ({
      ...video,
      artist_id: artist.id,
    }));

    await Song.bulkCreate(videoList);
    console.log('Songs seeded for artist:', artistName);
  });

  try {
    await Promise.all(fetches);
    console.log('All playlists seeded');
  } catch (error) {
    console.error('Error seeding playlists:', error);
  }
};









seedDatabase();



