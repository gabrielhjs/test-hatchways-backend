import { Request, Response, NextFunction } from "express"

import { cacheProvider } from ".."


export const cacheMiddleware = async (
	request: Request,
	response: Response,
	next: NextFunction
): Promise<Response | void> => {
	const cacheContent = await cacheProvider.get(request.url)

	if (cacheContent === undefined) {
		next()
	}

	else {
		return response.send(cacheContent)
	}
}
