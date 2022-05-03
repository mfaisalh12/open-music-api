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

- GET /albums/{id}
  Status code : `200`

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

### Song endpoint management

| Endpoint           | Request   |   Type   | Description       |
| :----------------- | :-------- | :------: | :---------------- |
| POST /songs        | title     | `string` | Add song          |
|                    | year      | `number` |                   |
|                    | genre     | `string` |                   |
|                    | performer | `string` |                   |
|                    | duration  | `number` |                   |
| GET /songs         | -         |    -     | Get all songs     |
| GET /songs/{id}    | -         |    -     | Get song by id    |
| PUT /songs/{id}    | title     | `string` | Edit song by id   |
|                    | year      | `number` |                   |
|                    | genre     | `string` |                   |
|                    | performer | `string` |                   |
|                    | duration  | `number` |                   |
| DELETE /songs/{id} | -         |    -     | Delete song by id |

#### Example Response API

- GET /songs
  Status code : `200`

  ```json
  {
    "status": "success",
    "data": {
      "songs": {
        "id": "song-Qbax5Oy7L8WKf74l",
        "title": "Life in Technicolor",
        "performer": "Coldplay"
      },
      {
        "id": "song-poax5Oy7L8WKllqw",
        "title": "Centimeteries of London",
        "performer": "Coldplay"
      },
      {
        "id": "song-Qalokam7L8WKf74l",
        "title": "Lost!",
        "performer": "Coldplay"
      }
    }
  }
  ```

#### Example Error Response API

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
