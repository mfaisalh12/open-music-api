const routes = (handlerAlbum, handlerSong) => [
  // albums endpoint
  {
    method: 'POST',
    path: '/albums',
    handler: handlerAlbum.postAlbumHandler,
  },
  {
    method: 'GET',
    path: '/albums/{id}',
    handler: handlerAlbum.getAlbumByIdHandler,
  },
  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: handlerAlbum.putAlbumByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: handlerAlbum.deleteAlbumByIdHandler,
  },

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
