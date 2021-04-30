import { Router } from "express"

import { cacheMiddleware } from "../../middlewares/cacheMiddleware"
import { getPostsController } from "./getPosts"


const postsRouter = Router()


postsRouter.get("/", cacheMiddleware, (request, response) => {
	return getPostsController.handle(request, response)
})


export { postsRouter }
