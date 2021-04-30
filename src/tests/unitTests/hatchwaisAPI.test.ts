import request from "superagent"


describe("Test Hatchways API", () => {
	it("should be ok", async () => {
		const response = await request.get(
			"https://api.hatchways.io/assessment/blog/posts?tag=tech"
		)

		expect(response.status).toBe(200)
	})
})
