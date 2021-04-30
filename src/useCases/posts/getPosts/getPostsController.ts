import { Request, Response } from "express"
import { ICacheProvider } from "../../../providers/cacheProvider/ICacheProvider"

import { IController } from "../../interfaces/IController"
import { IUseCase } from "../../interfaces/IUseCase"


export class GetPostsController implements IController {
	constructor(
		private useCase: IUseCase,
		private cacheProvider: ICacheProvider
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { tags, sortBy, direction } = request.query

		try {
			const data = await this.useCase.execute({ tags, sortBy, direction })
			if (data.error) {
				return response.status(400).send({ error: data.error })
			}

			await this.cacheProvider.set(request.url, data, parseInt(process.env.CACHE_EXPIRE_TIME_IN_SECONDS || "5"))

			return response.status(200).send(data.data)
		}

		catch (error) {
			console.log(error.message)
			return response.status(400).send({ error: "Unexpected Error." })
		}
	}
}
