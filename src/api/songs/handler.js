/* eslint-disable no-underscore-dangle */
const ClientError = require('../../exceptions/ClientError');

class SongsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postSongHandler = this.postSongHandler.bind(this);
    this.getSongsHandler = this.getSongsHandler.bind(this);
    this.getSongsByIdHandler = this.getSongsByIdHandler.bind(this);
    this.putSongByIdHandler = this.putSongByIdHandler.bind(this);
    this.deleteSongByIdHandler = this.deleteSongByIdHandler.bind(this);
  }

  // post songs
  async postSongHandler(request, h) {
    try {
      this._validator.validateSongPayload(request.payload);
      // prettier-ignore
      const {
        title = 'untitled', year, genre, performer, duration, albumId,
      } = request.payload;

      const songId = await this._service.addSong({
        title,
        year,
        genre,
        performer,
        duration,
        albumId,
      });

      const response = h.response({
        status: 'success',
        message: 'Song berhasil ditambahkan',
        data: {
          songId,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }

      // server error
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server',
      });
      response.code(500);
      console.error(error);
      return response;
    }
  }

  // get all songs data
  async getSongsHandler(request, h) {
    const { title, performer } = request.query;

    const songs = await this._service.getSongs();

    let songsFilter = songs;
    if (title !== undefined) {
      // prettier-ignore
      songsFilter = songs.filter((song) => song.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (performer !== undefined) {
      // prettier-ignore
      songsFilter = songs.filter(
        (song) => song.performer.toLowerCase().includes(performer.toLowerCase()),
      );
    }

    const response = h.response({
      status: 'success',
      data: {
        songs: songsFilter.map((song) => ({
          id: song.id,
          title: song.title,
          performer: song.performer,
        })),
      },
    });
    response.code(200);
    return response;

    // const songsProp = songs.map((song) => ({
    //   id: song.id,
    //   title: song.title,
    //   performer: song.performer,
    // }));
    // return {
    //   status: 'success',
    //   data: { songs: songsProp },
    // };
  }

  async getSongsByIdHandler(request, h) {
    try {
      const { id } = request.params;

      const song = await this._service.getSongById(id);

      return {
        status: 'success',
        data: {
          song,
        },
      };
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }

      // server error
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server',
      });
      response.code(500);
      console.error(error);
      return response;
    }
  }

  // edit song by id
  async putSongByIdHandler(request, h) {
    try {
      this._validator.validateSongPayload(request.payload);
      // prettier-ignore
      const {
        title, year, genre, performer, duration, albumId,
      } = request.payload;
      const { id } = request.params;

      await this._service.editSongById(id, {
        title,
        year,
        genre,
        performer,
        duration,
        albumId,
      });

      return {
        status: 'success',
        message: 'Song berhasil diperbarui',
      };
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }

      // server error
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server',
      });
      response.code(500);
      console.error(error);
      return response;
    }
  }

  async deleteSongByIdHandler(request, h) {
    try {
      const { id } = request.params;
      await this._service.deleteSongById(id);

      return {
        status: 'success',
        message: 'Song berhasil dihapus',
      };
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }

      // server error
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server',
      });
      response.code(500);
      console.error(error);
      return response;
    }
  }
}

module.exports = SongsHandler;
