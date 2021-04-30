import request from "supertest"

import { app } from "../../../app"


describe("Test ping route", () => {
	it("should be ok", async () => {
		await request(app)
			.get("/api/ping")
			.expect(200)
	})

	it("should be ok with no compression query", async () => {
		await request(app)
			.get("/api/ping")
			.set("x-no-compression", "true")
			.expect(200)
	})
})
