import { cacheProvider } from "../../../"
import { SuperagentGetPostsProvider } from "../../../providers/getPostsProvider/implements/superagentGetPostsProvider"
import { GetPostsController } from "./getPostsController"
import { GetPostsUseCase } from "./getPostsUseCase"


const getPostsProvider = new SuperagentGetPostsProvider()

const getPostsUseCase = new GetPostsUseCase(
	getPostsProvider
)


const getPostsController = new GetPostsController(
	getPostsUseCase,
	cacheProvider
)


export { getPostsController }
