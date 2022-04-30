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

Example :

- URL

  /users/:id

- Method:

  GET

* URL Params

  Required:

  `id=[integer]`

* Data Params

  None

* Success Response:

  Code: 200  
  Content: { id : 12, name : "Michael Bloom" }  
  Error Response:

  Code: 404 NOT FOUND  
  Content: { error : "User doesn't exist" }  
  OR

  Code: 401 UNAUTHORIZED
  Content: { error : "You are unauthorized to make this request." }
