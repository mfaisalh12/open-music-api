/* eslint-disable no-underscore-dangle */
const ClientError = require('../../exceptions/ClientError');

class UserHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
  }

  async postUserHandler(request, h) {
    try {
      this._validator.validateUserPayload(request.payload);
      const { username, password, fullname } = request.payload;

      const userId = await this._server.addUser({ username, password, fullname });

      const response = h.response({
        status: 'success',
        message: 'User berhasil ditambahkan',
        data: {
          userId,
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

  async getUserByIdHandler(request, h) {
    try {
      const { id } = request.params;

      const user = await this._service.getUserById(id);

      return {
        status: 'success',
        data: {
          user,
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

  async getUserByUsernameHandler(request, h) {
    try {
      const { username = '' } = request.query;
      const users = await this._service.getUserByUsername(username);
      return {
        status: 'success',
        data: {
          users,
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
}

module.exports = UserHandler;
