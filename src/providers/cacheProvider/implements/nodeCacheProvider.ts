import nodeCache from "node-cache"

import { ICacheProvider } from "../ICacheProvider"


export class NodeCacheProvider implements ICacheProvider {
	private cache: nodeCache

	constructor() {
		this.cache = new nodeCache({ stdTTL: 100, checkperiod: 120 })
	}

	async set(key: string, obj: object, timeout: number): Promise<boolean> {
		return this.cache.set(key, obj, timeout)
	}

	async get(key: string): Promise<object | undefined> {
		return this.cache.get(key)
	}
}