const express = require("express");
const VideoController = require("./Controllers/VideoController");
const routes = express.Router();

routes.get("/history", VideoController.indexHistory);
routes.post("/history", VideoController.addToHistory);

routes.get("/bookmarks", VideoController.indexBookmarks);
routes.put("/bookmarks/:id", VideoController.toggleBookmark);

module.exports = routes;
