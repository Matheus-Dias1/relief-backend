const express = require("express");
const VideoController = require("./Controllers/VideoController");
const routes = express.Router();

routes.get("/api/history", VideoController.indexHistory);
routes.post("/api/history", VideoController.addToHistory);

routes.get("/api/bookmarks", VideoController.indexBookmarks);
routes.put("/api/bookmarks/:id", VideoController.toggleBookmark);

module.exports = routes;
