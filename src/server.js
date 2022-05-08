require('dotenv').config();

const Hapi = require('@hapi/hapi');

// Album
const albums = require('./api/albums');
const AlbumsService = require('./services/AlbumsService');
const AlbumValidator = require('./validator/albums');

// Song
const songs = require('./api/songs');
const SongsService = require('./services/SongsService');
const SongValidator = require('./validator/songs');

const init = async () => {
  const albumsService = new AlbumsService();
  const songsService = new SongsService();

  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    {
      plugin: albums,
      options: {
        service: albumsService,
        validator: AlbumValidator,
      },
    },
    {
      plugin: songs,
      options: {
        service: songsService,
        validator: SongValidator,
      },
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
