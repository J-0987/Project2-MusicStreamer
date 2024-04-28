// Purpose: Seed the database with songs from YouTube playlists

const sequelize = require('../config/connection');
const { Song, Playlist, PlaylistSong, User, Artist } = require('../models');
const fetch = require('node-fetch');



//Seeding with youtube api API
const apiKey = "AIzaSyB2Fq8ORAPCEpg5cyfDCumh28lC50YowAE";
const axios = require("axios");



//VEVO
const vthrillerID ="PLsPeeGPxdpA8AaQ9XczdagNuBD4f31j7M";
const vdangerousID = "PLsPeeGPxdpA8tjWmoFgs4eeOYLFV-4tpw";
const bgHitsID = "PLIFa98jmT_5xhl5JD0nmutn7L8pMhOK3V"; 
const vbad = "PLsPeeGPxdpA8tKrH7UT5w0N2j-F6s7J5t";
const f1 = "PL32gHfWMCrxPwiHej-_j53it1Z31YUtN_";
const f2 = "PL32gHfWMCrxMvlIuXxTbxKOPAARMDS4jE";
const taylor = "PLINj2JJM1jxNOvEFIABOBa6OmURYOxOk3"
const taylorv = "PLINj2JJM1jxNeeZ9lih8SNd_NJEkA22u0";
const adele = "PLxgEqpZ1Pdg_2WCDSv8kH6gM1hXWUTpti";
const livingEyesId = "PLbR9X6YVuIRVqpsiGu0MAHrdGCErqWYuG";



async function fetchPlaylistVideos(playlistId) {
  try {

    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=${playlistId}&key=${apiKey}`;

    const response = await axios.get(playlistUrl);
    // console.log(response.data.items);

    // Extract video information from the response
    const videos = response.data.items.map(item => ({
      "song_title": item.snippet.title.split("-")[1]||"N/A",
      // "song_url": `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`||"N/A",
      "song_url": item.snippet.resourceId.videoId || "N/A",
      "thumbnail": (item.snippet.thumbnails && item.snippet.thumbnails.default) ? item.snippet.thumbnails.default.url : '', // Check if thumbnails exist before accessing
    }));
    const artistName = response.data.items[0].snippet.channelTitle;
    return { videos, artistName };

    
  } catch (error) {
    console.error('Error fetching playlist:', error.message);
    return [];
  }
}

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const playlists = [vthrillerID, vdangerousID, bgHitsID, vbad, f1, f2, adele, taylor, taylorv, livingEyesId];

  // Fetch all playlists and get unique artists
  const fetchedPlaylists = await Promise.all(playlists.map(fetchPlaylistVideos));
  console.log
  const uniqueArtists = [...new Set(fetchedPlaylists.map(({ artistName }) => artistName))];

  // Create each artist once
  const createdArtists = await Promise.all(uniqueArtists.map(artistName => Artist.create({ artist_name: artistName })));
  const artistMap = new Map(createdArtists.map(artist => [artist.artist_name.toLowerCase(), artist.id]));

  // Map over playlists
  const fetches = fetchedPlaylists.map(async ({ videos, artistName }) => {
    const artist = createdArtists.find(artist => artist.artist_name === artistName);

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



