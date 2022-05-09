/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  // membuat user baru.
  pgm.sql(
    "INSERT INTO albums(id, name, year, created_at, updated_at) VALUES ('old_notes', 'old_notes', 2022, 'old_notes', 'old notes')",
  );

  // mengubah nilai owner pada note yang owner-nya bernilai NULL
  pgm.sql("UPDATE songs SET album_id = 'old_notes' WHERE album_id = NULL");

  // assign foreign key constraint to album_id against id column from the album table
  pgm.addConstraint('songs', 'songs_fk', {
    foreignKeys: {
      columns: 'album_id',
      references: 'albums',
    },
  });
};

exports.down = (pgm) => {
  // delete constraint of fk_notes.owner_users.id to songs tables
  pgm.dropConstraint('songs', 'songs_fk', {
    foreignKeys: {
      columns: 'album_id',
      references: 'albums',
    },
  });

  // mengubah nilai owner old_notes pada note menjadi NULL
  pgm.sql("UPDATE songs SET album_id = NULL WHERE album_id = 'old_notes'");

  // delete new album.
  pgm.sql("DELETE FROM albums WHERE id = 'old_notes'");
};
