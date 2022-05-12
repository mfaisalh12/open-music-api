/* eslint-disable camelcase */
/* prettier-ignore */
const mapDBToAlbumModel = ({
  id,
  name,
  year,
  created_at,
  updated_at,
}) => ({
  id,
  name,
  year,
  createdAt: created_at,
  updatedAt: updated_at,
});

const mapDBtoSongModel = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  created_at,
  updated_at,
  album_id,
}) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  createdAt: created_at,
  updatedAt: updated_at,
  albumId: album_id,
});

const mapDBtoPlaylistSongModel = ({ id, playlist_id, song_id }) => ({
  id,
  playlistId: playlist_id,
  songId: song_id,
});

module.exports = { mapDBToAlbumModel, mapDBtoSongModel, mapDBtoPlaylistSongModel };
