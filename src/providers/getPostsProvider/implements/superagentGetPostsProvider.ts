import superagent from "superagent"

import { IPost } from "../../../useCases/posts/interfaces/IPost"
import { IGetPostsProvider } from "../IGetPostsProvider"


export class SuperagentGetPostsProvider implements IGetPostsProvider {
	async execute(url: string, tag: string): Promise<IPost[]> {
		const response = await superagent
			.get(url)
			.query({ tag: tag })

		return response.body.posts
	}
}
