"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const express_1 = require("express");
const cacheMiddleware_1 = require("../../middlewares/cacheMiddleware");
const getPosts_1 = require("./getPosts");
const postsRouter = express_1.Router();
exports.postsRouter = postsRouter;
postsRouter.get("/", cacheMiddleware_1.cacheMiddleware, (request, response) => {
    return getPosts_1.getPostsController.handle(request, response);
});
