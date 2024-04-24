const router = require('express').Router();
const { Playlist, Song, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET /api/playlists
// get all playlists
