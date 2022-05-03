# OpenMusic API versi 1

A project for submission in DICODING

## API Reference

### Album endpoint management

| Endpoint            | Request |   Type   | Description        |
| :------------------ | :------ | :------: | :----------------- |
| POST /albums        | name    | `string` | Add album          |
|                     | year    | `number` |                    |
| GET /albums/{id}    | -       |    -     | Get album by id    |
| PUT /albums/{id}    | name    | `string` | Edit album by id   |
|                     | year    | `number` |                    |
| DELETE /albums/{id} | -       |    -     | Delete album by id |

#### Example Response API

- Status code : `200`

  ```json
  {
    "status": "success",
    "data": {
      "album": {
        "id": "album-taN5xRLEqObTSQrc",
        "name": "Viva la vida",
        "year": 2008
      }
    }
  }
  ```

- Status code : `400 & 404`
  ```json
  {
    "status": "fail",
    "message": "Message Error" // 400: Client Error, 404: NotFoundError
  }
  ```
- Status code : `500`

  ```json
  {
    "status": "error",
    "message": "Maaf, terjadi kegagalan pada server"
  }
  ```
