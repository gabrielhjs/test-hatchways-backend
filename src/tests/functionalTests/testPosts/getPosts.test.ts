import request from "supertest"

import { app } from "../../../app"


describe("Test getProduct route", () => {
	it("should be without tags query", async () => {
		const response = await request(app).get("/api/post")

		expect(response.status).toBe(400)
		expect(response.body).toEqual({ error: "Tags parameter is required" })
	})

	it("should be invalid sortBy", async () => {
		const response = await request(app)
			.get("/api/post")
			.query({
				tags: "tech",
				sortBy: "asdf"
			})

		expect(response.status).toBe(400)
		expect(response.body).toEqual({ error: "sortBy parameter is invalid" })
	})

	it("should be invalid direction", async () => {
		const response = await request(app)
			.get("/api/post")
			.query({
				tags: "tech",
				direction: "asdf"
			})

		expect(response.status).toBe(400)
		expect(response.body).toEqual({ error: "direction parameter is invalid" })
	})

	it("should be without ok", async () => {
		const response = await request(app)
			.get("/api/post")
			.query({
				tags: "tech"
			})

		expect(response.status).toBe(200)
	})

	it("should be without cached", async () => {
		const response1 = await request(app)
			.get("/api/post")
			.query({
				tags: "tech"
			})

		const response2 = await request(app)
			.get("/api/post")
			.query({
				tags: "tech"
			})

		expect(response1.status).toBe(200)
		expect(response2.status).toBe(200)
	})

	it("should be without sortBy: likes direction: asc", async () => {
		const response = await request(app)
			.get("/api/post")
			.query({
				tags: "tech",
				sortBy: "likes",
				direction: "asc"
			})

		expect(response.status).toBe(200)
	})

	it("should be without sortBy: likes direction: desc", async () => {
		const response = await request(app)
			.get("/api/post")
			.query({
				tags: "tech",
				sortBy: "likes",
				direction: "desc"
			})

		expect(response.status).toBe(200)
	})
})
