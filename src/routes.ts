import { Router } from "express"


const router = Router()


router.get("/ping", (request, response) => {
	return response.status(200).send({ success: true })
})


export { router }
