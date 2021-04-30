import { IGetPostsProvider } from "../../../providers/getPostsProvider/IGetPostsProvider"

import { IUseCase, IUseCaseResponse } from "../../interfaces/IUseCase"
import { GetPostsDTO } from "./getPostsDTO"


export class GetPostsUseCase implements IUseCase {
	constructor(
		private getPostsProvider: IGetPostsProvider
	) { }

	async execute(data: GetPostsDTO): Promise<IUseCaseResponse> {
		const validSortBy = ["id", "reads", "likes", "popularity"]
		const validDiraction = ["asc", "desc"]

		if (data.tags === undefined) {
			return { error: "Tags parameter is required" }
		}

		const tags = data.tags.split(",")
		const sortBy = data.sortBy || "id"
		const direction = data.direction || "asc"

		if (!validSortBy.includes(sortBy)) {
			return { error: "sortBy parameter is invalid" }
		}

		if (!validDiraction.includes(direction)) {
			return { error: "direction parameter is invalid" }
		}

		const postsLists = await Promise.all(tags.map(async (tag: string) => {
			return await this.getPostsProvider.execute(
				process.env.HATCHWAY_API_URL || "https://api.hatchways.io/assessment/blog/posts",
				tag
			)
		}))

		let postsList = new Array
		for (let item in postsLists) {
			postsList = postsList.concat(postsLists[item])
		}

		const seen = new Set()
		const filteredPosts = postsList.filter(item => {
			const duplicate = seen.has(item.id)
			seen.add(item.id)
			return !duplicate
		})

		const OrderedPostsList = filteredPosts.sort((post, nextPost) =>
			(post[sortBy] > nextPost[sortBy]) ? (direction === "asc" ? 1 : -1) :
				(post[sortBy] < nextPost[sortBy]) ? (direction === "asc" ? -1 : 1) : 0
		)

		return {
			data: { posts: OrderedPostsList },
			error: false
		}
	}
}