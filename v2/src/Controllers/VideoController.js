const connection = require("../database/connection");

module.exports = {
  async indexHistory(_, res) {
    try {
      const history = await connection("history")
        .select("videoID", "title")
        .orderBy("id", "desc");
      return res.json(history);
    } catch (e) {
      console.error("Unexpected error indexing history:", e);
      return res.sendStatus(422);
    }
  },

  async addToHistory(req, res) {
    try {
      req.body.forEach(async (link) => {
        const { title, videoID } = link;
        await connection("history").insert({
          videoID,
          title,
        });
      });
      return res.sendStatus(201);
    } catch (e) {
      console.error("Unexpected error adding to history:", e);
      return res.sendStatus(422);
    }
  },

  async toggleBookmark(req, res) {
    const ids = [];

    // if a bookmark is toggled an even amount of times
    // in the same request, it's original value would remain
    req.body.forEach((id) => {
      const otherIndex = ids.indexOf(id);
      if (otherIndex !== -1) ids.splice(otherIndex, 1);
      else ids.push(id);
    });

    try {
      ids.forEach(async (id) => {
        const { bookmarked: oldValue } = await connection("history")
          .select("bookmarked")
          .where("videoID", id)
          .first();

        const bookmarked = Math.abs(oldValue - 1);
        await connection("history")
          .update("bookmarked", bookmarked)
          .where("videoID", id);
      });

      return res.sendStatus(200);
    } catch (e) {
      console.error("Unexpected error toggling bookmark:", e);
      return res.sendStatus(422);
    }
  },

  async indexBookmarks(_, res) {
    try {
      const bookmarks = await connection("history")
        .distinct("videoID", "title")
        .orderBy("id", "desc")
        .where("bookmarked", 1);

      return res.json(bookmarks);
    } catch (e) {
      console.error("Unexpected error indexing bookmarks:", e);
      return res.sendStatus(422);
    }
  },
};
