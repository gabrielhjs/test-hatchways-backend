"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPostsController = void 0;
class GetPostsController {
    constructor(useCase, cacheProvider) {
        this.useCase = useCase;
        this.cacheProvider = cacheProvider;
    }
    async handle(request, response) {
        const { tags, sortBy, direction } = request.query;
        try {
            const data = await this.useCase.execute({ tags, sortBy, direction });
            if (data.error) {
                return response.status(400).send({ error: data.error });
            }
            await this.cacheProvider.set(request.url, data, parseInt(process.env.CACHE_EXPIRE_TIME_IN_SECONDS || "5"));
            return response.status(200).send(data.data);
        }
        catch (error) {
            console.log(error.message);
            return response.status(400).send({ error: "Unexpected Error." });
        }
    }
}
exports.GetPostsController = GetPostsController;
