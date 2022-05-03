const AlbumsHandler = require('./albums/handler');
const SongsHandler = require('./songs/handler');
const routes = require('./routes');

module.exports = {
  name: 'musics',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const albumsHandler = new AlbumsHandler(service, validator);
    const songsHandler = new SongsHandler(service, validator);
    server.route(routes(albumsHandler, songsHandler));
  },
};
