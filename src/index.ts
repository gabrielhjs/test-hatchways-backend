
import { NodeCacheProvider } from "./providers/cacheProvider/implements/nodeCacheProvider"
import { RedisCacheProvider } from "./providers/cacheProvider/implements/redisCacheProvider"


const cacheProvider = new NodeCacheProvider()

export { cacheProvider }
