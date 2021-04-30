import redisClient, { RedisClient } from "redis"
import { promisify } from "util"
import dotenv from "dotenv"

import { ICacheProvider } from "../ICacheProvider"


dotenv.config()


export class RedisCacheProvider implements ICacheProvider {
	private client: RedisClient

	constructor() {
		this.client = redisClient.createClient({
			port: parseInt(process.env.REDIS_PORT as string)
		})
	}

	async set(key: string, obj: object, timeout: number): Promise<boolean> {
		return this.client.set(key, JSON.stringify(obj), "EX", timeout)
	}
	async get(key: string): Promise<object | undefined> {
		const data = await promisify(this.client.get).bind(this.client)(key)

		if (data) return JSON.parse(data)
		else return undefined
	}
}