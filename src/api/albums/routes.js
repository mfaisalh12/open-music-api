const routes = (handler) => [
  // albums endpoint
  {
    method: 'POST',
    path: '/albums',
    handler: handler.postAlbumHandler,
  },
  {
    method: 'GET',
    path: '/albums/{id}',
    handler: handler.getAlbumByIdHandler,
  },
  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: handler.putAlbumByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: handler.deleteAlbumByIdHandler,
  },

  // song endpoint
  {
    method: 'POST',
    path: '/songs',
    handler: () => {},
  },
  {
    method: 'GET',
    path: '/songs',
    handler: () => {},
  },
  {
    method: 'GET',
    path: '/songs/{id}',
    handler: () => {},
  },
  {
    method: 'PUT',
    path: '/songs/{id}',
    handler: () => {},
  },
  {
    method: 'DELETE',
    path: '/songs/{id}',
    handler: () => {},
  },
];

module.exports = routes;
