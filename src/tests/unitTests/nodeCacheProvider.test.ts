import { NodeCacheProvider } from "../../providers/cacheProvider/implements/nodeCacheProvider"


describe("Test NodeCacheProvider", () => {
	const cacheProvider = new NodeCacheProvider()

	it("should be cached", async () => {
		const key = "test"
		const data = { test: "test" }
		const timeout = 1

		cacheProvider.set(key, data, timeout)


		expect(await cacheProvider.get(key)).toEqual(data)
	})

	it("should be not cached", async () => {
		const key = "test"
		const data = { test: "test" }
		const timeout = 1

		await cacheProvider.set(key, data, timeout)
		await new Promise(_ => setTimeout(_, 1001));

		expect(await cacheProvider.get(key)).toBe(undefined)
	})
})
