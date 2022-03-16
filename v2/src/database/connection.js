const knex = require("knex");
const configuration = {
  client: "sqlite3",
  connection: {
    filename: "./src/database/db.sqlite3",
  },
  pool: {
    afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb),
  },
  useNullAsDefault: true,
};

const connection = knex(configuration);

module.exports = connection;

// Table schema
// CREATE TABLE history (
// 	id INTEGER PRIMARY KEY,
//   videoID TEXT NOT NULL,
//   title TEXT NOT NULL,
//   bookmarked INTEGER NOT NULL DEFAULT 0
// );

// insert into history(videoID, title)
// values
// ("Ug_nmrMfEBA","Resident Evil Full Story - EVERYTHING You Need To Know Before You Play Resident Evil Village"),
// ("0MR5Eo-42zc","I forgot how insane Twilight Eclipse is"),
// ("VrdMPUHpLOM","Ghostwire: Tokyo - Official Gameplay Overview"),
// ("WH4ccUV2VCU","Game development is HARD"),
// ("LOQ0K97nfSk","The Viral Social Experiment that Ruined Lives"),
// ("CdlLHLduAt0","Frozen vs. Fast vs. Fancy Food Taste Test"),
// ("pC1hhLvGqZo","Florence + The Machine - KING (Chapter 1) Trailer"),
// ("1TO9-ujYh7A","BANKS - Holding Back (Official Audio)"),
// ("5FNCukepaS8","Tove Lo - How Long (Official Video)"),
// ("L62LtChAwww","Florence + The Machine - King")
