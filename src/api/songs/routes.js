const routes = (handlerSong) => [
  // song endpoint
  {
    method: 'POST',
    path: '/songs',
    handler: handlerSong.postSongHandler,
  },
  {
    method: 'GET',
    path: '/songs',
    handler: handlerSong.getSongsHandler,
  },
  {
    method: 'GET',
    path: '/songs/{id}',
    handler: handlerSong.getSongsByIdHandler,
  },
  {
    method: 'PUT',
    path: '/songs/{id}',
    handler: handlerSong.putSongByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/songs/{id}',
    handler: handlerSong.deleteSongByIdHandler,
  },
];

module.exports = routes;
